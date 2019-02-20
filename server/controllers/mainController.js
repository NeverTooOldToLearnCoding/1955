// All necessary requires, such as the Quote model.
const mongoose = require('mongoose');
var model = require("../models/nineteenfiftyfive");
var NineteenFiftyFive = model.NineteenFiftyFive;


module.exports = {
    index: function(req, res) {

	  NineteenFiftyFive.find({}).sort({updatedAt:'desc'}).exec(function(err, people) {
	    if(err) {
	      console.log("Returned error", err);
	      res.json({message: "Error", error: err})
	    }else{
	    	res.json({message: "Success", data: people})
	    }
	  })	// code...
    },

	view: function(req, res) {
		// code...
		  NineteenFiftyFive.find({name:req.params.name}).sort({updatedAt:'desc'}).exec(function(err, person) {
		    if(err) {
		      console.log("Returned error", err);
		      res.json({message: "Error", error: err})
		    }else{
	    		res.json({message: "Success", data: person})		    	
		    }
		  })

	},

    create: function(req, res) {
    	// code...
		  // create a new User with the name and age corresponding to those from req.body

		  console.log(req.params.name);

		  var person = new NineteenFiftyFive({name:req.params.name});

		  console.log(person);

		  person.save(function(err){

		        if(err){

			      console.log("Returned error", err);
			      res.json({message: "Error", error: err})
		        }
		        else {
		            res.json({message: "Success", data: person})
		        }
		    });
    },

    destroy: function(req, res) {
    	// code...
		NineteenFiftyFive.deleteOne({name:req.params.name},function(err){
		if(err) {
			console.log("Returned error", err);
			res.json({message: "Error", error: err})
		}else{
			res.json({message: "Success"})
			}
		})
    }
};
