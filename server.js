const express = require("express");
const app = express();

const data = require("./data.json");

app.get("/risk-factors/:type", (req, res) => {
    const type = req.params.type;

    if (data[type]) {
        res.json(data[type]);
    } else {
        res.status(404).json({ error: "Not found" });
    }
});

app.listen(3000, () => {
    console.log("Mock API running on http://localhost:3000/risk-factors/unilateral");
});