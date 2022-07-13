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

router.get("/all-rests", async (req, res) => {
  try {
    const allRests = await restModel.find();

    return res.status(200).json(allRests);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const rest = await restModel.findOne({ _id: id });

    return res.status(200).json(rest);
  } catch (err) {
    console.error(err);

    return res.status(500).json(err);
  }
});

module.exports = router;
