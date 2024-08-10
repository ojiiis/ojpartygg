const ojp = require("ojparty");
const http = require("http");

const form = ojp.ojparty;


const serve = http.createServer((req,res)=>{
    form.forms(req,(body)=>{
     console.log(body)
    });

});

serve.listen(301)