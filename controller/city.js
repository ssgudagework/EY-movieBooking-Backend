const City = require("../model/City");
// const { cities } = require("./cityData");
// const {cities} = require("./cityData");

// const arrayCities = Object.values(cities);

const getAllCities = async (req, res) => {
    try {
        const cities = await City.find({}).populate({ path: "movie", populate: ["genre", { path: "area", populate: "time" }] });
        res.status(201).json({ cities })
        console.log("Successfully got all Cities")
    } catch (error) {
        console.log('error');
        res.send(400).json({
            message: "Unable to get Cities"
        })
    }
}


async function addCity(req, res) {
    try {
        const city = await City.create(req.body)
        res.status(201).json({ city })
        console.log("Successfully added City")

    } catch (error) {
        console.log('error');
        res.send(400).json({
            message: "Unable to add City"
        })
    }

}

module.exports = { addCity, getAllCities}