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

router.patch("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const editedRest = await restModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );

    return res.status(200).json(editedRest);
  } catch (err) {
    console.error(err);

    return res.status(500).json(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRest = await restModel.deleteOne({ _id: id });

    return res.status(200).json(deletedRest);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
