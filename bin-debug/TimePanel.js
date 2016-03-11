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
