const Movie = require("../model/Movie")

const getAllMovies = async (req, res) => {
    try {
        // const movie = await Movie.find({}).populate("genre").populate("area");
        const movie = await Movie.find({}).populate("genre").populate({path: "area", populate: "time"});
        res.status(201).json({ movie })
        console.log("Successfully got all movies")
    } catch (error) {
        console.log('error');
        res.send(400).json({
            message: "Unable to get movies"
        })
    }
}

async function addMovie(req, res) {
    try {
        const movie = await Movie.create(req.body)
        res.status(201).json({ movie })
        console.log("Successfully added movie")
    
    } catch (error) {
        console.log('error');
        res.send(400).json({
            message: "Unable to add movie"
        })
    }

}

module.exports = {
    addMovie,
    getAllMovies
}