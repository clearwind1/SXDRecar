/**
 * Created by pior on 16/3/14.
 */

class AdaptGamelayer extends egret.DisplayObjectContainer
{
    private maxheight: number;

    public constructor()
    {
        super();
    }

    public init(maxheight:number)
    {
        this.maxheight = maxheight;
    }

    public putItme(child:egret.DisplayObject,isend:boolean=false)
    {
        this.addChild(child);

        if(isend)
        {
            if(this.$getHeight()> this.maxheight)
            {
                var sc = this.maxheight/this.$getHeight();
                this.scaleX = this.scaleY = sc;
            }

        }
    }


    private static inst: AdaptGamelayer;
    public static _i(): AdaptGamelayer
    {
        if(this.inst == null){
            this.inst = new AdaptGamelayer();
        }

        return this.inst;
    }

}