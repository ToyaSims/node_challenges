
var fs = require('fs');
var count = 0;
class Visitor {
   constructor ( name,surname, date, time, assistant){
       this.name = name ;
       this.surname = surname;
       this.date = date;
       this.time = time;
       this.assistant = assistant;
  
   }
 
    Count() {
       count += 1;
  
   }
  
   save() {
     this.Count();
    var save = fs.writeFile("visitor" + count + ".json",`Fullname: ${this.name} ${this.surname} \n Date: ${this.date} \n Time: ${this.time}\n assistant: ${this.assistant}.`);
   
   }
   load(i) {
       if(i < 1) {
           console.log("File does not  exist");
       }
       var data =  fs.readFile("visitor" + i);
       console.log(data);
   }
}
var alice = new Visitor( "alice", "mere", 12/07/2019,1, "josh");
var bob = new Visitor( "bob", "smith", 2/1/2019, 7, "sally");
var charlie = new Visitor( "chralie", "puth", 6/2/2019, 8, "peter");
alice.save();
bob.save();
charlie.save();
