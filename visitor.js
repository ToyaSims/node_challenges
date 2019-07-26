'use strict'
const fs = require('fs');
class Visitor{
  constructor (fullName, age, date, time, comments, assistant){
      this.fullName= fullName;
      this.age = age;
      this.date = date;
      this.time= time;
      this.comments = comments;
      this.assistant = assistant;
  }
  save(){
      let file = JSON.stringify(this,null,2);
      fs.writeFileSync('visitor1.json', file);
      console.log(file)
      // let file2 = JSON.stringify(this,null,2);
      // fs.writeFileSync('student2.json', file2);
      // console.log(file2)
  }
};
let bob = new Visitor("bob suu",23,11,12, "yuuu","brun")
bob.save();
let alice = new Visitor("alice","Female", 20,"electical","tyuii")
alice.save();