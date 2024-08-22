const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Devops Final Project</title>
            <style>
                body {
                    background-image: url("https://wallpapers.com/images/high/simple-background-nfe3kq9cr13oqs3l.webp");
                    background-size: cover;
                    background-position: center;
                }
            </style>
        </head>
        <body>
            <div class="main" id="home">
                <br />
                <h3 align="center">
                    <font face="sans-serif" size="6" color="#2c3e50">LOGO</font>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <font face="sans" size="4">
                        <a href="#home">HOME</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#">VIDEOS</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#">PORTFOLIO</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#">BLOG</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#">CONTACT US</a>
                    </font>
                </h3>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br><br><br>
                <h1 align="center">
                    <font face="sans-serif" color="#2980b9" size="7">
                    Devops Final Project
                    </font>
                </h1>
                <h3 align="center">
                    <font face="Lato" color="#000" size="5">
                        Creating Docker file, Docker Build and Deploying on Server
                    </font>
                </h3>
                <br />
                <h3 align="center">
                <a href="#">
                    <font face="Lato" color="#000">GET STARTED</font>
                </a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#">
                    <font face="Lato" color="#f00">SUBSCRIBE US</font>
                </a>
                </h3>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
