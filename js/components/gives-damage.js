define(["crafty"], function(Crafty) {
	Crafty.c("GivesDamage", {
		_damage: 0,

		damage: function(damage) {
			if (damage === undefined) {
				return this._damage;
			} else {
				this._damage = damage;
				return this;
			}
		}
	})
});