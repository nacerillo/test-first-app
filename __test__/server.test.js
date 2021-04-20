"use strict";

const { server } = require("../src/server.js");
const supertest = require("supertest"); // mock-request engine
const mockRequest = supertest(server); //start and initialize our mock tests

/**
 * describe -> test suite for a module
 * it -> individual tests as part of the test suite
 * expect ->  "assertions" -> granular parts of an individual test
 */

describe("***WEB SERVER***", () => {
  it("should respond with 404 if not found", async () => {
    return mockRequest.get("/no-thing").then((data) => {
      expect(data.status).toBe(404);
    });
  });

  it("should respond with 500 on an error", () => {
    //TODO
  });

  it("should respond properly to a GET: /hello", async () => {
    const response = await mockRequest.get("/hello");
    expect(response.status).toBe(200);
    expect(response.text).toBe("hello world!");
    //HINT: test for the shape/type of data
  });
});

/* 
DONT MODIFY YOUR TESTS TO PASS YOUR CODE!
-----------------------------------------
MODIFY YOUR CODE TO PASS YOUR TEST !
*/
