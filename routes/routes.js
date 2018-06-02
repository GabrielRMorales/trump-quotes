var appRouter = function (app) {
  app.get("/", function(req, res) {
  	var quotes=["hi","there","bro", "hoorah"];

  	var data=Math.floor(Math.random()*3);
  	var check=quotes[data];
    res.status(200).send("Welcome to our restful API "+check);
  });
}

module.exports = appRouter;