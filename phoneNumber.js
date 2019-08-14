function createPhoneNumber(numbers){
  numbers.splice(3,0,")")
  numbers.splice(0,0,"(")
  numbers.splice(8,0,"-")
  numbers.splice(5,0," ")
  
  var string =numbers.join("");
  
  return string;
  
  
}