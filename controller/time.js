const Time = require("../model/Time")

const getAllTimes = async (req, res) => {
    try {
        const time = await Time.find({});
        res.status(201).json({ time })
        console.log("Successfully got all times")
    } catch (error) {
        console.log('error');
        res.send(400).json({
            message: "Unable to add time"
        })
    }
}

async function addTime(req, res) {
    try {
        const time = await Time.create(req.body)
        res.status(201).json({ time })
        console.log("Successfully added a time")
    
    } catch (error) {
        console.log('error');
        res.send(400).json({
            message: "Unable to add time"
        })
    }

}

module.exports = {
    addTime,
    getAllTimes
}