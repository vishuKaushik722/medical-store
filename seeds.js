var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data= [
	{name: "Cloud's Rest",
	 image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis volutpat est velit egestas. At tellus at urna condimentum mattis pellentesque id nibh. Tincidunt praesent semper feugiat nibh. Odio eu feugiat pretium nibh ipsum. Morbi quis commodo odio aenean. Amet aliquam id diam maecenas. In dictum non consectetur a erat. Urna cursus eget nunc scelerisque viverra. Neque vitae tempus quam pellentesque nec nam. Nunc sed blandit libero volutpat sed cras ornare.Consequat nisl vel pretium lectus quam id leo. At volutpat diam ut venenatis tellus in. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Ultricies integer quis auctor elit sed. Eros in cursus turpis massa tincidunt dui. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Viverra accumsan in nisl nisi scelerisque eu ultrices. Mattis molestie a iaculis at erat. Purus faucibus ornare suspendisse sed. Vulputate dignissim suspendisse in est ante in nibh. Tincidunt vitae semper quis lectus nulla at. Ut diam quam nulla porttitor massa id neque aliquam. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. At varius vel pharetra vel turpis nunc eget. Tristique senectus et netus et malesuada fames ac turpis egestas. Pharetra vel turpis nunc eget lorem dolor sed viverra. Massa vitae tortor condimentum lacinia. In egestas erat imperdiet sed euismod nisi porta lorem. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Facilisi morbi tempus iaculis urna id volutpat.Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Turpis nunc eget lorem dolor sed viverra. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Dolor sed viverra ipsum nunc aliquet. Viverra vitae congue eu consequat ac. At quis risus sed vulputate odio ut enim. Amet porttitor eget dolor morbi. Tristique risus nec feugiat in. Tortor id aliquet lectus proin nibh."
	},
	{name: "Desert Mesa",
	 image: "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&h=350",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis volutpat est velit egestas. At tellus at urna condimentum mattis pellentesque id nibh. Tincidunt praesent semper feugiat nibh. Odio eu feugiat pretium nibh ipsum. Morbi quis commodo odio aenean. Amet aliquam id diam maecenas. In dictum non consectetur a erat. Urna cursus eget nunc scelerisque viverra. Neque vitae tempus quam pellentesque nec nam. Nunc sed blandit libero volutpat sed cras ornare.Consequat nisl vel pretium lectus quam id leo. At volutpat diam ut venenatis tellus in. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Ultricies integer quis auctor elit sed. Eros in cursus turpis massa tincidunt dui. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Viverra accumsan in nisl nisi scelerisque eu ultrices. Mattis molestie a iaculis at erat. Purus faucibus ornare suspendisse sed. Vulputate dignissim suspendisse in est ante in nibh. Tincidunt vitae semper quis lectus nulla at. Ut diam quam nulla porttitor massa id neque aliquam. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. At varius vel pharetra vel turpis nunc eget. Tristique senectus et netus et malesuada fames ac turpis egestas. Pharetra vel turpis nunc eget lorem dolor sed viverra. Massa vitae tortor condimentum lacinia. In egestas erat imperdiet sed euismod nisi porta lorem. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Facilisi morbi tempus iaculis urna id volutpat.Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Turpis nunc eget lorem dolor sed viverra. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Dolor sed viverra ipsum nunc aliquet. Viverra vitae congue eu consequat ac. At quis risus sed vulputate odio ut enim. Amet porttitor eget dolor morbi. Tristique risus nec feugiat in. Tortor id aliquet lectus proin nibh."
	},
	{name: "Canyon Floor",
	 image: "https://images.pexels.com/photos/45241/tent-camp-night-star-45241.jpeg?auto=compress&cs=tinysrgb&h=350",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis volutpat est velit egestas. At tellus at urna condimentum mattis pellentesque id nibh. Tincidunt praesent semper feugiat nibh. Odio eu feugiat pretium nibh ipsum. Morbi quis commodo odio aenean. Amet aliquam id diam maecenas. In dictum non consectetur a erat. Urna cursus eget nunc scelerisque viverra. Neque vitae tempus quam pellentesque nec nam. Nunc sed blandit libero volutpat sed cras ornare.Consequat nisl vel pretium lectus quam id leo. At volutpat diam ut venenatis tellus in. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Ultricies integer quis auctor elit sed. Eros in cursus turpis massa tincidunt dui. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Viverra accumsan in nisl nisi scelerisque eu ultrices. Mattis molestie a iaculis at erat. Purus faucibus ornare suspendisse sed. Vulputate dignissim suspendisse in est ante in nibh. Tincidunt vitae semper quis lectus nulla at. Ut diam quam nulla porttitor massa id neque aliquam. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. At varius vel pharetra vel turpis nunc eget. Tristique senectus et netus et malesuada fames ac turpis egestas. Pharetra vel turpis nunc eget lorem dolor sed viverra. Massa vitae tortor condimentum lacinia. In egestas erat imperdiet sed euismod nisi porta lorem. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Facilisi morbi tempus iaculis urna id volutpat.Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Turpis nunc eget lorem dolor sed viverra. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Dolor sed viverra ipsum nunc aliquet. Viverra vitae congue eu consequat ac. At quis risus sed vulputate odio ut enim. Amet porttitor eget dolor morbi. Tristique risus nec feugiat in. Tortor id aliquet lectus proin nibh."
	}
]


function seedDB() {
		Campground.remove({}, function(err) {
		if(err) {
		console.log(err);
		} else {
		console.log("Removed Campgrounds");
		}
		});
		data.forEach(function(seed) {
		Campground.create(seed, function(err, campground) {
			if(err) {
				console.log(err);
			} else {
				console.log("Added a campground")
				Comment.create(
					{
						text: "This place is great but I wish therewas internet",
						author: "Hamer"
					}, function(err, comment) {
						if(err) {
							console.log(err);
						} else {
							campground.comments.push(comment);
							campground.save();
							console.log("created new comment");
						}
					});
			}
		});
	});
	
	}

module.exports = seedDB;