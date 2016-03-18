/**
 * Created by pior on 16/3/9.
 *
 * 游戏模式
 */

class GameScence extends GameUtil.BassPanel
{
    public static TotalCard: number = 6;

    private gametime: number;
    private card: cardsprite[] = [];

    private recardnum: number = 0;
    private currecard: cardsprite = null;
    private recardcount: number = 0;
    public recarding: boolean = false;

    private discovercont: egret.DisplayObjectContainer;

    public constructor()
    {
        super();
    }
    public init()
    {
        this.gametime = new Date().getTime();
        console.log('gametime====',this.gametime);
        this.show();
    }

    private show()
    {

        //console.log('hhhh======',this.mStageH);
        this.discovercont = new egret.DisplayObjectContainer();

        var bottom: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('bottom_png'),375,this.mStageH);
        bottom.setanchorOff(0.5,1);
        this.addChild(bottom);

        this.addChild(TimePanel._i());
        TimePanel._i().$setAnchorOffsetY(TimePanel._i().height);
        TimePanel._i().y = this.mStageH;

        this.addChild( AdaptGamelayer._i());
        AdaptGamelayer._i().initlayer(this.mStageH-158);

        for(var i:number=0;i <3;i++){
            for(var j:number=0;j < 4;j++){
                this.card[i+j*3] = new cardsprite(RES.getRes('cardback_png'),97+i*227,180+j*296,Math.floor((i+j*3)/2));
                AdaptGamelayer._i().putItme(this.card[i+j*3]);
            }
        }
        AdaptGamelayer._i().adpat();

        /*
        for(var i:number=0;i < 10;i++){
            var rd:number = Math.floor(Math.random()*100)%12;
            var rdr: number = Math.floor(Math.random()*100)%12;
            var posfx = this.card[rd].x;
            var posfy = this.card[rd].y;
            this.card[rd].x = this.card[rdr].x;
            this.card[rd].y = this.card[rdr].y;
            this.card[rdr].x = posfx;
            this.card[rdr].y = posfy;
        }
        */

    }

    public setcurrecard(recard: cardsprite)
    {
        this.currecard = recard;
    }
    public getcurrecard(): cardsprite
    {
        return this.currecard;
    }

    public setrecardnum(value: number)
    {
        this.recardnum = value;
    }
    public getrecardnum(): number
    {
        return this.recardnum;
    }

    public setrecardcount(value: number)
    {
        this.recardcount = value;
    }
    public getrecardcount(): number
    {
        return this.recardcount;
    }

    public successGame()
    {
        var endtime: number = new Date().getTime();
        var runtime: number = (endtime - this.gametime)/1000;
        console.log('endtime=====',runtime);

        this.addChild(this.discovercont);
        this.discovercont.touchEnabled = true;

        var cover: egret.Shape = GameUtil.createRect(0,0,this.mStageW,this.mStageH,0.6);
        this.discovercont.addChild(cover);

        var usetimetext: GameUtil.MyTextField = new GameUtil.MyTextField(this.mStageW/2,GameUtil.setscreenY(500),35);
        usetimetext.setText('您的成绩是'+runtime+'秒');
        usetimetext.textColor = 0xff7544;
        this.discovercont.addChild(usetimetext);

    }
    public gameOver()
    {
        console.log('gameover');
        this.addChild(this.discovercont);
        this.discovercont.touchEnabled = true;

        var cover: egret.Shape = GameUtil.createRect(0,0,this.mStageW,this.mStageH,0.6);
        this.discovercont.addChild(cover);
    }

    private static ints: GameScence;
    public static _i(): GameScence
    {
        if(this.ints == null){
            this.ints = new GameScence();
        }

        return this.ints;
    }

}