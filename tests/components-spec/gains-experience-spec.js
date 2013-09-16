define(["crafty", "components/gains-experience"], function(Crafty) {
    describe("A GainsExperience component", function() {
        it("gains experience", function() {
            var gainsExperience = Crafty.e("GainsExperience");
            
            var experience = 5;
            gainsExperience.gainExperience(experience);
            
            expect(gainsExperience._experience).toBe(experience);
        });
    });
});