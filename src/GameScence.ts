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

        this.addChild(TimePanel._i());
        TimePanel._i().$setAnchorOffsetY(TimePanel._i().height);
        TimePanel._i().y = this.mStageH;

        this.addChild( AdaptGamelayer._i());
        AdaptGamelayer._i().init(this.mStageH-60);

        this.card[0] = new cardsprite(RES.getRes('cardback_png'),this.mStageW/2,GameUtil.setscreenY(200),0);
        AdaptGamelayer._i().putItme(this.card[0]);

        this.card[1] = new cardsprite(RES.getRes('cardback_png'),this.mStageW/2,GameUtil.setscreenY(700),0);
        AdaptGamelayer._i().putItme(this.card[1],true);

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
        console.log('successgame');
    }
    public gameOver()
    {
        console.log('gameover');
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