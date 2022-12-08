const express =          require("express"),
      router =           express.Router(),
      Blog =       require("../models/blog"),
      Comment =          require("../models/comment"),
      middleWare =       require("../middleware");

//INDEX route
router.get("/" , function(req , res)
{
        Blog.find({} , function(error , all_blogs)
        {
                if(error)
                {
                console.log(error);
                }
                else
                {
                res.render("blogs/index" , {bg1: all_blogs});
                }
        });
});

//NEW route
router.get("/new" , middleWare.isLoggedIn , function(req , res)
{
        res.render("blogs/new");
})

//CREATE route
router.post("/" , middleWare.isLoggedIn , function(req , res)
{
        let n = req.body.name;
        let i =  req.body.img;
        let desc =  req.body.des;
        let aut =
        {
            id: req.user._id,
            username: req.user.username     
        }
        let obj = {name: n , image : i , description: desc , author: aut}

        Blog.create(obj , function(error , newlycreated)  
        { 
                if(error)
                {
                        console.log(error);
                }
                else
                {
                        res.redirect("/blogs");
                }
        });
})

//SHOW route
router.get("/:id" , function(req , res)
{
        Blog.findById(req.params.id).populate("comments").exec(function(error , foundblog)
        {
                if(error)
                {
                        console.log(error);
                }
                else
                {
                        res.render("blogs/show" , {d: foundblog});
                }
        });
})

//EDIT
router.get("/:id/edit" , middleWare.checkBlogOwnership , function(req , res)
{
        Blog.findById(req.params.id , function(error , foundB)
        {
                res.render("blogs/edit" , {foundBB: foundB});         
        });
});

//UPDATE
router.put("/:id" , middleWare.checkBlogOwnership , function(req , res)
{
        Blog.findByIdAndUpdate(req.params.id , req.body.c , function(error , updated)
        {
                if(error)
                {
                        res.redirect("/blogs")
                }
                else
                {
                        res.redirect("/blogs/" + req.params.id);
                }
        })
})

//DESTROY
router.delete("/:id" , middleWare.checkBlogOwnership , function(req , res)
{               
        Blog.findByIdAndRemove(req.params.id , function(error)
        {
                if(error){res.redirect("/blogs")}
                else{res.redirect("/blogs")}
        })
})

module.exports = router;