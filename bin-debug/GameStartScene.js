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
        var bg = new GameUtil.MyBitmap(RES.getRes('gamebg_png'), 0, 0);
        bg.setanchorOff(0, 0);
        this.addChild(bg);
        var startbtn = new GameUtil.Menu(this, 'startgamebtn_png', 'startgamebtn_png', this.startgame);
        startbtn.setScaleMode();
        startbtn.x = this.mStageW / 2;
        startbtn.y = GameUtil.setscreenY(906);
        this.addChild(startbtn);
        var enjoymodebtn;
        if (!GameUtil.GameConfig._i().bfirstplay) {
            enjoymodebtn = new GameUtil.Menu(this, 'enjoymodebtn_png', 'enjoymodebtn_png', this.enjoymode);
            enjoymodebtn.setScaleMode();
        }
        else {
            enjoymodebtn = new GameUtil.Menu(this, 'enjoymodebtnb_png', 'enjoymodebtnb_png', this.callnull);
        }
        enjoymodebtn.x = this.mStageW / 2;
        enjoymodebtn.y = startbtn.y + 208;
        this.addChild(enjoymodebtn);
        var tiptext = new GameUtil.MyTextField(this.mStageW / 2, GameUtil.setscreenY(1304), 15);
        tiptext.setText('盛讯游戏出品');
        tiptext.fontFamily = '微软雅黑';
        tiptext.textColor = 0x8a998d;
        tiptext.touchEnabled = true;
        this.addChild(tiptext);
        this.addChild(SharePage._i());
        SharePage._i().getSignPackage();
    };
    p.startgame = function () {
        GameUtil.GameScene.runscene(GameScence._i());
    };
    p.enjoymode = function () {
        GameUtil.GameScene.runscene(new CardScene());
    };
    p.callnull = function () {
    };
    return GameStartScene;
})(GameUtil.BassPanel);
egret.registerClass(GameStartScene,"GameStartScene");
