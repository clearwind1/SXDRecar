/**
 * Created by pior on 16/3/11.
 *
 * 时间
 */
var TimePanel = (function (_super) {
    __extends(TimePanel, _super);
    function TimePanel() {
        _super.call(this);
    }
    var d = __define,c=TimePanel;p=c.prototype;
    p.init = function () {
        this.show();
    };
    p.show = function () {
        var timetext = new GameUtil.MyTextField(30, 15, 30, 0);
        timetext.setText('Time:');
        this.addChild(timetext);
        this.timebar = new GameUtil.MyBitmap(RES.getRes('loadingbar_png'), 115, 15);
        this.timebar.setanchorOff(0, 0.5);
        this.addChild(this.timebar);
        //this.timebar.scale9Grid = new egret.Rectangle(15,7,270,10);
        this.intervaltag = egret.setInterval(this.timerun, this, 100);
    };
    p.timerun = function () {
        var sc = this.timebar.$getScaleX();
        sc -= 0.01;
        this.timebar.$setScaleX(sc);
        if (sc <= 0) {
            egret.clearInterval(this.intervaltag);
            GameScence._i().gameOver();
        }
    };
    TimePanel._i = function () {
        if (this.inst == null) {
            this.inst = new TimePanel();
        }
        return this.inst;
    };
    return TimePanel;
})(GameUtil.BassPanel);
egret.registerClass(TimePanel,"TimePanel");
