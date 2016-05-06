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

        var bg: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('gamebg_png'),0,0);
        bg.setanchorOff(0,0);
        this.addChild(bg);

        var startbtn: GameUtil.Menu = new GameUtil.Menu(this,'startgamebtn_png','startgamebtn_png',this.startgame);
        startbtn.setScaleMode();
        startbtn.x = this.mStageW/2;
        startbtn.y = GameUtil.setscreenY(906);
        this.addChild(startbtn);

        var enjoymodebtn: GameUtil.Menu;
        if(!GameUtil.GameConfig._i().bfirstplay){
            enjoymodebtn = new GameUtil.Menu(this,'enjoymodebtn_png','enjoymodebtn_png',this.enjoymode);
            enjoymodebtn.setScaleMode();
        }else{
            enjoymodebtn = new GameUtil.Menu(this,'enjoymodebtnb_png','enjoymodebtnb_png',this.callnull);
        }

        enjoymodebtn.x = this.mStageW/2;
        enjoymodebtn.y = startbtn.y + 208;
        this.addChild(enjoymodebtn);

        var tiptext: GameUtil.MyTextField = new GameUtil.MyTextField(this.mStageW/2,GameUtil.setscreenY(1304),15);
        tiptext.setText('盛讯游戏出品');
        tiptext.fontFamily = '微软雅黑';
        tiptext.textColor = 0x8a998d;
        tiptext.touchEnabled = true;
        this.addChild(tiptext);

        this.addChild(SharePage._i());
        SharePage._i().getSignPackage();
    }

    private startgame()
    {
        GameUtil.GameScene.runscene(GameScence._i());
    }

    private enjoymode()
    {
        GameUtil.GameScene.runscene(new CardScene());
    }
    private callnull()
    {

    }

}