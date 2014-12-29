var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var locationServices = require("LocationService");

locationServices.beginService();

Alloy.createController("index");