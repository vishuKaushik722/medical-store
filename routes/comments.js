var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var Comment = require("../models/comment");

router.get("/store/:id/comments/new",isLoggedIn, function(req, res) {
	Campground.findById(req.params.id, function(err, campground){
		if(err) {
			console.log(err);
		} else {
			res.render("comments/new", {campground: campground});
		}
	});
});

router.post("/store/:id/comments", isLoggedIn, function(req, res) {
	Campground.findById(req.params.id, function(err, campground){
		if(err) {
			res.redirect("/store");
		} else {
			Comment.create(req.body.comment, function(err, comment) {
				if(err) {
					console.log(err);
				} else {
					comment.author.id = req.user._id;
					comment.author.username = req.user.username;
					comment.save();
					campground.comments.push(comment);
					campground.save();
					res.redirect("/store/" + campground._id);
				}
			});
		}
	});
});

router.get("/store/:id/comments/:comment_id/edit", checkCommentOwnership, function(req, res) {
	Comment.findById(req.params.comment_id, function(err, foundCampground) {
		if(err) {
			res.redirect("back")
		} else {
			res.render("comments/edit", {campground_id: req.params.id, comment: foundCampground});
		}
	});
});

router.put("/store/:id/comments/:comment_id", checkCommentOwnership, function(req, res) {
	Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment) {
		if(err){
			res.redirect("back");
		} else {
			res.redirect("/store/" + req.params.id);
		}
	});
});

router.delete("/store/:id/comments/:comment_id", checkCommentOwnership, function(req, res) {
	Comment.findByIdAndRemove(req.params.comment_id, function(err) {
		if(err) {
			res.redirect("back");
		} else {
			res.redirect("back");
		}
	});
});


function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	res.redirect("/login");
}

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	res.redirect("/login");
}

function checkCommentOwnership(req, res, next) {
	if(req.isAuthenticated()) {
		Comment.findById(req.params.comment_id, function(err, foundComment) {
			if(err) {
				res.redirect("back")
			} else {
				if(foundComment.author.id.equals(req.user._id)) {
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
	
	