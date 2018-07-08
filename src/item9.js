
var Item9Layer = cc.Layer.extend({
    sprite:null,
    space:null,
    ctor:function () {
        this._super();

        this.initPhysics();
        this.setUpmymouse(this);

        return true;
    },

    initPhysics: function () {
        this.space = new cp.Space();
        this.space.gravity = cp.v(0, -9.8);

        var staticBody = this.space.staticBody;
        var walls = [
            new cp.SegmentShape(staticBody, cp.v(0, 0),
                cp.v(cc.winSize.width, 0), 0),
            new cp.SegmentShape(staticBody, cp.v(0, 0),
                cp.v(0, cc.winSize.height), 0),
            new cp.SegmentShape(staticBody, cp.v(0, cc.winSize.height),
                cp.v(cc.winSize.width, cc.winSize.height), 0),
            new cp.SegmentShape(staticBody, cp.v(cc.winSize.width, cc.winSize.height),
                cp.v(cc.winSize.width, 0), 0),
           ];

        for (var i=0; i<walls.length; i++){
            var wall = walls[i];
            wall.setElasticity(0.5);
            wall.setFriction(10);
            this.space.addStaticShape(wall);
        }
    },

    setUpmymouse: function(layer){
        if ('mouse' in cc.sys.capabilities){
            // define listener object
            var mouseListener = {
                event: cc.EventListener.MOUSE,
                onMouseDown: function (event) {
                    
                },
            };
            cc.eventManager.addListener(mouseListener,this);
        }
    },



});

var Item9Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Item9Layer();
        this.addChild(layer);
    }
});

