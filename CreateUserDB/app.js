const express=require('express');

const app=express();

const cors=require('cors');
const bodyParser=require('body-parser')
const sequelize=require('./model/database')
const User=require('./model/usermodel');


app.use(cors())

app.use(express.json());



app.post('/addnewuser',(req,res)=>{


const {name,age,mailid}=req.body;    

    User.create(
        {
            name,age,mailid
        }
    )
    .then(result=>{
        res.json(result)
    })
    .catch(err=>{
        res.json(err)
    })
})




app.get('/showusers',(req,res)=>{
    User.findAll().then(users=>{
        res.send(users)
    }).catch(err=>{
        res.json(err)
    })
})





app.delete('/deleteusers/:id',(req,res)=>{

    let userid=req.params.id;

    console.log(userid);

    User.destroy({where:{id:userid}})
    .then(result=>{
        res.json(result);
    })
    .catch(err=>{
        res.json(err)
    })

})
sequelize.sync().then(result=>{
    // console.log(result);
     app.listen(1111,()=>{
         console.log(' listening at 1111 port ');
     });
     
 }).catch(err=>{
     console.log(err);
 })
 
 





