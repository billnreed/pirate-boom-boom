define(["crafty",
		"scenes/game",
		"scenes/game-over"], function(Crafty) {

	Crafty.c("SceneManager", {
		init: function() {
			this.bind("GameStart", this._onGameStart)
				.bind("PlayerDeath", this._onPlayerDeath);
		},

		_onGameStart: function() {
			Crafty.scene("Game");
		},

		_onPlayerDeath: function() {
			Crafty.scene("GameOver");
		}
	});
});