const express = require('express');
const cors = require('cors');
const libModel = require('./models/booksDb');

const app = new express();
// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

// to post data
app.post('/addbooks',async(req,res)=>{
    console.log(req.body);
    var data = await new libModel(req.body);
    data.save();
    res.send({status:"Data is added"});
})

// to get data
app.get('/viewbooks',async(req,res)=>{
    var data = await libModel.find();
    res.json(data);
    console.log(data);
})

// to get data by id
app.get('/viewbook/:id',async(req,res)=>{
    let id = req.params.id;
    var data =  await libModel.findById(id);
    res.json(data);
    console.log(data);
})


// to delete book
app.delete('/deletebooks/:id',async(req,res)=>{
    let id = req.params.id;
    await libModel.findByIdAndDelete(id);
    res.send({status:"Data is deleted"});

})

// to update data
app.put('/editbooks/:id',async(req,res)=>{
    let id = req.params.id;
    try{
        await libModel.findByIdAndUpdate(id,req.body);
        res.json({status:"Data is updated"});
    }
    catch(err){
        res.status(500).send(err);
    }
   

})




app.listen(3008,()=>{
    console.log("Server is up and running at 3008!!!");
})
