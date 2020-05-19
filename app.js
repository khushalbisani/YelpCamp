var express     = require("express");
    app         = express();
    bodyParser  = require("body-parser");
    mongoose    = require("mongoose");
    passport = require("passport");
    localStrategy = require("passport-local");
    methodOverride = require("method-override");
    flash = require("connect-flash");
    Campground = require("./models/campground");
    Comment = require("./models/comment");
    User = require("./models/user");
    seedDB = require("./seeds");
    passportLocalMongoose = require("passport-local-mongoose");

var campgroundRoutes = require("./routes/campgrounds"),
commentRoutes = require("./routes/comments"),
indexRoutes = require("./routes/index");

// seedDB();
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+"/public"));
app.set("view engine","ejs");
app.use(methodOverride("_method"));
app.use(flash());
app.use(require("express-session")({
    secret: "Once again rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Campground.create({
//     name:"Bornfire",
//     image: "https://pixabay.com/get/57e8d1454b56ae14f1dc84609620367d1c3ed9e04e507441722772d2924ac5_340.jpg",
//     description: "This fire give a warm environment to the bushes of this hill. It gives a very good view of our planet. 
//            I am very happy to be live in such environment"
// }, function(err,campground){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(campground);
//     }
// });
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/",indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);

app.listen(3000,function(){
    console.log("Yelpcamp has started.");
});

