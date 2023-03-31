const Area = require("../model/Area")

const getAllArea = async (req, res) => {
    try {
        const area = await Area.find({}).populate("time");
        res.status(201).json({ area })
        console.log("Successfully got all Areas")
    } catch (error) {
        console.log('error');
        res.send(400).json({
            message: "Unable to get Areas"
        })
    }
}

async function addArea(req, res) {
    try {
        const area = await Area.create(req.body)
        res.status(201).json({ area })
        console.log("Successfully added Area")
    
    } catch (error) {
        console.log('error');
        res.send(400).json({
            message: "Unable to add Area"
        })
    }

}

module.exports = {
    addArea,
    getAllArea
}