const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const bodyParser = require("body-parser");
const Userdetail = require("./src/models/db/register");
const usersignup = require("./src/models/db/login");
const { Console, error } = require("console");
require("./src/models/db/conn");

// For serving static files
app.use("/static", express.static("static"));

// Set the template engine as pug
app.set("view engine", "pug");

// Set the views directory
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// rendrering all pages

app.get("/about", (req, res) => {
  res.status(200).render("about.pug");
});
app.get("/class", (req, res) => {
  res.status(200).render("class.pug");
});
app.get("/index", (req, res) => {
  res.status(200).render("index.pug");
});
app.get("/our-team", (req, res) => {
  res.status(200).render("our-team.pug");
});
app.get("/services", (req, res) => {
  res.status(200).render("service.pug");
});
app.get("/member", (req, res) => {
  res.status(200).render("member.pug");
});
app.get("/sign-up", (req, res) => {
  res.status(200).render("sign-up.pug");
});
app.get("/member-msg", (req, res) => {
  res.status(200).render("member-msg.pug");
});

// error templetes
app.get("/404-user", (req, res) => {
  res.status(200).render("404-user.pug");
});
app.get("/invalid-login", (req, res) => {
  res.status(200).render("invalid-login.pug");
});

// for getting form post resquest

app.post("/form", async (req, res) => {
  try {
    const userdata = new Userdetail({
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      msg: req.body.msg,
    });
    const postdata = await userdata.save();
    //  res.send(postdata);
    const params = { message: "form has been submitted successfully" };
    res.status(200).render("member-msg.pug", params);
    
  } catch (error) {
    res.send(error);
  }
});

// login
app.post("/login", async (req, res) => {
  try {
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;

    if (password === confirmpassword) {
      const usersignupData = new usersignup({
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
        email: req.body.email,
      });

      const postsignup = await usersignupData.save();
      const params = { message: "login successfull" };
      res.status(200).render("index.pug", params);
    } else {
      res.status(400).render("invalid-login.pug");
    }
  } catch (error) {
    res.send("invalid-login.pug");
  }
});

// login check
app.post("/logincheck", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const useremail = await usersignup.findOne({ email: email });

    if (useremail.password === password) {
      res.status(201).render("index.pug");
    } else {
       res.render("404-user");  
    }
  } catch (error) {
    
    res.render("404-user.pug");
  }
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:${port}`);
});
