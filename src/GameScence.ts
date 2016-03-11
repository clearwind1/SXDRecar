/**
 * Created by pior on 16/3/9.
 *
 * 游戏模式
 */

class GameScence extends GameUtil.BassPanel
{

    public static TotalCard: number = 6;

    private card: cardsprite[] = [];

    private recardnum: number = 0;
    private currecard: cardsprite = null;
    private recardcount: number = 0;
    public recarding: boolean = false;

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

        this.card[0] = new cardsprite(RES.getRes('cardback_png'),this.mStageW/2,GameUtil.setscreenY(200),0);
        this.addChild(this.card[0]);

        this.card[1] = new cardsprite(RES.getRes('cardback_png'),this.mStageW/2,GameUtil.setscreenY(400),0);
        this.addChild(this.card[1]);


        this.addChild(TimePanel._i());
        TimePanel._i().$setAnchorOffsetY(TimePanel._i().height);
        TimePanel._i().y = this.mStageH;

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

    }
    public gameOver()
    {

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