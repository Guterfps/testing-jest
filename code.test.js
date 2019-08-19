const add = require('./code')
const calculateHyp = require('./code')
const clearLowPriority= require('./code')


// test("add should return sum of a + b", () => {
//     let sum = add(1, 2)
//     expect(sum).toBe(3)
// })

// test("calculateHyp should return the square root of the sum of the numbers' squares",()=>{
//     let answer=calculateHyp(3,4)
//     expect(answer).toBe(5)
// })

// test("should keep only HIGH priority tasks", () => {
//     let tasks = [{ text: "dummy", priority: "s" }, { text: "dummy", priority: "HIGH" }]
//     let filteredTasks = clearLowPriority(tasks)
//     expect(filteredTasks.length).toBe(1)
//     expect(filteredTasks[0].priority).toBe("HIGH")
// })

// const PM = require('./code')

// test("removePicture should remove a picture URL from the pictureURLs array", function () {
//   const picManager = new PM()
//   expect(picManager.pictureURLs.length).toBe(0)
//   picManager.addPicture("url")
//   picManager.addPicture("some_url")
//   expect(picManager.pictureURLs.length).toBe(2)
//   picManager.removePicture("some_url")
//   expect(picManager.pictureURLs.length).toBe(1)           //test
// })

// const ArrayManipulator=require('./code')

// test("description",()=>{
//     let am=new ArrayManipulator()
//     let x = ["food", "item", "location"]
// let y = ["cherry", "lightbulb", "Tazmania"]
// expect(x.length).toBe(y.length)
// let res=am.manipulate(x,y)
// expect(res).toEqual({
//     food: "cherry",
//     item: "lightbulb",
//     location: "Tazmania"
//   })

// })

const Exercises=require('./code')
let Exercis=new Exercises()
test('check if a number is even',()=>{
  
  let od=Exercis.isEven(1)
  let even=Exercis.isEven(10)
  expect(od).toBeFalsy()
  expect(even).toBeTruthy()
})

test('should remove at least one element from the array `arr`',()=>{
  let arr=["a","adfaf",2131,"afraer",0.213312]
  let res=Exercis.removeAtLeastOne([...arr])
  expect(res.length).toBeLessThan(arr.length)
})

test("should return a clean, lowercase string without symbols",()=>{
  let str="A#.,,,SD!."
  let string=Exercis.simplify(str)
  expect(string).not.toBe(str)
})


test("validate",()=>{
  let arr1=[1,"a"]
  let res=Exercis.validate(arr1)
  expect(res).toStrictEqual({error: "Need at least one boolean"})
  let arr2=[true,true,3,false,""]
  let res2=Exercis.validate(arr2)
  expect(res2).toBeTruthy()
  let arr3=[3,"a",true,false,false]
  let res3=Exercis.validate(arr3)
  expect(res3).toBeFalsy()
})