define(["crafty"], function(Crafty) {
    Crafty.c("GainsExperience", {
        _experience: 0,
        
        gainExperience: function(experience) {
            this._experience += experience;
        }       
    });
});