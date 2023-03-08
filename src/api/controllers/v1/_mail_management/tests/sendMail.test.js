
import supertest from 'supertest'
import { describe, expect, it } from 'vitest'
import app from '../../../../App'


describe("MAILER TEST", () =>{
    it("[Normal mail] should respond with a 200 status code", async () => {
        let resp = await supertest(app).post("/api/v1/sendMail").send({
                subject: "test",
                text: "test data",
            })
        expect(resp.statusCode).toBe(200)  
        expect(resp.text).toContain('Mail sent')  
    })

    it("[Empty subject and msg text] should respond with a 200 status code ", async () => {
        let resp = await supertest(app).post("/api/v1/sendMail").send({
                subject: "",
                text: "",
            })
        expect(resp.statusCode).toBe(200)
        expect(resp.text).toContain('Mail sent')  
    })

    it("[Empty object] should respond with a 400 status code", async () => {
        let resp = await supertest(app).post("/api/v1/sendMail").send({})
        expect(resp.statusCode).toBe(400)
        expect(resp.text).toContain('Empty or badly formatted object')  
    })

    it("[Extra property] should respond with a 400 status code", async () => {
        let resp = await supertest(app).post("/api/v1/sendMail").send({})
        expect(resp.statusCode).toBe(400)  
        expect(resp.text).toContain('Empty or badly formatted object')  
    })

    it("[No string type] should respond with a 400 status code", async () => {
        let resp = await supertest(app).post("/api/v1/sendMail").send({
            subject: 3,
            text: true,
        })        
        expect(resp.statusCode).toBe(400)
        expect(resp.text).toContain('Wrong object property value type')  
    })
})

 