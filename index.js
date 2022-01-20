// console.log("hello");
// // import person from './person'
// const Person= require('./person');

// const person = new Person("john doe",30);

// person.greeting();

// console.log(person);


// const Logger=require('./logger');

// const logger =new Logger();

// logger.on('message',data=>console.log('called LIstener',data));

// logger.log('hello world');



const http=require('http');
const path=require('path');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    // if(req.url==='/'){
    //     fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
    //         if (err) throw err;
    //         res.writeHead(200,{'content-Type':'text/html'})
    //         res.end(content)
    //     })
    //     // res.writeHead(200,{'content-Type':'text/html'})
    //     // res.end('<h1>home</h1>')
    // }
    //  if(req.url==='/about'){
    //     fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
    //         if (err) throw err;
    //         res.writeHead(200,{'content-Type':'text/html'})
    //         res.end(content)
    //     })
    //     // res.writeHead(200,{'content-Type':'text/html'})
    //     // res.end('<h1>home</h1>')
    // }
    // console.log(req.url);



    // if(req.url==='/api/users'){
    //     const users=[
    //         {name:'john doe',age:30},
    //         {name:'jane doe',age:30},
    //     ];
    //         res.writeHead(200,{'content-Type':'Application/json'});
    //         res.end(JSON.stringify(users));
        
        // res.writeHead(200,{'content-Type':'text/html'})
        // res.end('<h1>home</h1>')
    // }







    //BUILD FILE PATH

    let filepath=path.join(__dirname,'public',req.url==='/'?'index.html':req.url);
    // // console.log(filepath);
    // res.end();


    //extension type

    let extname=path.extname(filepath);

    //init 
    let contentType ='text/html';

    //check and set content type
    switch(extname){
        case '.css':
            contentType='text/css';
            break;
            case '.js':
                contentType='text/javascript';
                break;
                case '.json':
                    contentType='application/json';
                    break;
                    case '.png':
                        contentType='image/png';
                        break;
                        case '.jpg':
                            contentType='image/jpg';
                            break;
    }





    //read file
    fs.readFile(filepath,(err,content)=>{
        if(err){
            if(err.code=='ENOENT'){
                //page not found
                fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
                    res.writeHead(200,{'content-Type':'text/html'});
                    res.end(content,'utf8');

                })
            }else{
                //some server Error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }else{
            //sucess
            res.writeHead(200,{'content-Type':contentType});
            res.end(content,'utf8');


        }
    })

});

const PORT =process.env.PORT || 5000;


server.listen(PORT,()=>console.log(`server running on port ${PORT}`));


















