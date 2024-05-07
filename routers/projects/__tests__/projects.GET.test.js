/* Dependencies */
import request from "supertest";

/* Tests */
describe("GET /projects", () => {
  const server = global.__SERVER__;

  it('getting all (2) pre-defined projects from database', async () => {
    const response = await request(server)
      .get(`/projects`)

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBe(2);
  });
});