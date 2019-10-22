xdescribe("A spy", function() {
    beforeAll(function () {
        spyOn(tootsiepop, 'lick').and.callThrough(); // replace existing `tootsiepop['lick']` method
      });
      it('getting to the center of tootsiepop involves exactly three licks', function () {
        tootsiepop.getToCenter();
        expect(tootsiepop.lick.calls.count()).toEqual(3);
      });
  });

xdescribe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an array of 1 or greater', function() {
        expect( bubbleSort([0, 1, 2, 3]) ).toEqual( [0, 1, 2, 3])
    })

    it('it sorts the array', function() {
        expect( bubbleSort([20, 17, 5, 3, 25, 100]) ).toEqual( [3, 5, 17, 20, 25, 100])
    })

    it('it sorts another array', function() {
        expect( bubbleSort([100, 50, 76, 360, 25, 750, 130]) ).toEqual( [25, 50, 76, 100, 130, 360, 750 ])
    })

  });