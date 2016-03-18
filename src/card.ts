/**
 * Created by pior on 16/3/11.
 */

class cardsprite extends GameUtil.MyBitmap
{

    public cardID: number;

    private turntime: number = 200;

    public constructor(texture:egret.Texture,posx:number,posy:number,cardid: number)
    {
        super(texture,posx,posy);
        this.initcard(cardid);
    }

    private initcard(cardid: number)
    {
        this.cardID = cardid;

        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.recard,this);
    }

    private recard(evt:egret.Event)
    {

        if(GameScence._i().recarding){
            return;
        }

        GameScence._i().recarding = true;

        this.touchEnabled = false;

        var self: any = this;
        var cardname: string = 'card'+0+'_png';//'card'+this.cardID+'_png';
        egret.Tween.get(this).to({scaleX:0},self.turntime).call(function(){
            self.setNewTexture(RES.getRes(cardname));
        }).to({scaleX:1},self.turntime).call(self.finishrecard,self);

    }

    public returnrecard()
    {
        var self: any = this;
        var cardname: string = 'cardback_png';
        egret.Tween.get(this).to({scaleX:0},self.turntime).call(function(){
            self.setNewTexture(RES.getRes(cardname));
        }).to({scaleX:1},self.turntime).call(function(){
            self.touchEnabled = true;
            GameScence._i().recarding = false;
        });
    }

    private finishrecard()
    {

        var recardnum: number = GameScence._i().getrecardnum();
        if(recardnum == 0){
            GameScence._i().setrecardnum(1);
            GameScence._i().setcurrecard(this);

            GameScence._i().recarding = false;
        }
        else
        {
            //判断两张卡是否同样
            if(this.cardID == GameScence._i().getcurrecard().cardID){

                GameScence._i().recarding = false;
                var recardcount = GameScence._i().getrecardcount();
                recardcount++;
                GameScence._i().setrecardcount(recardcount);
                if(recardcount == GameScence.TotalCard){
                    egret.clearInterval(TimePanel._i().intervaltag);
                    GameScence._i().successGame();
                }
            }
            else
            {
                this.returnrecard();
                GameScence._i().getcurrecard().returnrecard();
            }
            GameScence._i().setrecardnum(0);
            GameScence._i().setcurrecard(null);

        }

    }

}