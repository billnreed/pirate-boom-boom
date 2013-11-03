define(["crafty", "components/gives-experience"], function(Crafty) {
    Crafty.c("ExperienceCoin", {        
        init: function() {
            this.requires("2D, Canvas, Color, GivesExperience, MovesStraight, DestroyOffscreen")
                .color("rgb(255, 255, 0)")
                ;
        },
            
        experienceCoin: function(sourceX, sourceY, targetX, targetY, speed, experience) {
            this.attr({x: sourceX, y: sourceY, w: 25, h: 25})
                .target(targetX, targetY)
                .speed(speed)
                .experience(experience)
                ;
        }
    });
});