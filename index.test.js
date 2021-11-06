import stringLength from './index';
import Calculator from './calculator';
import strRev from './reverse';
import capitalize from './capitalize'

describe('Characters', () => {
  test('count characters', () => {
    const str = 'character';
    const val = stringLength(str)
    const strCount = str.split('').length;


    expect(val.car).toEqual(strCount)

  });



  test('range', () => {
    const str = 'character';
    const val = stringLength(str)
    const strCount = str.split('').length;
    expect(val.range).toEqual(true);
  });
})
 describe('capitalize', () => {
  test('first letter capitalize', () => {
    

    expect(capitalize('first')).toEqual('First')
    expect(capitalize('last')).toEqual('Last')

  });

})

describe("reverse",()=>{
test('string', () => {
  expect(strRev('racecar')).toBe('racecar')
  
  
});
})



describe('Calculator',()=>{
  test('should do the addition',()=>{
     expect(Calculator.add(5, 5)).toEqual(10)
       expect( Calculator.add(10,10)).toEqual(20)
      expect( Calculator.add(20,20)).toEqual(40) 
  })
   test('should do the multiplication', () => {
      expect(Calculator.multiply(60,5)).toEqual(300)
      expect(Calculator.multiply(30,9)).toEqual(270)
      expect(Calculator.multiply(20,10)).toEqual(200)
    
    });
    test('should do the division', () => {
      expect( Calculator.divide(50,10)).toEqual(5)
      expect( Calculator.divide(60,10)).toEqual(6)
      expect( Calculator.divide(70,10)).toEqual(7)
      
    }); 

     test('should do the subtraction', () => {
      expect( Calculator.substract(20,10)).toEqual(10)
      expect( Calculator.substract(30,9)).toEqual(21)
      expect( Calculator.substract(60,5)).toEqual(55)
    });
})
 