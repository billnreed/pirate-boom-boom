define(["crafty", "components/destroy-offstage"], function(Crafty) {
    describe("A DestroyOffstage component", function() {
        
        beforeEach(function() {
            Crafty("DestroyOffstage").each(function() {this.destroy();});
        });
        
        it("is not destroyed while onstage", function() {
            var destroyOffstage = Crafty.e("DestroyOffstage")
                                        .attr({x: 100, y: 100, w: 100, h: 100});                    
            destroyOffstage.shift(10, 10);
            destroyOffstage._destroyOffstage();

            expect(Crafty("DestroyOffstage").length).toBe(1);
        });

        it("is not destroyed when starting offstage", function() {
            var destroyOffstage = Crafty.e("DestroyOffstage")
                                        .attr({x: -110, y: -110, w: 100, h: 100});           
            destroyOffstage.shift(200, 200);
            destroyOffstage._destroyOffstage();

            expect(Crafty("DestroyOffstage").length).toBe(1);
        });

        xit("is destroyed when moved offstage", function() {
            var destroyOffstage = Crafty.e("DestroyOffstage")
                                        .attr({x: 100, y: 100, w: 100, h: 100});
            destroyOffstage.shift(1000, 1000);
            destroyOffstage._destroyOffstage();

            expect(Crafty("DestroyOffstage").length).toBe(0);
        });
    });
});