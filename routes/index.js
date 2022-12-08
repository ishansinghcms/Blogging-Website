const express =          require("express"),
      router =           express.Router(),
      passport =         require("passport"),
      User = require("../models/user");

router.get("/" , function(req , res)
{     
        res.render("landing")
})

router.get("/register" , function(req , res)
{
        res.render("register");
})

router.post("/register" , function(req , res) 
{       
        let newuser = new User({username: req.body.username});
        User.register(newuser , req.body.password , function(error , user)
        {
                if(error)
                {
                        req.flash("error" , error.message)
                        res.render("register");
                }
                else
                {
                        passport.authenticate("local")(req , res , function()
                        {
                                req.flash("success" , "Welcome to our Vacation Blog: " + user.username)
                                res.redirect("/blogs");
                        })
                }
                
        })
})

router.get("/login" , function(req , res)
{
        res.render("login");
})

router.post("/login" , passport.authenticate("local" , 
{
        successRedirect: "/blogs",
        failureRedirect: "/login"
}) ,  function(req , res)
      { 
      });

router.get("/logout" , function(req , res) 
{
        req.logout();   
        req.flash("success" , "Logged you out!")
        res.redirect("/blogs");
})

module.exports = router;