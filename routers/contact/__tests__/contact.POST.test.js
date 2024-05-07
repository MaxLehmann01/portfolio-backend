/* Dependencies */
import request from "supertest";

/* Tests */
describe("POST /contact", () => {
  const server = global.__SERVER__;

  it('sending missing parameters', async () => {
    const response = await request(server)
      .post(`/contact`)

    expect(response.statusCode).toBe(500);
  });

  it('sending valid parameters', async () => {
    const response = await request(server)
      .post(`/contact`)
      .set('Content-Type', 'application/json')
      .send({
        name: 'John Doe',
        email: 'john.doe@demo.com',
        subject: 'JEST-Pipeline',
        message: 'This is a test'
      })

    expect(response.statusCode).toBe(200);
  });
});