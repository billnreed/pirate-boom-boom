define([
        "crafty",
        "components/moves-straight",
        "components/destroy-offstage",
        "components/gives-damage"
       ], function(Crafty) {
	Crafty.c("Bullet", {

		init: function() {
			this.requires("2D, Canvas, Color, MovesStraight, DestroyOffstage, GivesDamage")
				.color('rgb(0, 0, 0)')
				;
		},

		bullet: function(sourceX, sourceY, targetX, targetY, damage) {
			this.attr({x: sourceX - 10, y: sourceY - 10, w: 20, h: 20})
				.target(targetX, targetY)
				.speed(5)
                .damage(damage)
				;

			return this;
		}
	});
});