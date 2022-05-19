const Form = require("../Model/Form");

const router = require("express").Router();

router.post("/form", async (req, res) => {
  const response = await Form.create(rea.body);
  try {
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
