define(["crafty", "components/gives-damage"], function(Crafty) {
    describe("A GivesDamage component", function() {
        it("can set how much damage to give", function() {
            var givesDamage = Crafty.e("GivesDamage");
            
            var initialDamage = 10;
            givesDamage.damage(initialDamage);
            
            expect(givesDamage._damage).toBe(initialDamage);
        });
        
        it("can retrieve how much damage it gives", function() {
            var givesDamage = Crafty.e("GivesDamage");
            
            var initialDamage = 10;
            givesDamage.damage(initialDamage);
            
            expect(givesDamage.damage() === initialDamage);
        });
    });
});