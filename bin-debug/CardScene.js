/**
 * Created by pior on 16/3/9.
 *
 * 欣赏模式（收集的卡）
 */
var CardScene = (function (_super) {
    __extends(CardScene, _super);
    function CardScene() {
        _super.call(this);
    }
    var d = __define,c=CardScene;p=c.prototype;
    p.init = function () {
        this.show();
    };
    p.show = function () {
        this.curpage = 1;
        var shap = GameUtil.createRect(0, 0, this.mStageW, this.mStageH, 1, 0x352a1f);
        this.addChild(shap);
        var bottom = new GameUtil.MyBitmap(RES.getRes('ejbottom_jpg'), this.mStageW / 2, this.mStageH);
        bottom.setanchorOff(0.5, 1);
        this.addChild(bottom);
        this.bigAdpl = new egret.DisplayObjectContainer();
        this.addChild(this.bigAdpl);
        this.smAdpl = new AdaptGamelayer();
        this.addChild(this.smAdpl);
        this.smAdpl.initlayer(this.mStageH);
        this.showAdpl();
        this.smAdpl.adpat();
        var btname = ['uppagebtn_png', 'downpagebtn_png'];
        var btncall = [this.uppage, this.downpage];
        for (var i = 0; i < 2; i++) {
            var btn = new GameUtil.Menu(this, 'btnframe_png', 'btnframe_png', btncall[i]);
            btn.addButtonImg(btname[i]);
            btn.x = 97 + 550 * i;
            btn.y = GameUtil.setscreenY(1272);
            this.addChild(btn);
        }
        var btn = new GameUtil.Menu(this, 'returnbtn_png', 'returnbtn_png', this.returnhome);
        btn.x = this.mStageW / 2;
        btn.y = GameUtil.setscreenY(1272);
        this.addChild(btn);
        //this.bigAdpl = new egret.DisplayObjectContainer();
    };
    p.showAdpl = function () {
        this.bigAdpl.removeChildren();
        var pic = new GameUtil.Menu(this, 'showall' + this.curpage + '_jpg', 'showall' + this.curpage + '_jpg', this.nulcall);
        pic.x = this.mStageW / 2;
        pic.y = (this.mStageH - 115) / 2;
        this.bigAdpl.addChild(pic);
        //for(var j:number=0;j < 2;j++){
        //    var cur: number = this.curpage*2 - j;
        //    var pic: GameUtil.Menu = new GameUtil.Menu(this,'downpic'+cur+'_png','downpic'+cur+'_png',this.showbigpic,[cur]);
        //    pic.x = 378;
        //    pic.y = 300+j*602;
        //    this.smAdpl.putItme(pic);
        //}
    };
    p.uppage = function () {
        if (this.curpage == 1) {
            this.curpage = 30;
        }
        else {
            this.curpage--;
        }
        this.showAdpl();
    };
    p.downpage = function () {
        if (this.curpage == 30) {
            this.curpage = 1;
        }
        else {
            this.curpage++;
        }
        this.showAdpl();
    };
    p.showbigpic = function (curid) {
        this.addChild(this.bigAdpl);
        var shap = GameUtil.createRect(0, 0, this.mStageW, this.mStageH, 1, 0x4b3c43);
        this.bigAdpl.addChild(shap);
        shap.touchEnabled = true;
        var apd = new AdaptGamelayer();
        apd.initlayer(this.mStageH);
        this.bigAdpl.addChild(apd);
        var pic = new GameUtil.Menu(this, 'showall' + curid + 'jpg', 'showall' + curid + 'jpg', this.nulcall);
        pic.x = this.mStageW / 2;
        pic.y = this.mStageH / 2;
        apd.putItme(pic);
        apd.adpat();
        var btn = new GameUtil.Menu(this, 'returnbtn_png', 'returnbtn_png', this.returnscene);
        btn.x = 380;
        btn.y = GameUtil.setscreenY(1272);
        this.bigAdpl.addChild(btn);
    };
    p.returnscene = function () {
        this.bigAdpl.removeChildren();
        this.removeChild(this.bigAdpl);
    };
    p.nulcall = function () {
    };
    p.returnhome = function () {
        GameUtil.GameScene.runscene(new GameStartScene());
    };
    return CardScene;
})(GameUtil.BassPanel);
egret.registerClass(CardScene,"CardScene");
