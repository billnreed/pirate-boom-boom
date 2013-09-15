define(["crafty", "components/takes-damage"], function(Crafty) {
    describe("A TakesDamage component", function() {
        var takesDamage;

        beforeEach(function() {
            takesDamage = Crafty.e("TakesDamage");
        });

        it("sets its initial health", function() {
            var initialHealth = 10;
            takesDamage.health(initialHealth);

            expect(takesDamage._health).toBe(initialHealth);
        });
        
        it("indicates its current health", function() {
            var initialHealth = 10;
            takesDamage.health(initialHealth);
            
            expect(takesDamage.health()).toBe(initialHealth);
        });

        it("takes damage", function() {
            var initialHealth = 10;
            takesDamage.health(initialHealth);

            var damage = 5;
            takesDamage.takeDamage(damage);

            expect(takesDamage._health).toBe(initialHealth - damage);
        });

        it("accepts an onDeath callback", function() {
            var onDeathCallback = function() {
                var x = 5;
            };

            takesDamage.onDeath(onDeathCallback);

            expect(takesDamage._onDeathCallback).not.toBeNull();
            expect(takesDamage._onDeathCallback).toBe(onDeathCallback);
        });

        it("calls its onDeath callback when its health reaches 0", function() {
            var onDeathCallback = function() {
                var x = 5;
            };
            takesDamage.onDeath(onDeathCallback);

            spyOn(takesDamage, "_onDeathCallback");

            takesDamage.health(10);
            takesDamage.takeDamage(10);

            expect(takesDamage._onDeathCallback).toHaveBeenCalled();
        });

        it("calls its onDeath callback when its health goes below 0",
            function() {
                var onDeathCallback = function() {
                    var x = 5;
                };
                takesDamage.onDeath(onDeathCallback);

                spyOn(takesDamage, "_onDeathCallback");

                takesDamage.health(10);
                takesDamage.takeDamage(15);

                expect(takesDamage._onDeathCallback).toHaveBeenCalled();
            });
    });
});