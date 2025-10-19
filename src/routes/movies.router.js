const {Router} = require('express')
const { Movie } = require('../models/movies.model')
const router = Router()



router.get("/", async(req,res) =>{
    const res = await Movie.find();

    return res.status(200).json({
        success : true,
        message : "Movies Fetched Succesfully",
        data: res
    })


    router.post("/add-movie" , async(req,res) => {
        const movie = req.body;

        const response = await Movie.create(req.body)
        res.status(200).send({
            message : "successfully created",
            data : response
        })
    })
})