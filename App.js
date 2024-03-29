import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Labs/Lab5/Lab5.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModulesRoutes from "./Kanbas/Modules/routes.js";

const app = express();
app.use(cors());
app.use(express.json());
Hello(app);
Lab5(app);
CourseRoutes(app);
ModulesRoutes(app);

app.listen(process.env.PORT || 4000);
