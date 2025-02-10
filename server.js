const express=require('express')
const app=express();
app.use(express.json());

app.get('/',async(req,res)=>{
    res.send("Hii,there!")
})

app.post('/sub',async(req,res)=>{
    try {
        const {username,email,password}=req.body;
        if(!username){
            res.status(400).json({message:"Username cannot be empty"})
        }
        if(!email){
            res.status(400).json({message:"Email cannot be empty"})
        }
        const len=password.length();
        if(len<8||len>16){
            res.status(400).json({message:"Password length should be greater than 8 or less than or equal to 16"})
        }

        
    } catch (err) {
        console.log(err.message);
    }
    const port=2807;
    
    app.listen(port,()=>{
        console.log(`server is running sucessfully at ${port}`)
    })
})