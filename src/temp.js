
var MenuLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();


        return true;
    }
});

var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MenuLayer();
        this.addChild(layer);
    }
});

