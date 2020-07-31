var express     	= require("express"),
	app        	    = express(),
	bodyParser  	= require("body-parser"),
	mongoose   	 	= require("mongoose"),
	flash			= require("connect-flash"),
	passport 		= require("passport"),
	LocalStrategy   = require("passport-local"),
	methodOverride  = require("method-override"),
	Campground 		= require("./models/campground"),
	Comment         = require("./models/comment"),
	User			= require("./models/user"),
	seedDB    		= require("./seeds");

var campgroundRoutes = require("./routes/campground"),
	commentRoutes    = require("./routes/comments"),
	indexRoutes      = require("./routes/index")

// seedDB();

mongoose.connect('mongodb://localhost:27017/yelp_camp', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => console.log("Connected To yelp_camp"))
.catch(error => console.log(error.message));


app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

app.use(require("express-session")({
	secret: "Rusty bhot acha kutta hai",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

app.use(indexRoutes);
app.use(campgroundRoutes);
app.use(commentRoutes);

app.listen(process.env.PORT || 3000, function() {
	console.log("YELPCAMP SERVER HAS STARTED!!")
});