'use strict';
const fs = require('fs');
class Visitor {
   constructor(fullName, age, date, time, comments, visitee){
       this.fullName = fullName;
       this.age = age;
       this.date = date;
       this.time = time;
       this.comments = comments;
       this.visitee = visitee;
   }
   save(){
       var count = 0;
       let file = JSON.stringify(this,null,2);
       fs.writeFileSync('visitor_' + count+1 + '.json', file);
   }
}
 let visitor1 = new Visitor("abc def",12,13,14, "sky is blue","ghi");
 visitor1.save();
