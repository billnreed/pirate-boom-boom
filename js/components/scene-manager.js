define(["crafty",
		"scenes/game",
		"scenes/game-over"], function(Crafty) {

	Crafty.c("SceneManager", {
		init: function() {
			Crafty.bind("GameStart", this._onGameStart);
			Crafty.bind("PlayerDeath", this._onPlayerDeath);
		},

		_onGameStart: function() {
			Crafty.scene("Game");
		},

		_onPlayerDeath: function() {
			Crafty.scene("GameOver");
		}
	});
});