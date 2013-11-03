define(
    [
        "crafty",
        "spawners/suicide-enemy-spawner",
        "components/player"
    ],
    function(Crafty) {
        var spawner = null;
        var player = null;
        
        Crafty.scene("Game", 
            function() {
                Crafty.background('rgb(0,100,200)');

                player = Crafty.e("Player");
                Crafty.addEvent(player, Crafty.stage.elem, "mouseup", player.fire);

                spawner = Crafty.e("SuicideEnemySpawner")
                                .suicideEnemySpawner(player, {
                                    minInterval: 1750,
                                    maxInterval: 2500,
                                    minHealth: 5,
                                    maxHealth: 10,
                                    minSpeed: 3,
                                    maxSpeed: 4,
                                    minDamage: 5,
                                    maxDamage: 5
                                });
                spawner.start();
            }, 
            function() {
                spawner.stop();
                Crafty.removeEvent(player, Crafty.stage.elem, "mouseup",
                    player.fire);
            }
        );
    }
);