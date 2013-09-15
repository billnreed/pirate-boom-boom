define(["crafty", "spawners/suicide-enemy-spawner"], function(Crafty) {
    describe("A SuicideEnemySpawner", function() {
        var playerMock = {x: 0, y: 0};
        var spawner;

        beforeEach(function() {
            spawner = Crafty.e("SuicideEnemySpawner")
                    .suicideEnemySpawner(playerMock, {
                minInterval: 500,
                maxInterval: 1250,
                minHealth: 5,
                maxHealth: 10,
                minSpeed: 3,
                maxSpeed: 4,
                minDamage: 5,
                maxDamage: 5
            });
        });

        it("does not spawn anything when created", function() {
            spyOn(spawner, '_spawn');

            expect(spawner._spawn).not.toHaveBeenCalled();
        });

        it("starts spawning on start()", function() {
            spyOn(spawner, '_spawn');

            spawner.start();

            expect(spawner._spawn).toHaveBeenCalled();
        });

        it("stops spawning on stop()", function() {
            spawner._continueSpawning = true;

            spawner.stop();

            expect(spawner._continueSpawning).toBe(false);
        });

        //TODO interval testing
    });
});