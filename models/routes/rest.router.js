const router = require("express").Router();

const restModel = require("../rest.model");

router.post("/creatrest", async (req, res) => {
  try {
    const newRest = await restModel.create(req.body);

    return res.status(201).json(newRest);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
