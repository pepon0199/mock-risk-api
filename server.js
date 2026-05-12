const express = require("express");
const app = express();
const data = require("./data.json");

// ✅ Use dynamic port (IMPORTANT)
const PORT = process.env.PORT || 3000;

app.get("/risk-factors/:type", (req, res) => {
    const type = req.params.type;

    if (data[type]) {
        res.json(data[type]);
    } else {
        res.status(404).json({ error: "Not found" });
    }
});

// Optional root
app.get("/", (req, res) => {
    res.send("Mock API running ✅");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});