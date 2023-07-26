const UserModel = require('../models/user');
const bcrypt = require('bcrypt');
class UserController{
    static home = (req,res)=>{
        res.render("index")
    }
    static createUserDoc = async (req,res)=>{
        // console.log(req.body)
        try{
            const doc = new UserModel({
                name : req.body.name,
                email:req.body.email,
                password: await bcrypt.hash(req.body.password, 10) // password hash
            })
            const result = await doc.save();
            console.log(result);
            res.redirect('/login');
        }catch(err){
            res.redirect('/registration');
            console.log("^^^^^^^^^^^^^^^^",err);
        }
    }
     
    static registration = (req,res)=>{
        res.render("registration")
    }

    static login = (req,res)=>{
        res.render("login")
    }

    static verifyUser = async (req,res)=>{
        try{
            // const name = req.body.name;
            const password = req.body.password;
            const email = req.body.email;
            const result = await UserModel.findOne({email : email})
            // console.log(result);

            const check = await bcrypt.compare(password, result.password);  // compair password  normal with encrepated
            // console.log(check)
            if(result && check){
                res.send('<h3>Login successfully!</h3>')
            }else{
                res.send('<h3>Email or Password is wrong...</h3>')
            }
        }catch(err){
            console.log("---------------",err);
        }
    }
}
 
module.exports = UserController;