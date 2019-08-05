
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
    fs.writeFile("visitor" + count + ".json",`Fullname: ${this.name} ${this.surname} \n Date: ${this.date} \n Time: ${this.time}\n assistant: ${this.assistant}.`, function (err) {
        if(err){
            throw err;
        }
    });
   }
   load(i) {
    
       fs.readFile("./visitor" + i+".json", "utf8",(err, data) => {
        if (err) throw err;
        console.log(data);
      });
}}
var alice = new Visitor( "alice", "mere", 12/07/2019,6, "josh");
var bob = new Visitor( "bob", "smith", 2/1/2019, 7, "sally");
var charlie = new Visitor( "chralie", "puth", 6/2/2019, 8, "peter");

alice.save();
bob.save();
charlie.save();
alice.load(1);
