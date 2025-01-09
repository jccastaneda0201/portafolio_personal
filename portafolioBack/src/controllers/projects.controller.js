const Project = require("../models/projects.model");

const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProjects,
};
