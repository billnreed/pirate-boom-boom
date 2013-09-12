define(["crafty"], function(Crafty) {
	Crafty.c("Bullet", {
		damage: 5,

		init: function() {
			this.requires("2D, Canvas, Color, MoveStraight, DestroyOffstage")
				.color('rgb(0, 0, 0)')
				;
		},

		bullet: function(sourceX, sourceY, targetX, targetY) {
			this.attr({x: sourceX - 10, y: sourceY - 10, w: 20, h: 20})
				.target(targetX, targetY)
				.speed(5)
				;

			return this;
		}
	});
});