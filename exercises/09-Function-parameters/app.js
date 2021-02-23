// Your code goes here:
function renderPerson(name, date, color, age, gender){
    //return `${name} is a ${age} years old ${gender} born on ${date} with ${color} eyes`;
    return name.concat(" is a ", age, " years old male born on ", date, " with ", color, " eyes");
}


  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));