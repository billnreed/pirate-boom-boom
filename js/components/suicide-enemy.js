define([
        "crafty",
        "components/moves-straight",
        "components/takes-damage",
        "components/gives-damage",
        "components/destroy-offstage",
        "spawners/experience-coin-spawner"
       ], function(Crafty) {
    Crafty.c("SuicideEnemy", {
        _experienceCoinSpawner: null,
        _experienceCoinsToSpawn: 0,

        init: function() {
            this.requires("2D, Canvas, Color, Collision, MovesStraight, TakesDamage, GivesDamage, DestroyOffstage")
                .attr({w: 40, h: 40})
                .color("rgb(255, 0, 0)")
                .onDeath(this, this._handleDeath)
                .onHit("Player", this._handlePlayerCollision)
                .onHit("Bullet", this._handleBulletCollision)
                ;
               
            this._experienceCoinSpawner = Crafty.e("ExperienceCoinSpawner")
                .experienceCoinSpawner({
                    minSpeed: 1,
                    maxSpeed: 2,
                    minExperience: 5,
                    maxExperience: 8
            });
            this._experienceCoinsToSpawn = 2;
                                               
        },

        _handleDeath: function() {
            this._experienceCoinSpawner.spawn(2);
        
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