/**
 * Created by pior on 16/3/9.
 *
 * 游戏模式
 */
var GameScence = (function (_super) {
    __extends(GameScence, _super);
    function GameScence() {
        _super.call(this);
        this.card = [];
    }
    var d = __define,c=GameScence;p=c.prototype;
    p.init = function () {
        this.show();
    };
    p.show = function () {
        this.costime = 0;
        this.recardcount = 0;
        this.recardnum = 0;
        this.recarding = false;
        this.bpassgame = false;
        this.gamestate = GameState.gaming;
        this.costime = 0;
        this.discovercont = new egret.DisplayObjectContainer();
        var shape = GameUtil.createRect(0, 0, this.mStageW, this.mStageH, 1, 0x352a1f);
        this.addChild(shape);
        var bottom = new GameUtil.MyBitmap(RES.getRes('bottom_jpg'), 375, this.mStageH);
        bottom.setanchorOff(0.5, 1);
        this.addChild(bottom);
        this.addChild(TimePanel._i());
        TimePanel._i().reset();
        var pausebtn = new GameUtil.Menu(this, 'btnframe_png', 'btnframe_png', this.pausegame);
        pausebtn.addButtonImg('pausebtn_png');
        pausebtn.x = 695;
        pausebtn.y = GameUtil.setscreenY(1268);
        this.addChild(pausebtn);
        this.addChild(AdaptGamelayer._i());
        AdaptGamelayer._i().initlayer(this.mStageH - 158);
        this.showAdapLayer();
    };
    p.showAdapLayer = function () {
        var cardid;
        for (var i = 0; i < 12; i++) {
            if (i % 2 == 0) {
                cardid = Math.floor(i / 2) + 6 * (Math.floor(Math.random() * 100) % 5);
            }
            console.log('cardid====', cardid);
            this.card[i] = new cardsprite(RES.getRes('cardback_png'), 97 + Math.floor(i % 3) * 227, 180 + Math.floor(i / 3) * 296, Math.floor(i / 2), cardid);
            AdaptGamelayer._i().putItme(this.card[i]);
        }
        AdaptGamelayer._i().adpat();
        for (var i = 0; i < 10; i++) {
            var rd = Math.floor(Math.random() * 100) % 12;
            var rdr = Math.floor(Math.random() * 100) % 12;
            var posfx = this.card[rd].x;
            var posfy = this.card[rd].y;
            this.card[rd].x = this.card[rdr].x;
            this.card[rd].y = this.card[rdr].y;
            this.card[rdr].x = posfx;
            this.card[rdr].y = posfy;
        }
    };
    p.pausegame = function () {
        //console.log('pausegame');
        this.gamestate = GameState.gamepause;
        this.addChild(this.discovercont);
        this.discovercont.touchEnabled = true;
        var shap = GameUtil.createRect(0, 0, this.mStageW, this.mStageH, 0.6);
        this.discovercont.addChild(shap);
        var continubtn = new GameUtil.Menu(this, 'continubtn_jpg', 'continubtn_jpg', this.continugame);
        continubtn.x = this.mStageW / 2;
        continubtn.y = GameUtil.setscreenY(591);
        this.discovercont.addChild(continubtn);
        var backbomebtn = new GameUtil.Menu(this, 'backhomebtn_jpg', 'backhomebtn_jpg', this.backhome);
        backbomebtn.x = this.mStageW / 2;
        backbomebtn.y = continubtn.y + 183;
        this.discovercont.addChild(backbomebtn);
    };
    p.continugame = function () {
        this.gamestate = GameState.gaming;
        this.discovercont.removeChildren();
        this.removeChild(this.discovercont);
    };
    p.backhome = function () {
        egret.clearInterval(TimePanel._i().intervaltag);
        TimePanel._i().removeChildren();
        AdaptGamelayer._i().removeChildren();
        this.removeChildren();
        GameUtil.GameScene.runscene(new GameStartScene());
    };
    p.setcurrecard = function (recard) {
        this.currecard = recard;
    };
    p.getcurrecard = function () {
        return this.currecard;
    };
    p.setrecardnum = function (value) {
        this.recardnum = value;
    };
    p.getrecardnum = function () {
        return this.recardnum;
    };
    p.setrecardcount = function (value) {
        this.recardcount = value;
    };
    p.getrecardcount = function () {
        return this.recardcount;
    };
    p.successGame = function () {
        GameUtil.GameConfig._i().bfirstplay = false;
        this.bpassgame = true;
        this.addChild(this.discovercont);
        this.discovercont.touchEnabled = true;
        var cover = GameUtil.createRect(0, 0, this.mStageW, this.mStageH, 0.6);
        this.discovercont.addChild(cover);
        var text = new GameUtil.MyBitmap(RES.getRes('passtext_png'), this.mStageW / 2, this.mStageH / 2 - 310);
        this.discovercont.addChild(text);
        var usetimetext = new GameUtil.MyTextField(this.mStageW / 2, this.mStageH / 2 - 200, 40);
        usetimetext.setText('您的成绩是' + Math.ceil(this.costime / 1000) + '秒');
        usetimetext.textColor = 0xff7544;
        this.discovercont.addChild(usetimetext);
        var playagainbtn = new GameUtil.Menu(this, 'playagainbtn_png', 'playagainbtn_png', this.playagain);
        playagainbtn.x = this.mStageW / 2;
        playagainbtn.y = usetimetext.y + 214; //731;
        this.discovercont.addChild(playagainbtn);
        var sharebtn = new GameUtil.Menu(this, 'sharebtn_png', 'sharebtn_png', this.sharegmae);
        sharebtn.x = this.mStageW / 2;
        sharebtn.y = playagainbtn.y + 204; //936;
        this.discovercont.addChild(sharebtn);
    };
    p.playagain = function () {
        // TimePanel._i().reset();
        AdaptGamelayer._i().removeChildren();
        TimePanel._i().removeChildren();
        this.removeChildren();
        GameUtil.GameScene.runscene(GameScence._i());
    };
    p.sharegmae = function () {
        console.log('sharegame');
        var discont = new egret.DisplayObjectContainer();
        this.addChild(discont);
        var self = this;
        var discover = GameUtil.createRect(0, 0, this.mStageW, this.mStageH, 0.6);
        discont.addChild(discover);
        discover.touchEnabled = true;
        discover.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            self.removeChild(discont);
        }, this);
        var sharetip = new GameUtil.MyBitmap(RES.getRes('sharetip_png'), this.mStageW, 0);
        sharetip.setanchorOff(1, 0);
        discont.addChild(sharetip);
        if (this.bpassgame) {
            SharePage._i().setdesctext(Math.ceil(this.costime / 1000) + '秒我就通关成神，有本事让我看看你多厉害！');
        }
        else {
            SharePage._i().setdesctext('听说快速完成了这个游戏的都成神了！');
        }
    };
    p.gameOver = function () {
        //console.log('gameover');
        GameUtil.GameConfig._i().bfirstplay = false;
        this.addChild(this.discovercont);
        this.discovercont.touchEnabled = true;
        var cover = GameUtil.createRect(0, 0, this.mStageW, this.mStageH, 0.6);
        this.discovercont.addChild(cover);
        var text = new GameUtil.MyTextField(this.mStageW / 2, this.mStageH / 2 - 250, 50); //527
        text.$setWidth(422);
        text.textColor = 0xff7544;
        text.setText('还差一点就通关了再接再励哦!!!');
        text.textAlign = egret.HorizontalAlign.CENTER;
        this.discovercont.addChild(text);
        var playagainbtn = new GameUtil.Menu(this, 'playagainbtn_png', 'playagainbtn_png', this.playagain);
        playagainbtn.x = this.mStageW / 2;
        playagainbtn.y = text.y + 214; //731;
        this.discovercont.addChild(playagainbtn);
        var sharebtn = new GameUtil.Menu(this, 'sharebtn_png', 'sharebtn_png', this.sharegmae);
        sharebtn.x = this.mStageW / 2;
        sharebtn.y = playagainbtn.y + 204; //936;
        this.discovercont.addChild(sharebtn);
    };
    GameScence._i = function () {
        if (this.ints == null) {
            this.ints = new GameScence();
        }
        return this.ints;
    };
    GameScence.TotalCard = 6;
    return GameScence;
})(GameUtil.BassPanel);
egret.registerClass(GameScence,"GameScence");
