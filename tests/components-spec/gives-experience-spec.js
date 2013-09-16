define(["crafty", "components/gives-experience"], function(Crafty) {
    describe("A GivesExperience component", function() {
        it("sets the experience to give", function() {
            var givesExperience = Crafty.e("GivesExperience");
            
            var initialExperience = 10;
            givesExperience.experience(initialExperience);
            
            expect(givesExperience._experience).toBe(initialExperience);
        });
        
        it("gets the experience to give", function() {
            var givesExperience = Crafty.e("GivesExperience");
            
            var initialExperience = 10;
            givesExperience.experience(initialExperience);
            
            expect(givesExperience.experience()).toBe(initialExperience);
        })
    });
});