import express from "express";

const app = express();

app.get("/test", (request, response) => {
    return response.send("mensagem simples");
});

app.post("/test-post", (request, response) => {
    return response.send("post simples");
});

app.listen(3000, () => console.log("Server running in: http://localhost:3000"));