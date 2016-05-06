/**
 * Created by pior on 16/3/11.
 *
 * 时间
 */

class TimePanel extends GameUtil.BassPanel
{

    private timebar: GameUtil.MyBitmap;
    public intervaltag: number;

    private bchangey: boolean;
    private bchanger: boolean;

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

        this.bchanger = false;
        this.bchangey = false;

        var timetext: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('Timepic_png'),60,GameUtil.setscreenY(1265));
        this.addChild(timetext);

        this.timebar = new GameUtil.MyBitmap(RES.getRes('timepro_png'),120,GameUtil.setscreenY(1268));
        this.timebar.setanchorOff(0,0.5);
        this.addChild(this.timebar);

        this.intervaltag = egret.setInterval(this.timerun,this,300);

    }

    public cutTimesc()
    {
        var sc: number = this.timebar.$getScaleX();
        sc -= 0.01;
        this.timebar.$setScaleX(sc);
    }

    private timerun()
    {

        if(GameScence._i().gamestate == GameState.gamepause)
        {
            return;
        }

        GameScence._i().costime += 300;

        var sc: number = this.timebar.$getScaleX();
        sc -= 0.01;
        this.timebar.$setScaleX(sc);

        if(!this.bchanger && sc <= 0.15)
        {
            this.bchanger = true;
            this.timebar.setNewTexture(RES.getRes('redtimepro_png'))
        }
        if(sc <= 0.4 && !this.bchangey)
        {
            this.bchangey = true;
            this.timebar.setNewTexture(RES.getRes('yelltimepro_png'));
        }

        //console.log('sc======',sc);

        if(sc <= 0)
        {
            this.timebar.$setScaleX(0);
            console.log('gameover');
            GameScence._i().gameOver();
            egret.clearInterval(this.intervaltag);
        }

    }

    public reset()
    {
        this.timebar.$setScaleX(1);
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