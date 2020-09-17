module.exports = (req, res) => {
  var endpoints = new Object();
  (endpoints["attitude"] = "https://captionss.herokuapp.com/api/attitude"),
    (endpoints["art"] = "https://captionss.herokuapp.com/api/art"),
    (endpoints["travel"] = "https://captionss.herokuapp.com/api/travel"),
    (endpoints["vehicle"] = "https://captionss.herokuapp.com/api/vehicle"),
    (endpoints["beauty"] = "https://captionss.herokuapp.com/api/beauty"),
    (endpoints["books"] = "https://captionss.herokuapp.com/api/books"),
    (endpoints["birthday"] = "https://captionss.herokuapp.com/api/birthday"),
    (endpoints["abstract"] = "https://captionss.herokuapp.com/api/abstract"),
    (endpoints["boys"] = "https://captionss.herokuapp.com/api/boys"),
    (endpoints["startup"] = "https://captionss.herokuapp.com/api/startup"),
    (endpoints["college"] = "https://captionss.herokuapp.com/api/college"),
    (endpoints["selfie"] = "https://captionss.herokuapp.com/api/selfie"),
    (endpoints["seasons"] = "https://captionss.herokuapp.com/api/seasons"),
    (endpoints["success"] = "https://captionss.herokuapp.com/api/success"),
    (endpoints["family"] = "https://captionss.herokuapp.com/api/family"),
    res.json(endpoints);
};
