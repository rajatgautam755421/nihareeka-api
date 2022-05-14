const router = require("express").Router();
const newsletter = require("../Controller/newsletter");
const NotificationModel = require("../Model/Notification");

router.post("/newsletter", newsletter.postNewsletter);
router.get("/newsletter", newsletter.getNewsletter);
router.delete("/newsletter/:id", newsletter.deleteNewsletter);

router.post("/notification", async (req, res) => {
  const response = await NotificationModel.create();
  res.json(response);
});

router.get("/notification", async (req, res) => {
  const response = await NotificationModel.find({});
  res.json(response);
});

module.exports = router;
