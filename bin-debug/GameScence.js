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
        this.recardnum = 0;
        this.currecard = null;
        this.recardcount = 0;
        this.recarding = false;
    }
    var d = __define,c=GameScence;p=c.prototype;
    p.init = function () {
        this.gametime = new Date().getTime();
        console.log('gametime====', this.gametime);
        this.show();
    };
    p.show = function () {
        //console.log('hhhh======',this.mStageH);
        this.discovercont = new egret.DisplayObjectContainer();
        var bottom = new GameUtil.MyBitmap(RES.getRes('bottom_png'), 375, this.mStageH);
        bottom.setanchorOff(0.5, 1);
        this.addChild(bottom);
        this.addChild(TimePanel._i());
        TimePanel._i().$setAnchorOffsetY(TimePanel._i().height);
        TimePanel._i().y = this.mStageH;
        this.addChild(AdaptGamelayer._i());
        AdaptGamelayer._i().initlayer(this.mStageH - 158);
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 4; j++) {
                this.card[i + j * 3] = new cardsprite(RES.getRes('cardback_png'), 97 + i * 227, 180 + j * 296, Math.floor((i + j * 3) / 2));
                AdaptGamelayer._i().putItme(this.card[i + j * 3]);
            }
        }
        AdaptGamelayer._i().adpat();
        /*
        for(var i:number=0;i < 10;i++){
            var rd:number = Math.floor(Math.random()*100)%12;
            var rdr: number = Math.floor(Math.random()*100)%12;
            var posfx = this.card[rd].x;
            var posfy = this.card[rd].y;
            this.card[rd].x = this.card[rdr].x;
            this.card[rd].y = this.card[rdr].y;
            this.card[rdr].x = posfx;
            this.card[rdr].y = posfy;
        }
        */
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
        var endtime = new Date().getTime();
        var runtime = (endtime - this.gametime) / 1000;
        console.log('endtime=====', runtime);
        this.addChild(this.discovercont);
        this.discovercont.touchEnabled = true;
        var cover = GameUtil.createRect(0, 0, this.mStageW, this.mStageH, 0.6);
        this.discovercont.addChild(cover);
        var usetimetext = new GameUtil.MyTextField(this.mStageW / 2, GameUtil.setscreenY(500), 35);
        usetimetext.setText('您的成绩是' + runtime + '秒');
        usetimetext.textColor = 0xff7544;
        this.discovercont.addChild(usetimetext);
    };
    p.gameOver = function () {
        console.log('gameover');
        this.addChild(this.discovercont);
        this.discovercont.touchEnabled = true;
        var cover = GameUtil.createRect(0, 0, this.mStageW, this.mStageH, 0.6);
        this.discovercont.addChild(cover);
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
