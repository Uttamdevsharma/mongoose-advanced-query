const {Router} = require('express')
const {Movie} = require('../models/movies.model')
const router = Router()


// get router
router.get("/", async(req,res) =>{

   

    const response = await Movie.find({

        //Comparison Operator - $eq.$ne
        // title : {
        //     $eq : "The Great Train Robbery"

        // },
        // type :{$ne : "movie"}

        

        // $gt , $gte , $in , $lt, $lte
        // runtime : {$lt : 50}
         
        //nested fields
        // 'awards.wins' : {$gte : 2}


        // year : {$gte : 1900} ,
        // runtime : {$lt : 50}

        //$in
        // cast : {
        //     $nin :["George Barnes"]
        // }



        //logical operator -$and , $or , $not , $nor

        // $or: [ //and same
        //     {
        //         // rated : {$eq : "accepted"},
        //         rated :{$not : {$eq : "Approved" } },

        //         cast : {$in : "John Wayne"}
        //     },
        //     {
        //         type : {$eq : "movie"}
        //     }
        // ]



        //Element Operator - $exists , $type

        // runtime : {
        //     $exists : true,
        //     $type : "string"
        // }






        //evaluation operator
        title: { $regex: "^t.*y$", $options: "i" }


    });

    

    //pagination
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * limit;
    const movies = await Movie.find({}).sort({runtime:-1}).limit(limit).skip(skip)
    const totalMovies = await Movie.countDocuments();


    return res.status(200).json({
        success : true,
        message : "Movies Fetched Succesfully",
        count : totalMovies || 0,
        data: movies,
        limit : Number(limit)
    })
})


//post router
router.post("/add-movie" , async(req,res) => {
    const movie = req.body;

    const response = await Movie.create(movie)
    res.status(200).send({
        message : "successfully created",
        data : response
    })
})

module.exports = router