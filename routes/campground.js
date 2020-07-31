var express = require("express");
var router = express.Router();
var Campground = require("../models/campground")

router.get("/campgrounds", function(req, res) {
	Campground.find({}, function(err, allcampgrounds) {
		if(err) {
			console.log(err);
		} else {
			res.render("campgrounds/index", {campgrounds: allcampgrounds, currentUser: req.user});
		}
	});
});

router.post("/campgrounds", isLoggedIn, function(req, res) {
	var name = req.body.name;
	var image = req.body.image;
	var description = req.body.description;
	var author = {
		id: req.user._id,
		username: req.user.username
	}
	var newCampground = {name: name, image: image, description: description, author: author}
	Campground.create(newCampground, function (err, newlycreated) {
		if(err) {
			console.log(err);
		} else {
			res.redirect("/campgrounds")
		}
	});
});
router.get("/campgrounds/new", isLoggedIn, function(req, res) {
	res.render("campgrounds/new.ejs");
});

router.get("/campgrounds/:id", function(req, res) {
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundcampground) {
		if(err) {
			console.log(err);
		} else {
			res.render("campgrounds/show", {campground: foundcampground});
		}
	});
});

//Edit Campground
router.get("/campgrounds/:id/edit", checkCampgroundOwnership, function(req, res) {
		Campground.findById(req.params.id, function(err, foundCampground) {
		res.render("campgrounds/edit", {campground: foundCampground});
	});
});

//Update Campground
router.put("/campgrounds/:id", function(req, res) {
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground) {
		if(err) {
			res.redirect("/campgrounds");
		} else {
			res.redirect("/campgrounds/" + req.params.id);
		}
	})
});

//delete campground

router.delete("/campgrounds/:id", checkCampgroundOwnership, function(req, res) {
	Campground.findByIdAndRemove(req.params.id, function(err) {
		if(err) {
			res.redirect("/campgrounds");
		} else {
			res.redirect("/campgrounds");
		}
	})
});


function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	req.flash("success", "Please Login First")
	res.redirect("/login");
}

function checkCampgroundOwnership(req, res, next) {
	if(req.isAuthenticated()) {
		Campground.findById(req.params.id, function(err, foundCampground) {
			if(err) {
				res.redirect("back")
			} else {
				if(foundCampground.author.id.equals(req.user._id)) {
					next();
				} else {
					res.redirect("back");
				}
			}
		});
	} else {
		res.redirect("back");
}
}


module.exports = router;
