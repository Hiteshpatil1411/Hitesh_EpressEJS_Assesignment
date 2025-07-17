const express = require('express')
const app =express()
const PORT= 3000;
const HOST = "127.0.0.1"
app.get("/",(req,res)=>{
    const data= {title:"Welcome to Home Page"}
    res.render('home.ejs', data )
})
app.get("/about",(req,res)=>{
    const data= {title:"About US"}
    res.render('about.ejs', data )
})
app.get("/contact",(req,res)=>{
    const data= {title:"Contact Us" }
    res.render('home.ejs', data )
})
app.use((req,res)=>{
    const data= {title:"404 Page NOT Found" }
    res.render('pageNF.ejs', data )
})



app.listen(PORT,()=>{
    console.log(`Express Server Running http://${HOST}:${PORT}`)
})