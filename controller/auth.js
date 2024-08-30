const User=require('../modules/user')
const cloudinaryUploadFile = require('../utils/cloudinaryupload');
const bcrypt = require('bcryptjs');

exports.signUp = async(req,res)=>{
    try {
        const{firstName,lastName,password,conformPassword,email}=req.body;
       
        const file=req.files?.file;
        
        
        if(!firstName || !lastName|| !password || !conformPassword || !email){
            return res.status(404).json({
                success:false,
                message:"all details are required"
            })

        }
        
        
        if(!file){
            return res.status(404).json({
                success:false,
                message:"resume not uploaded"
            })
        }
        if(password!==conformPassword){
            return res.status(400).json({
                success:false,
                message:"password is not matched"
            })
        }
       

        const checkuser=await User.findOne({email:email});
        if(checkuser){
            // console.log(checkuser);
            return res.status(400).json({
                success:false,
                message:"user is already registered"
            })
        }
        else{
            console.log("not registered");
            
        }
        const fileUploadResult = await cloudinaryUploadFile(file.tempFilePath);
       
        

        const hashPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            firstName,lastName,email,password:hashPassword,resume:fileUploadResult.secure_url
        })
      
        
        return res.status(200).json({
            success:true,
            message:"user is okk",
            user
        })
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}