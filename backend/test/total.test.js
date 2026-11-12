const request = require("supertest");
const app = require("../app");


describe("GET /tickets", () => {
    test("Debe devolver un status 200", async () => {
        const respuesta = await request(app).get("/tickets");

        expect(respuesta.statusCode).toBe(200)
        
    });

    test("debe de recibir un objeto y estatus 201",async()=>{

        const ticket={nombre:"edgar", correo:"edgar@gmail.com", telefono : "934128479", id_moto: 1, precio: 25000000, categoria: "yamaha",
            estado: "en proceso", tipo_compra: ""}

            const respuesta = await request(app).post("/ticket/agregar",).send(ticket)

            expect(respuesta.statusCode).toBe(201)
            expect(typeof respuesta.body).toBe("object")
    })

    describe("GET /motos", () => {
    test("Debe devolver un status 200 y un array", async () => {
        const respuesta = await request(app).get("/motos");

        expect(respuesta.statusCode).toBe(200);
        expect(Array.isArray(respuesta.body)).toBe(true);
    })
})


describe("GET /gestor/admin/gestores", () => {
    test("Debe devolver un status 200", async () => {
        const respuesta = await request(app).get("/gestor/admin/gestores");

        expect(respuesta.statusCode).toBe(200);
    })
})
    


})

