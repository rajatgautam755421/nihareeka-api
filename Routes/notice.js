const router = require("express").Router();
const notice = require("../Controller/notice");
const codes = require("../Model/codes");

router.post("/notice", notice.postNotice);
router.get("/notice", notice.getNotice);
router.delete("/notice/:id", notice.deleteNotice);

router.post("/code", async (req, res) => {
  try {
    const response = await codes.create(req.body);
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

router.get("/code", async (req, res) => {
  const resposne = await codes.find();
  res.json(resposne);
});

module.exports = router;
