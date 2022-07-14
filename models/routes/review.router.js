const router = require("express").Router();

const reviewModel = require("../review.model");
const restModel = require("../rest.model");

router.post("/reviewrest/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const newReview = await reviewModel.create({ ...req.body, rest: id });

    const editedRest = await restModel.findOneAndUpdate(
      { _id: id },
      { $push: { reviews: newReview._id } },
      { new: true }
    );

    return res.status(201).json({ newReview, editedRest });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/all-review", async (req, res) => {
  try {
    const allReview = await reviewModel.find();

    return res.status(200).json(allReview);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const review = await reviewModel.findOne({ _id: id });

    return res.status(200).json(review);
  } catch (err) {
    console.error(err);

    return res.status(500).json(err);
  }
});

router.patch("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const editedReview = await reviewModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );

    return res.status(200).json(editedReview);
  } catch (err) {
    console.error(err);

    return res.status(500).json(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedReview = await reviewModel.deleteOne({ _id: id });

    return res.status(200).json(deletedReview);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
