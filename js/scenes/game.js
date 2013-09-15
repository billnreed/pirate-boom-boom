define(
    [
        "crafty",
        "spawners/suicide-enemy-spawner",
        "components/destroy-offstage",
        "components/move-straight",
        "components/player",
        "components/bullet",
        "components/suicide-enemy",
        "components/takes-damage",
        "components/gives-damage"
    ],
    function(Crafty, SuicideEnemyFactory) {

        var spawner = null;
        var player = null;
        Crafty.scene("Game", function() {
            Crafty.background('rgb(0,100,200)');

            player = Crafty.e("Player");
            Crafty.addEvent(player, Crafty.stage.elem, "mouseup", player.fire);

            spawner = Crafty.e("SuicideEnemySpawner")
                .suicideEnemySpawner(player, {
                minInterval: 500,
                maxInterval: 1250,
                minHealth: 5,
                maxHealth: 10,
                minSpeed: 3,
                maxSpeed: 4,
                minDamage: 5,
                maxDamage: 5
            });
            spawner.start();
        }, function() {
            spawner.stop();
            Crafty.removeEvent(player, Crafty.stage.elem, "mouseup",
                player.fire);
        });
    }
);