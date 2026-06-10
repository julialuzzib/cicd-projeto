const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        mensagem: "Pipeline funcionando!"
    });
});

app.get("/status", (req, res) => {
    res.json({
        status: "online"
    });
});

module.exports = app;

if (require.main === module) {
    app.listen(3000, () => {
        console.log("Servidor rodando");
    });
}