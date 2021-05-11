const express=require('express');
const bodyParse=require('body-parser');
const app=express();
const cors=require('cors');
var knex = require('knex');
const Clarifai =require('clarifai');
const db=knex({
    client: 'pg',
    version: '7.2',
    connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '',
    database : 'faceApp'
          }
  });
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}))
app.use(cors());
const api = new Clarifai.App({
    apiKey: '52915c8fae5443318440a2f8e324f7f7'
   });
app.get('/',(req,rese)=>{
  db.select('*').from('user').then((res)=>{
      rese.json(res);
  }) 
})

app.post('/image',(req,res)=>{
    const {input,id}=req.body
    console.log(req.body)
    api.models.predict(Clarifai.FACE_DETECT_MODEL,input).then(response=>{
        db('user').where('u_id','=',id).increment('entries',1).then(
            res.json(response)      
        )
    })
    .catch(err=>console.log(err)); 
})

app.post('/signup',(req,rese)=>{
        const {email,pass}=req.body;

        db('user').where('email',email).then((res)=>{
         if(res.length>0)
        {   
            if(pass==res[0].password)
            {
               rese.json({email:res[0].email,name:res[0].name,entries:res[0].entries,auth:true,u_id:res[0].u_id})
            }
            else{
                rese.json({auth:false})
            }
        }
        else{
            rese.json({auth:false})
        }
        })
})
app.post('/register',(req,rese)=>
{
    const {email,name,password}=req.body;
    db('user').returning(['email','name','u_id','entries']).insert({email:email,name:name,password:password}).then(res=>{
        rese.json(res);
    })
})
app.get('/profile/:id',(req,res)=>
{
    var found=false;
    const {id} = req.params;
    database.user.forEach(use=>{
        if(use.id==id)
        {
            found=true;
            console.log(use);
            return res.json(use);
        }
    
    })
    console.log(found);
    if(!found)
    {
      res.json(404);
    }
})
app.put('/image/:id',(req,res)=>
{
    const {id}=req.params;
    var f=false;
    console.log(id);
    database.user.forEach(use=>{
        if(id==use.id)
        {
            use.count=use.count+1;
            f=true;
           return res.json(use);
        }
       
    })
if(!f)
{
    res.json(404);
}
})
app.listen(3001,()=>{
    console.log("hello");
});