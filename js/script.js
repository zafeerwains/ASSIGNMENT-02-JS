// Question no. 1 ::a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.
const qNoOne = () => {
  const closureFunction = (number) => {
    return function (closureNum) {
      console.log(number + closureNum)
    }
  }
  let closureFunction1 = closureFunction(5)
  closureFunction1(3)
}
//Question no. 2 ::a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.
let arr = []
const qNoTwo = () => {
  for (let i = 0; i <= 10; i++) {
    arr.push(i)
  }
  const recursionFunction = (val, arr1) => {
    if (!arr1.length) {
      return false
    }
    if (arr1[0] == val) {
      return true
    } else {
      return recursionFunction(val, arr1.slice(1))
    }
  }
  console.log(recursionFunction(4, arr))
  console.log(recursionFunction(11, arr))
  console.log(recursionFunction(6, arr))
}
//Question no. 3 :: a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element
const qNoThree = () => {
  const paragraphAdd = (stringArgu) => {
    document.getElementById("para").innerHTML += stringArgu
    // para.innerHTML+="<br/>"+stringArgu // can be used in this way
  }
  paragraphAdd("a distinct section of a piece of writing, usually dealing with a single theme and indicated by a new line, indentation, or numbering.")
}
// paragraphAdd("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam eos consequatur molestias, tempore officia sequi illum, a iste ex optio amet nobis cumque ipsam reiciendis dicta tenetur sit quo quisquam?")
//Question no. 4 :: a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.
const qNoFour = () => {
  const addNewList = (stringArgu) => {
    document.getElementById("unorderedList").innerHTML += "<li>" + stringArgu + "</li>"
  }
  addNewList("Apple")
  addNewList("Mango")
  addNewList("Grapes")
}
//Question no. 5 :: a function that changes the background color of an HTML element. The function should take two arguments: the first argument is a reference to the HTML element, and the second argument is a string representing the new background color.
const qNoFive = () => {
  const changeBGcolor = (element, bgColor) => {
    document.querySelector(element).style.backgroundColor = bgColor
  }
  changeBGcolor("body", "#0f0")
  setInterval(function () {
    let currentColor = "#" + Math.round(Math.random() * 1000).toString(16)
    changeBGcolor("body", currentColor)
  }, 1000)
}
//Question no. 6 ::a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store
let Fan = {
  wings: 3,
  voltage: 220,
  comapny: 'GFC',
  speed: "max",
}
const qNoSix = () => {
  const saveLocalStorage = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj))
  }
  saveLocalStorage("Fan", Fan)
console.log("The Data has been Stored in Local Storage")
}
//Question no. 7 ::a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. The function should return the object.
const qNoSeven = () => {
  const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
  }
let show=  getLocalStorage("Fan")
  console.log(show)
}
//Question no. 8 ::a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object.
const qNoEight = () => {
  const saveAndReteiveLocalStorage = (obj) => {
    for (let keys in obj) {
      localStorage.setItem(keys, obj[keys])
      console.log(keys, JSON.stringify(obj[keys]))
    }
    let newObject = {}
    for (let i = 0; i < localStorage.length; i++) {
      let keys = localStorage.key(i)
      newObject = localStorage.getItem(keys)
    }
    console.log(newObject)
  }
  saveAndReteiveLocalStorage(Fan)
}