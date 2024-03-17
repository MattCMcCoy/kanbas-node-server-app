import Arrays from "./Arrays.js";
import Math from "./Math.js";
import Module from "./Module.js";
import Assignment from "./Assignment.js";

const Lab5 = (app) => {
  app.get("/a5/welcome", (req, res) => {
    res.send("Welcome to Assignment 5");
  });
  Assignment(app);
  Module(app);
  Math(app);
  Arrays(app);
};
export default Lab5;
