/**
 * Created by pior on 16/3/9.
 */

class GameStartScene extends GameUtil.BassPanel
{
    public constructor()
    {
        super();
    }

    public init()
    {
        this.show();
    }

    private show()
    {

        var discont: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        discont.width = GameUtil.GameConfig.DesignWidth;
        discont.height = GameUtil.GameConfig._i().getSH();
        this.addChild(discont);

        var titletext: GameUtil.MyTextField = new GameUtil.MyTextField(this.mStageW/2,80,35);
        titletext.setText('封神名册');
        discont.addChild(titletext);

        var startbtn: GameUtil.Menu = new GameUtil.Menu(this,'frame_png','frame_png',this.startgame);
        startbtn.setScaleMode();
        startbtn.addButtonText('开始游戏',25);
        startbtn.x = this.mStageW/2;
        startbtn.y = GameUtil.setscreenY(500);
        discont.addChild(startbtn);

        var startbtn: GameUtil.Menu = new GameUtil.Menu(this,'frame_png','frame_png',this.enjoymode);
        startbtn.setScaleMode();
        startbtn.addButtonText('欣赏模式',25);
        startbtn.x = this.mStageW/2;
        startbtn.y = GameUtil.setscreenY(580);
        discont.addChild(startbtn);
    }

    private startgame()
    {
        GameUtil.GameScene.runscene(GameScence._i());
    }

    private enjoymode()
    {
        GameUtil.GameScene.runscene(new CardScene());
    }

}