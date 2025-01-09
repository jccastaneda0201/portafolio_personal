const Project = require("../models/projects.model");

const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    next(error);
  }
};

const createProject = async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    res.json(project);
  } catch (error) {
    next(error);
  }
};

const updateProjects = async (req, res, next) => {
  const { projectId } = req.params;
  try {
    const project = await User.findByIdAndUpdate(projectId, req.body, {
      new: true,
    });
    res.json(project);
  } catch (error) {
    next(error);
  }
};

const destroyProject = async (req, res, next) => {
  const { projectId } = req.params;
  try {
    const project = await User.findByIdAndDelete(userId);
    res.json(project);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProjects,
  createProject,
  updateProjects,
  destroyProject,
};
