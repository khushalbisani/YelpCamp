# YelpCamp gallary-blog app 

ROUTES

NAME        URL             VERB    DESC.
===========================================================================
INDEX       /campground           GET     Display a list of post
NEW         /campground/new       GET     Display form to make a new post
CREATE      /campground           POST    Add new post to db
SHOW        /campground/:id       GET     Show info about one post
            /campground/:id/comment/:comment_id
EDIT        /campground/:id/edit  GET     Show edit form about for a post
            /campground/:id/comment/:comment_id/edit
UPDATE      /campground/:id       PUT     Update particular post, then redirect somewhere
            /campground/:id/comment/:comment_id
DESTROY     /campground/:id       DELETE  Delete particular post, then redirect somewhere
            /campground/:id/comment/:comment_id
