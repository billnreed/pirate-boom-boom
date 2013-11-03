define(["crafty", "lodash", "components/experience-coin"], function(Crafty, _) {
    Crafty.c("ExperienceCoinSpawner", {
        _options: {
            minSpeed: 0,
            maxSpeed: 0,
            minExperience: 0,
            maxExperience: 0
        },
        
        experienceCoinSpawner: function(options) {
            this._options = _.extend(this._options, options);
            
            return this;
        },
        
        spawn: function(number) {
            for (var i = 0; i < number; i++) {
                var targetX = this._randomBetween(STAGE_BOUNDS.left, STAGE_BOUNDS.right);
                var targetY = this._randomBetween(STAGE_BOUNDS.top, STAGE_BOUNDS.bottom);
                var speed = this._randomBetween(this._options.minSpeed, this._options.maxSpeed);
                var experience = this._randomBetween(this._options.minExperience, this._options.maxExperience);
                
                Crafty.e("ExperienceCoin").experienceCoin(this.x, this.y, targetX, targetY, speed, experience);
            }
        },
            
        _randomBetween: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    });
});