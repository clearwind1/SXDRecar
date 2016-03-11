/**
 * Created by pior on 16/3/9.
 */
var GameStartScene = (function (_super) {
    __extends(GameStartScene, _super);
    function GameStartScene() {
        _super.call(this);
    }
    var d = __define,c=GameStartScene;p=c.prototype;
    p.init = function () {
        this.show();
    };
    p.show = function () {
        var discont = new egret.DisplayObjectContainer();
        discont.width = GameUtil.GameConfig.DesignWidth;
        discont.height = GameUtil.GameConfig._i().getSH();
        this.addChild(discont);
        var titletext = new GameUtil.MyTextField(this.mStageW / 2, 80, 35);
        titletext.setText('封神名册');
        discont.addChild(titletext);
        var startbtn = new GameUtil.Menu(this, 'frame_png', 'frame_png', this.startgame);
        startbtn.setScaleMode();
        startbtn.addButtonText('开始游戏', 25);
        startbtn.x = this.mStageW / 2;
        startbtn.y = GameUtil.setscreenY(500);
        discont.addChild(startbtn);
        var startbtn = new GameUtil.Menu(this, 'frame_png', 'frame_png', this.enjoymode);
        startbtn.setScaleMode();
        startbtn.addButtonText('欣赏模式', 25);
        startbtn.x = this.mStageW / 2;
        startbtn.y = GameUtil.setscreenY(580);
        discont.addChild(startbtn);
    };
    p.startgame = function () {
        GameUtil.GameScene.runscene(GameScence._i());
    };
    p.enjoymode = function () {
        GameUtil.GameScene.runscene(new CardScene());
    };
    return GameStartScene;
})(GameUtil.BassPanel);
egret.registerClass(GameStartScene,"GameStartScene");
