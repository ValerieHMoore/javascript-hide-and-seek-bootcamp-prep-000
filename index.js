function getFirstSelector(selector) {
  return document.querySelector(selector)
  }
  
function nestedTarget() {
    return document.querySelector('#nested .target')
  }
  
function increaseRankBy(n) {
  var newArray = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < newArray.length; i++){
  var kids = newArray[i].children
  for (let i = 0; i < kids.length; i++){
 kids[i].innerHTML = parseInt(kids[i].innerHTML) +n
  }
}
}
   
function deepestChild() {
var newArray = document.querySelectorAll('.grand-node');
  for (let i = 0; i < newArray.length; i++){
  var deepestKid = newArray[i].children
  for (let i = 0; i < deepestKid.length; i++){
 deepestKid[i].innerHTML = 
  }
  }
  }