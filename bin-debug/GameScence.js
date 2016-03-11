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
        this.card[0] = new cardsprite(RES.getRes('cardback_png'), this.mStageW / 2, GameUtil.setscreenY(200), 0);
        this.addChild(this.card[0]);
        this.card[1] = new cardsprite(RES.getRes('cardback_png'), this.mStageW / 2, GameUtil.setscreenY(400), 0);
        this.addChild(this.card[1]);
        this.addChild(TimePanel._i());
        TimePanel._i().$setAnchorOffsetY(TimePanel._i().height);
        TimePanel._i().y = this.mStageH;
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
    };
    p.gameOver = function () {
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
