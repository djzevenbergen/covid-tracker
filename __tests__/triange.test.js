import { Triangle } from '../src/triangle.js';


describe('triangle', () => {
    var triangle;
  

  beforeEach(() => {
     triangle = new Triangle(5,5,5);
  })
     
     test('should correctly create a triangle object with three lengths', () => 
     {

       expect(triangle.side1).toEqual(5);
       expect(triangle.side2).toEqual(5);
       expect(triangle.side3).toEqual(5);
       debugger;
     }); 
   
     test('should correctly determine whether three lengths are not a triangle', () => 
     { 
       expect(triangle.checkType()).toEqual("equilateral triangle");
       debugger;
     });
     
     test('should correctly determine whether three lengths make a scalene triangle', () =>
     {
       expect(triangle.checkType()).toEqual("equilateral triangle");
       debugger;
   
     })
     test('should correctly determine whether three lengths make an isoscles triangle', () =>{
       expect(triangle.checkType()).toEqual("equilateral triangle");
       debugger;
     });
    });
