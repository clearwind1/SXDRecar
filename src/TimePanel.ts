/**
 * Created by pior on 16/3/11.
 *
 * 时间
 */

class TimePanel extends GameUtil.BassPanel
{

    private timebar: GameUtil.MyBitmap;
    private intervaltag: number;

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
        var timetext: GameUtil.MyTextField = new GameUtil.MyTextField(30,15,30,0);
        timetext.setText('Time:');
        this.addChild(timetext);

        this.timebar = new GameUtil.MyBitmap(RES.getRes('loadingbar_png'),115,15);
        this.timebar.setanchorOff(0,0.5);
        this.addChild(this.timebar);
        //this.timebar.scale9Grid = new egret.Rectangle(15,7,270,10);

        this.intervaltag = egret.setInterval(this.timerun,this,100);

    }

    private timerun()
    {
        var sc: number = this.timebar.$getScaleX();
        sc -= 0.01;
        this.timebar.$setScaleX(sc);

        if(sc <= 0)
        {
            egret.clearInterval(this.intervaltag);
            GameScence._i().gameOver();
        }

    }


    private static inst: TimePanel;
    public static _i(): TimePanel
    {
        if(this.inst == null)
        {
            this.inst = new TimePanel();
        }

        return this.inst;
    }

}