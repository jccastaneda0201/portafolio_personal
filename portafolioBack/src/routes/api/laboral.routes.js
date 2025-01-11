const {
  getAllLaboral,
  createLaboral,
  updateLaboral,
  destroyLaboral,
} = require("../../controllers/laboral.controll");

const router = require("express").Router();

router.get("/", getAllLaboral);

router.post("/", createLaboral);

router.put("/:laboralId", updateLaboral);

router.delete("/:laboralId", destroyLaboral);

module.exports = router;
