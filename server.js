const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/risk-factors/:type", (req, res) => {
    const type = req.params.type;

    try {
        const filePath = path.join(__dirname, "repository", `${type}.json`);
        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

        res.json(data);
    } catch (error) {
        res.status(404).json({ error: "Risk factor not found" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
