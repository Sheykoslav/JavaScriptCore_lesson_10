function show(data){
  console.log(data);
}
var student = [];
student.push({
  name:'Vlad',
  sex:'male',
  age:17
});
student.push({
  name:'Sophia',
  sex:'female',
  age:24
});
student.push({
  name:'Pavlo',
  sex:'male',
  age:16
});
student.push({
  name:'Inna',
  sex:'female',
  age:30
});
student.push({
  name:'Yana',
  sex:'female',
  age:33
});
show('Student:');
student.forEach(show);

var student2 = student.filter(function(x){return x.age<21 && x.sex=='male'});
show('Student2:')
student2.forEach(show);

var student3 = student2.map(function(x){x.yearsUnderAge = 21 - x.age;
return x;});
show('Student3:');
student3.forEach(show);

function getSorted(obj1,obj2){
  var obj1Name = obj1.name.toLowerCase();
  var obj2Name = obj2.name.toLowerCase();
  if(obj1.age!=obj2.age){return obj1.age-obj2.age;}
  else if(obj1Name!=obj2Name){
    if(obj1Name>obj2Name){return 1;}
    else{return -1;}
  }
  else{return obj1.yearsUnderAge-obj2.yearsUnderAge;}
}
student3.sort(getSorted);
show('\n');
student3.forEach(show);
show('\n');
student.sort(getSorted);
student.forEach(show);
