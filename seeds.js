var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name:"Born fire",
        image:"https://pixabay.com/get/57e8d1454b56ae14f1dc84609620367d1c3ed9e04e5074417d297fd39f45c2_340.jpg",
        description: "bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobe"
    },
    {
        name: "Camping",
        image:"https://pixabay.com/get/52e5d7414355ac14f1dc84609620367d1c3ed9e04e5074417d297fd39f45c2_340.jpg",
        description: "camping is very exciting bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobe"
    },
    {
        name:"River side",
        image:"https://pixabay.com/get/52e3d5404957a514f1dc84609620367d1c3ed9e04e5074417d297fd39f45c2_340.jpg",
        description:"Fish live in river bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobe bornfire is lobebornfire is lobe bornfire is lobe bornfire is lobe"
    }
];

function seedDB(){

    Campground.remove({},function(err){
        if(err){
            console.log(err);
        }
        console.log("remove campgrounds!");
        data.forEach(function(seed){
            Campground.create(seed, function(err,campground){
                if(err){
                    console.log(err);
                } else{
                    console.log("Added a campground");
                    Comment.create(
                        {
                            text: "This is a very beatiful place",
                            author: "Romeo"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("create new comment");
                            }
                        });
                }
            });
        });
    });    

};

module.exports = seedDB;

