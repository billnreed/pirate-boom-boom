define(["crafty", "lodash"], function(Crafty, _, SuicideEnemyFactory) {
    Crafty.c("SuicideEnemySpawner", {
        _continueSpawning: false,
        _player: null,
        _options: {
            targetX: 0,
            targetY: 0,

            minInterval: 0,    //milliseconds
            maxInterval: 0,    //milliseconds

            minHealth: 0,
            maxHealth: 0,
            minDamage: 0,
            maxDamage: 0,
            minSpeed: 0,
            maxSpeed: 0,
        },

        init: function() {
            this.requires("Delay");
        },

        suicideEnemySpawner: function(player, options) {
            this._player = player;

            this._options = _.extend(this._options, options);

            return this;
        },

        start: function() {
            this._continueSpawning = true;
            this._spawn();
        },

        stop: function() {
            this._continueSpawning = false;
        },

        _spawn: function() {
            if (this._continueSpawning) {
                var leftSide = this._randomBetween(STAGE_BOUNDS.x - 100, STAGE_BOUNDS.x);
                var rightSide = this._randomBetween(STAGE_BOUNDS.x + STAGE_BOUNDS.w, STAGE_BOUNDS.x + STAGE_BOUNDS.w + 100);
                var x = Math.random() < 0.5 ? leftSide : rightSide;

                var topSide = this._randomBetween(STAGE_BOUNDS.y - 100, STAGE_BOUNDS.y);
                var bottomSide = this._randomBetween(STAGE_BOUNDS.y + STAGE_BOUNDS.h, STAGE_BOUNDS.y + STAGE_BOUNDS.h + 100);
                var y = Math.random() < 0.5 ? topSide : bottomSide;

                var speed = this._randomBetween(this._options.minSpeed, this._options.maxSpeed);
                var health = this._randomBetween(this._options.minHealth, this._options.maxHealth);
                var damage = this._randomBetween(this._options.minDamage, this._options.maxDamage);
                var interval = this._randomBetween(this._options.minInterval, this._options.maxInterval);

                this._createSuicideEnemy(x, y, this._player.x, this._player.y, speed, health, damage);

                this.delay(function() {
                    this._spawn();
                }, interval);
            }
        },

        _randomBetween: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },

        _createSuicideEnemy: function(x, y, targetX, targetY, speed, health, damage) {
            return Crafty.e("SuicideEnemy")
                         .attr({x: x, y: y})
                         .target(targetX, targetY)
                         .speed(speed)
                         .health(health)
                         .damage(damage)
                         ;
        }
    });
});