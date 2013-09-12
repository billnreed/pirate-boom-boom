define(["crafty"], function(Crafty) {
    Crafty.c("Player", {
        _recoilPower: 5,
        _dx: 0,
        _dy: 0,
        _friction: .9,
        _canFire: true,
        _reloadSpeed: 350, //milliseconds

        init: function() {
            this.requires("2D, Canvas, Color, Delay, TakesDamage")
                .attr({x: (STAGE_BOUNDS.x + STAGE_BOUNDS.w) / 2, y: (STAGE_BOUNDS.y + STAGE_BOUNDS.h) / 2, w: 50, h: 50})
                .color('rgb(0, 255, 0)')
                .health(15)
                .onDeath(this._handleDeath)
                .bind("EnterFrame", this._move)
                ;
        },

        fire: function(mouseEvent) {
            if (this._canFire) {
                this._canFire = false;

                this._makeBullet(mouseEvent.offsetX, mouseEvent.offsetY);
                this._setRecoil(mouseEvent.offsetX, mouseEvent.offsetY);

                this.delay(function() {
                    this._canFire = true; 
                }, this._reloadSpeed);
            }
        },

        _makeBullet: function(targetX, targetY) {
            Crafty.e("Bullet").bullet(this._x + this._w / 2, this._y + this._h / 2, targetX, targetY);
        },

        _setRecoil: function(targetX, targetY) {
            var recoilVector = new Crafty.math.Vector2D(targetX - this._x, targetY - this._y).negate().normalize();
            this._dx += recoilVector.x * this._recoilPower;
            this._dy += recoilVector.y * this._recoilPower;
        },

        _handleDeath: function() {
            this.destroy();
            Crafty.trigger("PlayerDeath");
        },

        _move: function(data) {
            this.shift(this._dx, this._dy);

            this._dx *= this._friction;
            this._dy *= this._friction;

            //check left edge
            if (this.x < STAGE_BOUNDS.x) {
                this._dx *= -1;
                this.x = 0;
            }
            //check right edge
            if (this.x + this.w > STAGE_BOUNDS.x + STAGE_BOUNDS.w) {
                this._dx *= -1;
                this.x = STAGE_BOUNDS.x + STAGE_BOUNDS.w - this.w;
            }
            //check top edge
            if (this.y < STAGE_BOUNDS.y) {
                this._dy *= -1;
                this.y = 0;
            }
            //check bottom edge
            if (this._y + this._h > STAGE_BOUNDS.y + STAGE_BOUNDS.h) {
                this._dy *= -1;
                this.y = STAGE_BOUNDS.y + STAGE_BOUNDS.h - this.h;
            }

        }
    });
});