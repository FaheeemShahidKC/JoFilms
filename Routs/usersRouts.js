const express = require('express')
const userRout = express()
const userController = require("../Controller/userController")
const UserGalleryController = require('../Controller/galleryController')

     //* ===== View Set Up =====


userRout.set("views","./View/user")


     //? ===== Routs Handling =====

userRout.get('/',userController.homePageLoad)
userRout.get("/loadAbout",userController.aboutPageLoad)
userRout.get('/protfolio',userController.loadProtfolio)
userRout.get('/UserSideGallery',UserGalleryController.loadGalleryUser)
userRout.post('/contact',userController.sendMail)
userRout.get('/contact',userController.loadContact)

userRout.get('*',(req,res)=>{
     res.render("404")
})

module.exports = userRout
