var count = 0;
module.exports = class Visitor{
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
    var fs = require('fs');
     this.Count();
    fs.writeFile("visitor" + count + ".json",`Fullname: ${this.name} ${this.surname} \n Date: ${this.date} \n Time: ${this.time}\n assistant: ${this.assistant}.`, function (err) {
        if(err){
            throw err;
        }
    });
    return "saved"
   }
   load(i) {
    var fs = require('fs');
       fs.readFile("./visitor" + i+".json", "utf8",(err, data) => {
        if (err) throw err;
        console.log(data);
      });
}}


