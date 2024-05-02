const express = require("express");
const router = express.Router();
const Music = require("../models/music_db");

router.post("/addDetails", async (req, res) => {
    // console.log("inside post");
    // console.log(req.body);

    // This line creates a new instance of the Music model using data from the request body 
    const data = new Music(req.body);
    
    data
    .save()  //This is a Mongoose method used to save the document (data) to the MongoDB database. It returns a Promise
    .then((item) => {    //Handling Promise. In this case, item represents the saved document
        console.log("items saved in database");
        res.redirect("/getDetails");
    })
    .catch((err) => {
        res.status(400).send("unable to save in database");
    });
});

// router.get("/getDetails",async(req,res) =>{
//     Music.find({})
//     .then((music_list) =>{
//         // res.send("total Count :", Music.length)
//         res.render("table",{Music : music_list});
//     })
//     .catch((err) =>{
//         res.json({
//             message : "err"
//         });
//     });
// });

router.get("/getDetails", async (req, res) => {
    try {
        const music_list = await Music.find({});
        const tc = music_list.length; // Get the total count of items in the music_list array
        res.render("table", { Music: music_list, totalCount: tc });
    } catch (err) {
        res.json({ message: err.message });
    }
});

router.get("/getByDirector/:directorName",async(req,res) =>{
    try
    {
        const directorName = req.params.directorName;
        const music_list = await Music.find({music_dir : directorName});
        const totalCount = music_list.length;
        res.render("table",{Music : music_list,music_dir : directorName,totalCount : totalCount});
    }
    catch(err)
    {
        res.json({message : err.message});
    }
});

router.get("/getbyDirectorbySinger/:directorName/:singername",async(req,res)=>{
    try{
        const directorName = req.params.directorName;
        const singername = req.params.singername;
        const music_list = await Music.find({music_dir : directorName,singer : singername});
        const totalCount = music_list.length;
        // res.send(music_list);
        res.render("table",{Music : music_list,music_dir : directorName,singer : singername,totalCount : totalCount});
    }catch(err)
    {
        res.json({message : err.message})
    }
});

router.get("/delete/:song",async(req,res) =>{
    Music.findOneAndDelete({
        song_name : req.params.song,
    })
    .then((music) =>{
        console.log("Deleted successfully");
        res.redirect("/getDetails");
    })
    .catch((err) =>{
        res.json({message : err.message});
    });
});


router.get("/getbysingerbyfilm/:singername/:film",async(req,res)=>{
    try{
        const singername = req.params.singername;
        const film = req.params.film;
        const music_list = await Music.find({singer : singername,film_name : film});
        const totalCount = music_list.length;
        // res.send(music_list);
        res.render("table",{Music : music_list,singer : singername,film_name : film,totalCount : totalCount});
    }catch(err)
    {
        res.json({message : err.message})
    }
});

// router.put("/updateactorandactress",async(req,res) =>{
//     const {songID,Actor,Actress} = req.body;
//     const music_list = await Music.findOneAndUpdate({_id : songID}, {
//         $set :{
//             Actor,Actress
//         }
//     },{new : true});
//     const totalCount = music_list.length;
//     res.render("table",{Music : music_list,totalCount : totalCount});

// });

// router.put("/updateActorAndActress", async function (request, response) {
//     const { songID, Actor, Actress } = request.body;
//     const song = await Songdetails.findOneAndUpdate({ _id: songID }, {
//         $set: {
//             Actor, Actress
//         }
//     }, { new: true }) // {new:true} is used for getting latest updated data
//     response.send(song)
// });




module.exports = router;