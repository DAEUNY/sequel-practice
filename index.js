const express = require("express");
const app = express();
// const indexRouter = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = 3001;
const { Article, Category, User} = require('./models');
const { sequelize } = require("./models/index.js");
// const { Category } = require('./models');
const category = require("./models/category.js");
const e = require("express");
require("dotenv").config();

sequelize
  .authenticate()
  .then(() => {
    console.log(' π Connection has been established successfully.');
    // console.log(" - - connect - -", sequelize.connectionManager.pool)
  })
  .catch(err => {
    console.error(' πΏ Unable to connect to the database:', err);
  });

// sequelize.sync({force:true})
// sequelize.sync()
//   .then(() => {
//     console.log(" π€’ Drop and re-sync db.")
//   })

// Category.create({
//   food_type : 'νμ'
// })


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser(process.env.SECRET));

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS", "PUT"],
  })
);

// app.use("/", indexRouter);
app.get("/", async (req, res) => {
    // const myList = await User.findAll({
    //   where : {
    //     id : id
    //   },
    //   include : [{
    //     model : Article
    //   }]
    // })
    // // const ar = myList.Articles
    // // console.log("  -- --  - -νμΈ - - -- - ", ar)
    // // const myl = myList[0].Articles.foreach(async(my) => {
    // const myl = myList.foreach(async(my) => {
    //   const lis = await myList.getArticles();
    // })
    // console.log("  -- --  - -νμΈ - - -- - ", myl)
    // res.send(myl)
  
    const myList = await User.findAll({
      name : 'λλ'
    });
      // console.log("  - - - --  μ¬κΈ° μ μ²΄ μ μ  -= -- - - ", myList[0].toJSON())
      
      const join = await User.findAll({
        include : [{
          model : Article,
          // include : 'UserArticles'
        }]
      })
      // console.log("  - - - --  μ¬κΈ° μ μ²΄ μν°ν΄ -= -- - - ", join.map(el => JSON.stringify(el, null, 2)))
      // console.log("  - - - --  μ¬κΈ° μ μ²΄ μν°ν΄ -= -- - - ", join.map(el => el.toJSON()))
      console.log("  - - - --  μ¬κΈ° μ μ²΄ μν°ν΄ -= -- - - ", join.map(user => user.dataValues.Articles.map(art=> art)))

    // const myl = myList.forEach(async (lis) => {
      
    //   // console.log("  - - - --  μ¬κΈ° μ μ²΄ μ μ  -= -- - - ", lis.toJSON())
    //   const lisa = await lis.getArticles()
    //   // console.log("  - - - --  μ¬κΈ° μ μ²΄ μν°ν΄ -= -- - - ", lisa)
    //   lisa.forEach((uslis) => {
    //     console.log("  - - - --  μ¬κΈ° μ μ  μν°ν΄ -= -- - - ", uslis.UserArticles.isHost)
    //   })
    //   // const courses = await student.getCourses(); // (a) 
    //   // console.log(`! νμ μ΄λ¦ : ${student.name}`);
    //   // courses.forEach((course) => {
    //   //   console.log(
    //   //     `!! κ³Όλͺ© μ΄λ¦ : ${course.title} !!! μ μ : ${course.Grade.score}` // (b)
    //   //   );
    //   // });
    // })
    res.send('λ°μ')
  // res.send(`π ~~ Banana Market ~~ π`);
})

app.listen(port, () => {
  console.log(`π ~~ Banana Market μλ²κ° ${port} ν¬νΈμμ μλ μ€μλλ€ ~~ π`);
});
