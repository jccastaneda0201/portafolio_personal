const router = require("express").Router();

router.use("/users", require("./api/users.routes"));
router.use("/projects", require("./api/projects.routes"));
router.use("/education", require("./api/education.routes"));
router.use("/contactos", require("./api/contactos.routes"));

module.exports = router;
