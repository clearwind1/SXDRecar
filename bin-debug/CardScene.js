/**
 * Created by pior on 16/3/9.
 *
 * 欣赏模式（收集的卡）
 */
var CardScene = (function (_super) {
    __extends(CardScene, _super);
    function CardScene() {
        _super.call(this);
    }
    var d = __define,c=CardScene;p=c.prototype;
    p.init = function () {
        this.addChild(AdaptGamelayer._i());
        AdaptGamelayer._i().initlayer(this.mStageH - 158);
        this.show();
    };
    p.show = function () {
        var bottom = new GameUtil.MyBitmap(RES.getRes('bottom_png'), 375, this.mStageH);
        bottom.setanchorOff(0.5, 1);
        this.addChild(bottom);
        this.showcard(1);
    };
    p.showcard = function (page) {
        AdaptGamelayer._i().removeChildren();
        for (var i = 0; i < 12; i++) {
            var card = new GameUtil.MyBitmap(RES.getRes('card0_png'), 97 + Math.floor(i % 3) * 227, 180 + Math.floor(i / 3) * 296);
            AdaptGamelayer._i().putItme(card);
        }
        AdaptGamelayer._i().adpat();
    };
    return CardScene;
})(GameUtil.BassPanel);
egret.registerClass(CardScene,"CardScene");
