const express=require("express");
const cors= require("cors");
const {pool}=require("./utils/database")
const routes=require("./routes/routes")
const app=express();


app.use(cors());
app.use(express.json())

app.use("/",routes)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})