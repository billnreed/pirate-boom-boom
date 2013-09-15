define(["crafty", "components/moves-straight"], function(Crafty) {
    describe("A MovesStraight component", function() {
        var movesStraight;
        
        beforeEach(function() {
            movesStraight = Crafty.e("MovesStraight"); 
        });
        
        it("accepts a target", function() {
            movesStraight.target(10, 10);
            
            expect(movesStraight._targetVector).not.toBeNull();
        });
        
        it("accepts a speed", function() {
            var initialSpeed = 10;
            
            movesStraight.speed(initialSpeed);
            
            expect(movesStraight._speed).toBe(initialSpeed);
        })
    });
});