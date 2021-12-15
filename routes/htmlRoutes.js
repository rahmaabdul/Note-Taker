const { appendFile } = require("fs");
const path = require("path");

router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "developpublic\notes.html"));
});

router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "developpublicindex.html"));
});

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "developpublicindex.html"));
});

module.exports = router;
