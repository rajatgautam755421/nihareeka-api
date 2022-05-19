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

module.exports = router;
