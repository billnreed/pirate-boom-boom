define([
        "crafty",
        "components/moves-straight",
        "components/takes-damage",
        "components/gives-damage",
        "components/destroy-offstage"
       ], function(Crafty) {
    Crafty.c("SuicideEnemy", {

        init: function() {
            this.requires("2D, Canvas, Color, Collision, MovesStraight, TakesDamage, GivesDamage, DestroyOffstage")
                .attr({w: 40, h: 40})
                .color("rgb(255, 0, 0)")
                .onDeath(this._handleDeath)
                .onHit("Player", this._handlePlayerCollision)
                .onHit("Bullet", this._handleBulletCollision)
                ;
        },

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

                this.takeDamage(bullet.damage());

                bullet.destroy();
            }
        }
    });
});