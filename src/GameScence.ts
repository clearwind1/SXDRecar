/**
 * Created by pior on 16/3/9.
 *
 * 游戏模式
 */

class GameScence extends GameUtil.BassPanel
{
    public static TotalCard: number = 6;

    public gamestate:GameState;

    public costime: number;

    private card: cardsprite[] = [];

    private recardnum: number;
    private currecard: cardsprite;
    private recardcount: number;
    public recarding: boolean;

    public bpassgame: boolean;

    private discovercont: egret.DisplayObjectContainer;

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

        this.costime = 0;
        this.recardcount = 0;
        this.recardnum = 0;
        this.recarding = false;
        this.bpassgame = false;
        this.gamestate = GameState.gaming;
        this.costime = 0;
        this.discovercont = new egret.DisplayObjectContainer();

        var shape: egret.Shape = GameUtil.createRect(0,0,this.mStageW,this.mStageH,1,0x352a1f);
        this.addChild(shape);

        var bottom: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('bottom_jpg'),375,this.mStageH);
        bottom.setanchorOff(0.5,1);
        this.addChild(bottom);

        this.addChild(TimePanel._i());
        TimePanel._i().reset();

        var pausebtn: GameUtil.Menu = new GameUtil.Menu(this,'btnframe_png','btnframe_png',this.pausegame);
        pausebtn.addButtonImg('pausebtn_png');
        pausebtn.x = 695;
        pausebtn.y = GameUtil.setscreenY(1268);
        this.addChild(pausebtn);


        this.addChild( AdaptGamelayer._i());
        AdaptGamelayer._i().initlayer(this.mStageH-158);
        this.showAdapLayer();

    }

    private showAdapLayer()
    {
        var cardid: number;
        for(var i:number=0;i <12;i++){

            if(i%2 == 0){
                cardid = Math.floor(i/2) + 6*(Math.floor(Math.random()*100)%5);
            }
            console.log('cardid====',cardid);
            this.card[i] = new cardsprite(RES.getRes('cardback_png'),97+Math.floor(i%3)*227,180+Math.floor(i/3)*296,Math.floor(i/2),cardid);
            AdaptGamelayer._i().putItme(this.card[i]);
        }
        AdaptGamelayer._i().adpat();


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
    }

    private pausegame()
    {
        //console.log('pausegame');
        this.gamestate = GameState.gamepause;
        this.addChild(this.discovercont);
        this.discovercont.touchEnabled = true;

        var shap: egret.Shape = GameUtil.createRect(0,0,this.mStageW,this.mStageH,0.6);
        this.discovercont.addChild(shap);

        var continubtn: GameUtil.Menu = new GameUtil.Menu(this,'continubtn_jpg','continubtn_jpg',this.continugame);
        continubtn.x = this.mStageW/2;
        continubtn.y = GameUtil.setscreenY(591);
        this.discovercont.addChild(continubtn);

        var backbomebtn: GameUtil.Menu = new GameUtil.Menu(this,'backhomebtn_jpg','backhomebtn_jpg',this.backhome);
        backbomebtn.x = this.mStageW/2;
        backbomebtn.y = continubtn.y + 183;
        this.discovercont.addChild(backbomebtn);

    }

    private continugame()
    {
        this.gamestate = GameState.gaming;
        this.discovercont.removeChildren();
        this.removeChild(this.discovercont);
    }
    private backhome()
    {
        egret.clearInterval(TimePanel._i().intervaltag);
        TimePanel._i().removeChildren();
        AdaptGamelayer._i().removeChildren();
        this.removeChildren();
        GameUtil.GameScene.runscene(new GameStartScene());
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
        GameUtil.GameConfig._i().bfirstplay = false;
        this.bpassgame = true;
        this.addChild(this.discovercont);
        this.discovercont.touchEnabled = true;

        var cover: egret.Shape = GameUtil.createRect(0,0,this.mStageW,this.mStageH,0.6);
        this.discovercont.addChild(cover);

        var text: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('passtext_png'),this.mStageW/2,this.mStageH/2 - 310);
        this.discovercont.addChild(text);

        var usetimetext: GameUtil.MyTextField = new GameUtil.MyTextField(this.mStageW/2,this.mStageH/2 - 200,40);
        usetimetext.setText('您的成绩是'+Math.ceil(this.costime/1000)+'秒');
        usetimetext.textColor = 0xff7544;
        this.discovercont.addChild(usetimetext);

        var playagainbtn: GameUtil.Menu = new GameUtil.Menu(this,'playagainbtn_png','playagainbtn_png',this.playagain);
        playagainbtn.x = this.mStageW/2;
        playagainbtn.y = usetimetext.y + 214;//731;
        this.discovercont.addChild(playagainbtn);

        var sharebtn: GameUtil.Menu = new GameUtil.Menu(this,'sharebtn_png','sharebtn_png',this.sharegmae);
        sharebtn.x = this.mStageW/2;
        sharebtn.y = playagainbtn.y+204;//936;
        this.discovercont.addChild(sharebtn);

    }

    private playagain()
    {

       // TimePanel._i().reset();
        AdaptGamelayer._i().removeChildren();
        TimePanel._i().removeChildren();
        this.removeChildren();
        GameUtil.GameScene.runscene(GameScence._i());
    }
    private sharegmae()
    {
        console.log('sharegame');
        var discont: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        this.addChild(discont);

        var self: any = this;
        var discover: egret.Shape = GameUtil.createRect(0,0,this.mStageW,this.mStageH,0.6);
        discont.addChild(discover);
        discover.touchEnabled = true;
        discover.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
            self.removeChild(discont);
        },this)

        var sharetip: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('sharetip_png'),this.mStageW,0);
        sharetip.setanchorOff(1,0);
        discont.addChild(sharetip);
        if(this.bpassgame)
        {
            SharePage._i().setdesctext(Math.ceil(this.costime/1000)+'秒我就通关成神，有本事让我看看你多厉害！');
        }
        else
        {
            SharePage._i().setdesctext('听说快速完成了这个游戏的都成神了！');
        }
    }

    public gameOver()
    {
        //console.log('gameover');
        GameUtil.GameConfig._i().bfirstplay = false;
        this.addChild(this.discovercont);
        this.discovercont.touchEnabled = true;

        var cover: egret.Shape = GameUtil.createRect(0,0,this.mStageW,this.mStageH,0.6);
        this.discovercont.addChild(cover);

        var text: GameUtil.MyTextField = new GameUtil.MyTextField(this.mStageW/2,this.mStageH/2 - 250,50);//527
        text.$setWidth(422);
        text.textColor = 0xff7544;
        text.setText('还差一点就通关了再接再励哦!!!');
        text.textAlign = egret.HorizontalAlign.CENTER;
        this.discovercont.addChild(text);

        var playagainbtn: GameUtil.Menu = new GameUtil.Menu(this,'playagainbtn_png','playagainbtn_png',this.playagain);
        playagainbtn.x = this.mStageW/2;
        playagainbtn.y = text.y + 214;//731;
        this.discovercont.addChild(playagainbtn);

        var sharebtn: GameUtil.Menu = new GameUtil.Menu(this,'sharebtn_png','sharebtn_png',this.sharegmae);
        sharebtn.x = this.mStageW/2;
        sharebtn.y = playagainbtn.y+204;//936;
        this.discovercont.addChild(sharebtn);
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