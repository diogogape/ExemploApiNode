const router = require("express").Router();
const controller = require("./controller");

router.get("/number",[],controller.getNumber);

router.post("/soma",[],controller.soma);

module.exports = router;