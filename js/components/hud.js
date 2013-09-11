define(["crafty"], function(Crafty) {
	Crafty.c("HUD", {
		init: function() {
			this.requires("2D, Canvas, Color")
				.attr({x: STAGE_BOUNDS.x, y: STAGE_BOUNDS.y + STAGE_BOUNDS.h - 50, w: STAGE_BOUNDS.x + STAGE_BOUNDS.w, h: 50, z: 99})
				.color('rgb(0, 0, 0)');

			
		}
	});
});