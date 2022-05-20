const Form = require("../Model/Form");

const router = require("express").Router();

router.post("/form", async (req, res) => {
  const response = await Form.create(req.body);
  try {
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

router.get("/form", async (req, res) => {
  const response = await Form.find({});
  try {
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

router.get("/form/:id", async (req, res) => {
  const { id } = req.params;
  const response = await Form.findById({ _id: id });
  try {
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

router.put("/form/update/:id/:state", async (req, res) => {
  const { id } = req.params;
  const { state } = req.params;
  const response = await Form.findByIdAndUpdate(
    { _id: id },
    { acceptence: state },
    { new: true }
  );
  try {
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
