const assert = require('assert');
const {expect} = require('chai');
// const {add} = require('../src/app');
const {fibonacci} = require('../src/app');
const {factorial} = require('../src/app')

// describe ('the add function', () => {
//     it('it should add two numbers together', () =>{
//         const result = add(2,2);
//         // assert.equal(result,4);
//         expect(result).to.be.eq(4);
//     });

//     it('it should be able to handle one number', ()=>{
//         const result = add(2);
//         expect(result).to.be.eq(2);
//     });

//     it(' it should be able to handle number 0', ()=>{
//         const result = add();
//         expect(result).to.be.eq(0);
//     });

//     it ('It should return 0 if either arguments is not a number', ()=>{
//         const result = add(2, "text");
//         expect(result).to.be.eq(0);
//     });
// });


describe ('the fibonacci function', ()=>{
    it('it should return 0 for negative numbers', ()=>{
        const result = fibonacci(-5);
        // expect(result).to.be.eq(0);
        assert.equal(result,0);
    });

    it('it should return 0 for letters', ()=>{
        const result = fibonacci("text");
        // expect(result).to.be.eq(0);
        assert.equal(result,0);
    });
});

describe ('the factorial function', ()=>{
    it( ' it should return 1 for 1!', ()=>{
        const result = factorial(1);
        assert.equal(result,1);
    });

    it( ' it should return 2 for 2!', ()=>{
        const result = factorial(2);
        assert.equal(result,2);
    });

    it( ' it should return 0 for negative numbers!', ()=>{
        const result = factorial(-10);
        assert.equal(result,0);
    });
});
