/**
 * Created by pior on 16/3/11.
 *
 * 时间
 */

class TimePanel extends GameUtil.BassPanel
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
        var timetext: GameUtil.MyTextField = new GameUtil.MyTextField(30,15,30,0);
        timetext.setText('Time:');
        this.addChild(timetext);
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