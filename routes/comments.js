const express =          require("express"),
      router =           express.Router({mergeParams: true}), // comments->blog
      Blog =       require("../models/blog"),
      Comment =          require("../models/comment"),
      middleWare =       require("../middleware"); 

//NEW route
router.get("/new" , middleWare.isLoggedIn , function(req , res)
{
        Blog.findById(req.params.id , function(error , blog)
        {
                if(error){console.log(error);}
                else
                {
                        res.render("comments/new" , {blog: blog})
                }
        })
})

//CREATE route
router.post("/" , middleWare.isLoggedIn , function(req , res)
{
        Blog.findById(req.params.id , function(error , blogXX)
        {
                if(error){res.redirect("/blogs");}
                else
                {
                        Comment.create(req.body.commentX , function(error , comment)
                        {
                                if(error)
                                {
                                        req.flash("error" , "Something went wrong")
                                        console.log(error);
                                }
                                else
                                {
                                        comment.author.id = req.user._id;
                                        comment.author.username = req.user.username;
                                        comment.save();
                                        blogXX.comments.push(comment);
                                        blogXX.save();
                                        req.flash("success" , "Successfully created comment!")
                                        res.redirect("/blogs/" + blogXX._id)
                                }
                        })
                }
        })
        
        
})

//COMMENTS EDIT
router.get("/:comment_id/edit" , checkCommentsOwnership , function(req , res)
{
        Comment.findById(req.params.comment_id , function(error , foundcomment)
        {
                if(error){res.redirect("back")}
                else
                {
                        res.render("comments/edit" , {blogID: req.params.id , commentXX: foundcomment}) 
                }
        })
});

//COMMENTS UPDATE
router.put("/:comment_id" , checkCommentsOwnership , function(req , res)
{
        Comment.findByIdAndUpdate(req.params.comment_id , req.body.commentX , function(error , updatedComment)
        {
                if(error){res.redirect("back")}
                else
                {
                        res.redirect("/blogs/" + req.params.id);
                }
        })
})

//COMMENTS DESTROY
router.delete("/:comment_id" , checkCommentsOwnership , function(req , res)
{
        Comment.findByIdAndRemove(req.params.comment_id , function(error)
        {
                if(error){res.redirect("back")}
                else
                {
                        req.flash("success" , "Comment deleted!")
                        res.redirect("/blogs/" + req.params.id)
                }
        })
})

function checkCommentsOwnership(req , res, next)
{
    if(req.isAuthenticated())
    {
        Comment.findById(req.params.comment_id , function(err , foundComment)
        {
            if(err)
            {
                req.flash("error" , "Blog not found");
                res.redirect("back")
            }
            else
            {   
                if(foundComment.author.id.equals(req.user._id))
                {
                    next();
                }
                else
                {
                    req.flash("error" , "Permission denied")
                    res.redirect("back");
                }
            }
        })
    }
    else
    {
        req.flash("error" , "You need to be logged in!")
        res.redirect("back")
    }
}

module.exports = router;