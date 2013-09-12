define(["crafty"], function(Crafty) {
    Crafty.c("SuicideEnemy", {
        //_damage: 0,

        init: function() {
            this.requires("2D, Canvas, Color, Collision, MoveStraight, TakesDamage, GivesDamage, DestroyOffstage")
                .attr({w: 40, h: 40})
                .color("rgb(255, 0, 0)")
                .onDeath(this._handleDeath)
                .onHit("Player", this._handlePlayerCollision)
                .onHit("Bullet", this._handleBulletCollision)
                ;
        },

        /*damage: function(damage) {
            this._damage = damage;
        },*/

        _handleDeath: function() {
            this.destroy();
        },

        _handlePlayerCollision: function(collisionList) {
            var player = collisionList[0].obj;

            player.takeDamage(this.damage());

            this.destroy();
        },

        _handleBulletCollision: function(collisionList) {
            for (var i = 0; i < collisionList.length; i++) {
                var bullet = collisionList[i].obj;

                this.takeDamage(bullet.damage);

                bullet.destroy();
            }
        }
    });
});