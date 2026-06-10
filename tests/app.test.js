const request = require("supertest");
const app = require("../src/app");

describe("Testes da API", () => {

    test("GET /", async () => {

        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);

        expect(response.body).toEqual({
            mensagem: "Pipeline funcionando!"
        });

    });

    test("GET /status", async () => {

        const response = await request(app).get("/status");

        expect(response.statusCode).toBe(200);

        expect(response.body).toEqual({
            status: "offline"
        });

    });

});
