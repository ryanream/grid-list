var express     = require("express"),
    app         = express();
    
app.use(express.static(__dirname + "/public"));
    
    // seed data
var grid = ["first entry", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10", "item11", "last entry",];

var objGrid = [
        {
            title: "object 1",
            todos: ["todo #1", "todo #2", "todo #3"]
        }, 
        {
            title: "object 2",
            todos: ["todo2 #1", "todo #2", "todo #3"]
        }, 
        {
            title: "object 3",
            todos: ["todo3 #1", "todo #2", "todo #3"]
        }, 
        {
            title: "object 4",
            todos: ["todo4 #1", "todo #2", "todo #3"]
        }, 
        {
            title: "object 5",
            todos: ["todo5 #1", "todo #2", "todo #3"]
        }, 
        {
            title: "object 6",
            todos: ["todo6 #1", "todo6 #2", "todo6 #3"]
        }
    ];


app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.get("/", function(req, res){
   res.render("home", {objGrid: objGrid}); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("GridList server is up and running!");
});