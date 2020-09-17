const xray = require("x-ray");
const x = xray();

module.exports = (req, res) => {
  const url = `https://captionplus.app/category/${req.params.topic}`;
  console.log(url);
  x(url, ".col-lg-4", [
    {
      caption: ".description@text",
    },
  ])(function (err, obj) {
    var data = new Object();
    var totalCaptions = Object.keys(obj).length;
    data["total"] = totalCaptions;
    data["captions"] = obj;

    res.json(data);
  });
};
