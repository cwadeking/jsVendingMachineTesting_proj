describe('VendingMachine constructor', function() {// SUITE
    let vendingMachine;
    beforeEach(function() {
      vendingMachine = new VendingMachine();
    });
    it('creates a vending machine with 5 candy bar objects', function() { // SPEC
      let expectedValue = 5;
      let actualValue = vendingMachine.candyBars.length;
      
      expect(actualValue).toBe(expectedValue);
    });
    it('creates a vending machine with 5 bag of chips objects', function() { // SPEC
      let expectedValue = 5;
      let actualValue = vendingMachine.bagsOfChips.length;
      
      expect(actualValue).toBe(expectedValue);
    });
    it('creates a vending machine with 5 packs of gum objects', function() { // SPEC
        let expectedValue = 5;
        let actualValue = vendingMachine.packsOfGum.length;
        
        expect(actualValue).toBe(expectedValue);
      });
  });


  describe('VendingMachine calculateReturnChange', function() {
    let vendingMachine;
    beforeEach(function() {
      vendingMachine = new VendingMachine();
    });
    // money passed in is greater than the cost of the item
    it('when amount of money passed in is greater than the price of item, correct change is returned', function() {
      expect(vendingMachine.calculateReturnChange(.5, 1)).toBe(.5);
    });
    // money passed in equal to the cost of the item
    it(`when amount of money passed in is equal to the price of the item, no change or 0`, function(){
        expect(vendingMachine.calculateReturnChange(1,1)).toBe(0);
    });
    // money passed in is less than the cost of the item
    it(`when amount of money is less than the cost of the item, no change or 0`, function(){
        expect(vendingMachine.calculateReturnChange(1,.5)).toBe(0);
    });
  });

  describe(`VendingMachine removeItemFromInventory`, function(){
    let vendingMachine;
    beforeEach(function(){
        vendingMachine = new VendingMachine();
    });

    it(`when passing in string name of 'candy bar' to remove, object is removed, length goes down by one`, function(){
        let expected = vendingMachine.candyBars.length - 1;
        vendingMachine.removeItemFromInventory("candy bar");
        let actual = vendingMachine.candyBars.length;
        expect(expected).toBe(actual);
    });
    it(`when passing in string name of 'bag of chips' to remove, object is removed, length goes down by one`, function(){
        let expected = vendingMachine.bagsOfChips.length - 1;
        vendingMachine.removeItemFromInventory("bag of chips");
        let actual = vendingMachine.bagsOfChips.length;
        expect(expected).toBe(actual);
    });
    it(`when passing in string name of 'pack of gum' to remove, object is removed, length goes down by one`, function(){
        let expected = vendingMachine.packsOfGum.length - 1;
        vendingMachine.removeItemFromInventory("pack of gum");
        let actual = vendingMachine.packsOfGum.length;
        expect(expected).toBe(actual);
    });
  });

  describe(`VendingMachine addItemBackToInventory`, function(){
    let vendingMachine;
    beforeEach(function(){
        vendingMachine = new VendingMachine();
    });

    it()

    
  });