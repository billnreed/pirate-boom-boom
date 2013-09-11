define(["crafty", 
        "components/hud",
        "spawners/suicide-enemy-spawner",
        "components/destroy-offstage",
        "components/move-straight",
        "components/player", 
        "components/bullet", 
        "components/suicide-enemy", 
        "components/takes-damage",
        ], function(Crafty, SuicideEnemyFactory) {

    Crafty.scene("Game", function() {

        Crafty.background('rgb(0,100,200)');

        var hud = Crafty.e("HUD");

        var player = Crafty.e("Player");
        Crafty.addEvent(player, Crafty.stage.elem, "mouseup", player.fire);

        var spawner = Crafty.e("SuicideEnemySpawner")
                            .suicideEnemySpawner(player, {
                                minInterval: 2000,
                                maxInterval: 3000,
                                minHealth: 5,
                                maxHealth: 10,
                                minSpeed: 3,
                                maxSpeed: 4,
                                minDamage: 5,
                                maxDamage: 5
                            });
        spawner.start();
    }, function() {
        // scene cleanup
    });
});