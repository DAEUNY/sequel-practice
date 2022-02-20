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
    console.log(' 😈 Connection has been established successfully.');
    // console.log(" - - connect - -", sequelize.connectionManager.pool)
  })
  .catch(err => {
    console.error(' 👿 Unable to connect to the database:', err);
  });

// sequelize.sync({force:true})
// sequelize.sync()
//   .then(() => {
//     console.log(" 🤢 Drop and re-sync db.")
//   })

// Category.create({
//   food_type : '한식'
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
    // // console.log("  -- --  - -확인 - - -- - ", ar)
    // // const myl = myList[0].Articles.foreach(async(my) => {
    // const myl = myList.foreach(async(my) => {
    //   const lis = await myList.getArticles();
    // })
    // console.log("  -- --  - -확인 - - -- - ", myl)
    // res.send(myl)
  
    const myList = await User.findAll({
      name : '나나'
    });
      // console.log("  - - - --  여기 전체 유저 -= -- - - ", myList[0].toJSON())
      
      const join = await User.findAll({
        include : [{
          model : Article,
          // include : 'UserArticles'
        }]
      })
      // console.log("  - - - --  여기 전체 아티클 -= -- - - ", join.map(el => JSON.stringify(el, null, 2)))
      // console.log("  - - - --  여기 전체 아티클 -= -- - - ", join.map(el => el.toJSON()))
      console.log("  - - - --  여기 전체 아티클 -= -- - - ", join.map(user => user.dataValues.Articles.map(art=> art)))

    // const myl = myList.forEach(async (lis) => {
      
    //   // console.log("  - - - --  여기 전체 유저 -= -- - - ", lis.toJSON())
    //   const lisa = await lis.getArticles()
    //   // console.log("  - - - --  여기 전체 아티클 -= -- - - ", lisa)
    //   lisa.forEach((uslis) => {
    //     console.log("  - - - --  여기 유저 아티클 -= -- - - ", uslis.UserArticles.isHost)
    //   })
    //   // const courses = await student.getCourses(); // (a) 
    //   // console.log(`! 학생 이름 : ${student.name}`);
    //   // courses.forEach((course) => {
    //   //   console.log(
    //   //     `!! 과목 이름 : ${course.title} !!! 점수 : ${course.Grade.score}` // (b)
    //   //   );
    //   // });
    // })
    res.send('받음')
  // res.send(`🍌 ~~ Banana Market ~~ 🍌`);
})

app.listen(port, () => {
  console.log(`🍌 ~~ Banana Market 서버가 ${port} 포트에서 작동 중입니다 ~~ 🍌`);
});
