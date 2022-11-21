const request = require('jest');
const app = require('./routes/User');
const mongoose = require('mongoose');

test.todo("it should respond to GET method"), () => {
  const response = request(app).post("http://localhost:5000/User/add").json({
      "Name": "Faizan",
      "Email":"f@gmail",
      "Age":20,
      "Contact":1233
  })
  expect(response.statusCode).toBe(200);
}