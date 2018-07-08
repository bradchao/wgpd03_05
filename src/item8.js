
var Item8Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        this.sprite = new cc.Sprite(res.s1_0025_png);
        this.sprite.attr({x:cc.winSize.width/2, y:cc.winSize.height/2});
        this.addChild(this.sprite);


        return true;
    }
});

var Item8Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Item8Layer();
        this.addChild(layer);
    }
});
