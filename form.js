const ojp = require("ojparty");
const http = require("http");

const form = ojp.ojparty;


const serve = http.createServer((req,res)=>{
    form.forms(req,(body)=>{
     console.log(body)
        /*
       output
       {
       body:{key:value,key:value},
       query:{key:value,key:value},
       url:"url string without query",
       files:[
          0:{filedata},   
          1:{filedata}
       ]
       }

        */
    });

});

serve.listen(301)
