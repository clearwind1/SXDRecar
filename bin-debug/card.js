/**
 * Created by pior on 16/3/11.
 */
var cardsprite = (function (_super) {
    __extends(cardsprite, _super);
    function cardsprite(texture, posx, posy, cardid, slcardid) {
        _super.call(this, texture, posx, posy);
        this.turntime = 100;
        this.initcard(cardid, slcardid);
    }
    var d = __define,c=cardsprite;p=c.prototype;
    p.initcard = function (cardid, slcardid) {
        this.cardID = cardid;
        this.currdid = slcardid;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.recard, this);
    };
    p.recard = function (evt) {
        if (GameScence._i().recarding) {
            return;
        }
        GameScence._i().recarding = true;
        this.touchEnabled = false;
        var self = this;
        var cardname = 'card' + this.currdid + '_png';
        egret.Tween.get(this).to({ scaleX: 0 }, self.turntime).call(function () {
            self.setNewTexture(RES.getRes(cardname));
        }).to({ scaleX: 1 }, self.turntime).call(self.finishrecard, self);
    };
    p.returnrecard = function () {
        var self = this;
        var cardname = 'cardback_png';
        egret.Tween.get(this).to({ scaleX: 0 }, self.turntime).call(function () {
            self.setNewTexture(RES.getRes(cardname));
        }).to({ scaleX: 1 }, self.turntime).call(function () {
            self.touchEnabled = true;
            GameScence._i().recarding = false;
        });
    };
    p.finishrecard = function () {
        var recardnum = GameScence._i().getrecardnum();
        if (recardnum == 0) {
            GameScence._i().setrecardnum(1);
            GameScence._i().setcurrecard(this);
            GameScence._i().recarding = false;
        }
        else {
            //判断两张卡是否同样
            if (this.cardID == GameScence._i().getcurrecard().cardID) {
                GameScence._i().recarding = false;
                var recardcount = GameScence._i().getrecardcount();
                recardcount++;
                GameScence._i().setrecardcount(recardcount);
                if (recardcount == GameScence.TotalCard) {
                    egret.clearInterval(TimePanel._i().intervaltag);
                    GameScence._i().successGame();
                }
            }
            else {
                var self = this;
                var gsc = GameScence._i().getcurrecard();
                egret.setTimeout(function () {
                    self.returnrecard();
                    gsc.returnrecard();
                }, this, 300);
            }
            GameScence._i().setrecardnum(0);
            GameScence._i().setcurrecard(null);
        }
    };
    return cardsprite;
})(GameUtil.MyBitmap);
egret.registerClass(cardsprite,"cardsprite");
