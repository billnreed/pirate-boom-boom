define(["crafty"], function(Crafty) {
    Crafty.c("GivesExperience", {
        _experience: 0,
        
        experience: function(experience) {
            if (experience === undefined) {
                return this._experience;
            } else {
                this._experience = experience;
                
                return this;
            }
        }
    });
});