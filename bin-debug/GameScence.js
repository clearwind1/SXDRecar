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
        this.show();
    };
    p.show = function () {
        this.addChild(TimePanel._i());
        TimePanel._i().$setAnchorOffsetY(TimePanel._i().height);
        TimePanel._i().y = this.mStageH;
        this.addChild(AdaptGamelayer._i());
        AdaptGamelayer._i().init(this.mStageH - 60);
        this.card[0] = new cardsprite(RES.getRes('cardback_png'), this.mStageW / 2, GameUtil.setscreenY(200), 0);
        AdaptGamelayer._i().putItme(this.card[0]);
        this.card[1] = new cardsprite(RES.getRes('cardback_png'), this.mStageW / 2, GameUtil.setscreenY(700), 0);
        AdaptGamelayer._i().putItme(this.card[1], true);
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
        console.log('successgame');
    };
    p.gameOver = function () {
        console.log('gameover');
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
