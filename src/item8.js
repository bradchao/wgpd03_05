
var Item8Layer = cc.Layer.extend({
    sprite:null,
    isFlipX: true,
    counter:0,
    ctor: async function () {
        this._super();

        this.sprite = new cc.Sprite(res.s1_0025_png);
        this.sprite.attr({x:cc.winSize.width/2, y:cc.winSize.height/2});
        this.addChild(this.sprite);

        cc.spriteFrameCache.addSpriteFrames(res.s1_plist,res.s1_png);
        var animFrames = [];
        for (var i=1; i<=25; i++){
            var str = "s1_00" + (i>=10?'':'0') + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            animFrames.push(frame);
        }
        var anim = new cc.Animation(animFrames, 1/15, 1);
        var anims = new cc.Animate(anim);   // Action


        await sleep(1*1000);

        var a1 = cc.moveTo(3,100,100);
        this.sprite.runAction(a1);
        this.sprite.runAction(cc.repeatForever(anims));




        this.scheduleUpdate();

        return true;
    },

    update: function () {
        // if (this.counter % 10 == 0){
        //     this.isFlipX = !this.isFlipX;
        //     this.sprite.runAction(new cc.FlipX(this.isFlipX));
        // }
        // this.counter++;
        // if (this.counter == 10) this.counter = 0;



    }


});

var Item8Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Item8Layer();
        this.addChild(layer);
    }
});

function sleep(ms) {
    return new Promise(a => setTimeout(a, ms));
}