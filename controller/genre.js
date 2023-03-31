const Genre = require("../model/Genre")

const getAllGenres = async (req, res) => {
    try {
        const genre = await Genre.find({});
        res.status(201).json({ genre })
        console.log("Successfully got all Genres")
    } catch (error) {
        console.log('error');
        res.send(400).json({
            message: "Unable to get Genres"
        })
    }
}

async function addGenre(req, res) {
    try {
        const genre = await Genre.create(req.body)
        res.status(201).json({ genre })
        console.log("Successfully added genre")
    
    } catch (error) {
        console.log('error');
        res.send(400).json({
            message: "Unable to add genre"
        })
    }

}

module.exports = {
    addGenre,
    getAllGenres
}