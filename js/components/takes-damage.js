define(["crafty"], function(Crafty) {
	Crafty.c("TakesDamage", {
		_health: 0,
		_onDeathCallback: null,

		health: function(health) {
			if (health === undefined) {
				return this._health;
			} else {
				this._health = health;
				return this;
			}
		},

		onDeath: function(callback) {
			this._onDeathCallback = callback;

			return this;
		},

		takeDamage: function(damage) {
			this._health -= damage;

			if (this._health <= 0) {
				this._onDeathCallback();
			}
		}
	})
});