const {
  getAllProjects,
  createProject,
  updateProjects,
  destroyProject,
} = require("../../controllers/projects.controller");

const router = require("express").Router();

router.get("/", getAllProjects);

router.post("/", createProject);

router.put("/:projectId", updateProjects);

router.delete("/:projectId", destroyProject);

module.exports = router;
