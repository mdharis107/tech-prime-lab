const { Router } = require("express");
const {
  addProject,
  getProject,
  countProjects,
  chartProject,
} = require("../controllers/project.controller");

const ProjectRouter = Router();

ProjectRouter.post("/addProject", addProject);

ProjectRouter.get("/", getProject);

ProjectRouter.get("/count", countProjects);

ProjectRouter.get("/chart", chartProject);

module.exports = {
  ProjectRouter,
};
