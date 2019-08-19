const add = function(a, b){
    return a + b
}

const calculateHyp=(a,b)=>{
return Math.sqrt(a*a+b*b)
}

const clearLowPriority=(arr)=>{
return arr.filter(a=>a.priority==="HIGH")
}
class PictureManager {
    constructor() {
        this.pictureURLs = []
    }

    addPicture(picURL) {
        this.pictureURLs.push(picURL)
    }

    removePicture(picURL) {
        this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1)
    }
}

class ArrayManipulator {
    manipulate(arr1, arr2) {
        let obj = {}
        for (let i in arr1) {
            obj[arr1[i]] = arr2[i]
        }
        return obj
    }
}

class Exercises {
    isEven(n) {
        return n % 2 == 0 ? true : false
    }
    removeAtLeastOne(arr) {
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
        arr.splice(0, numItemsToRemove)
        return arr
    }
    simplify(str) {
        let symbols = ["!", "#", ".", ",", "'"]
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
    }
    validate(arr){
        if(arr.filter(b=>b===true || b===false).length>0){
            if(arr.filter(b=>b===true).length>arr.filter(b=>b===false).length){
                return true
            }else{
                return false
            }
        }else{
            return {error: "Need at least one boolean"}
        }
    }
}

module.exports=Exercises

Exercis=new Exercises()
console.log(Exercis.validate([true,false,false]))