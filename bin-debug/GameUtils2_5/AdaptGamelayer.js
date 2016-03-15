/**
 * Created by pior on 16/3/14.
 */
var AdaptGamelayer = (function (_super) {
    __extends(AdaptGamelayer, _super);
    function AdaptGamelayer() {
        _super.call(this);
    }
    var d = __define,c=AdaptGamelayer;p=c.prototype;
    p.init = function (maxheight) {
        this.maxheight = maxheight;
    };
    p.putItme = function (child, isend) {
        if (isend === void 0) { isend = false; }
        this.addChild(child);
        if (isend) {
            if (this.$getHeight() > this.maxheight) {
                var sc = this.maxheight / this.$getHeight();
                this.scaleX = this.scaleY = sc;
            }
        }
    };
    AdaptGamelayer._i = function () {
        if (this.inst == null) {
            this.inst = new AdaptGamelayer();
        }
        return this.inst;
    };
    return AdaptGamelayer;
})(egret.DisplayObjectContainer);
egret.registerClass(AdaptGamelayer,"AdaptGamelayer");
