/**
 * Created by pior on 16/3/9.
 *
 * 欣赏模式（收集的卡）
 */

class CardScene extends GameUtil.BassPanel
{
    public constructor()
    {
        super();
    }
    public init()
    {
        this.addChild( AdaptGamelayer._i());
        AdaptGamelayer._i().initlayer(this.mStageH-158);

        this.show();
    }

    private show()
    {
        var bottom: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('bottom_png'),375,this.mStageH);
        bottom.setanchorOff(0.5,1);
        this.addChild(bottom);

        this.showcard(1);

    }

    private showcard(page:number)
    {
        AdaptGamelayer._i().removeChildren();

        for(var i: number =0;i < 12;i++)
        {
            var card: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('card0_png'),97+Math.floor(i%3)*227,180+Math.floor(i/3)*296);
            AdaptGamelayer._i().putItme(card);
        }
        AdaptGamelayer._i().adpat();

    }

}