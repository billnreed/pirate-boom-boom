define(["crafty"], function(Crafty) {
    Crafty.c("DestroyOffstage", {
        _hasBeenOnStage: false,
        
        init: function() {
            this.requires("2D")
                .bind("EnterFrame", this._destroyOffstage);
        },
            
        _destroyOffstage: function() {
            if (this._hasBeenOnStage) {
                if (!this.intersect(STAGE_BOUNDS)) {
                    this.destroy();
                }
            } else {
                if (this.within(STAGE_BOUNDS)) {
                    this._hasBeenOnStage = true;
                }
            }
        }
    });
});