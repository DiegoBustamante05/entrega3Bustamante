const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const Container = require("./index")

app.get("/productos", async (req, res) => {
    const container = new Container();
    const all = await container.getAll();
    console.log(all)
    res.json(all);
});

app.get("/productoRandom", async (req, res) => {
    const container = new Container();
    const all = await container.getAll();
    let random = all[Math.floor(Math.random() * all.length)]
    console.log(random)
    res.send(random);
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
