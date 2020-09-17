module.exports = (req, res) => {
  var endpoints = new Object();
  (endpoints["attitude"] = "http://localhost:3000/api/attitude"),
    (endpoints["art"] = "http://localhost:3000/api/art"),
    (endpoints["travel"] = "http://localhost:3000/api/travel"),
    (endpoints["vehicle"] = "http://localhost:3000/api/vehicle"),
    (endpoints["beauty"] = "http://localhost:3000/api/beauty"),
    (endpoints["books"] = "http://localhost:3000/api/books"),
    (endpoints["birthday"] = "http://localhost:3000/api/birthday"),
    (endpoints["abstract"] = "http://localhost:3000/api/abstract"),
    (endpoints["boys"] = "http://localhost:3000/api/boys"),
    (endpoints["startup"] = "http://localhost:3000/api/startup"),
    (endpoints["college"] = "http://localhost:3000/api/college"),
    (endpoints["selfie"] = "http://localhost:3000/api/selfie"),
    (endpoints["seasons"] = "http://localhost:3000/api/seasons"),
    (endpoints["success"] = "http://localhost:3000/api/success"),
    (endpoints["family"] = "http://localhost:3000/api/family"),
    res.json(endpoints);
};
