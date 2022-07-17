const {Sequelize}=require('sequelize');


const sequelize= new Sequelize('userdetail','root','paruchurisivaprasad',{
    dialect:'mysql',host:'localhost'
})

module.exports=sequelize;