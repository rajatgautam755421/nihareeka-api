const router = require("express").Router();
const newsletter = require("../Controller/newsletter");
const NotificationModel = require("../Model/Notification");

router.post("/newsletter", newsletter.postNewsletter);
router.get("/newsletter", newsletter.getNewsletter);
router.delete("/newsletter/:id", newsletter.deleteNewsletter);

router.get("/notification", async (req, res) => {
  const response = await NotificationModel.find({});
  res.json(response);
});

router.put("/notification", async (req, res) => {
  const response = await NotificationModel.find({});
  try {
    const firstValue = response[0];
    firstValue.notification = true;
    res.send("Update Successfull");
  } catch (error) {}
});

module.exports = router;
