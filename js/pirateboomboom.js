require.config({
    paths: {
        crafty: "libs/crafty",
        lodash: "libs/lodash"
    }
});

STAGE_BOUNDS = {x: 0, y: 0, w: 500, h: 500, left: 0, right: 500, top: 0, bottom: 500};

require(["crafty",
    "components/scene-manager"], function(Crafty) {

    Crafty.init(500, 500);

    Crafty.e("SceneManager");

    Crafty.trigger("GameStart");
});