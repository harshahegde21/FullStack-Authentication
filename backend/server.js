
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routers/authrouter.js";
import cors from "cors"
import { handleDBconnection } from "./connection.js";
import cookieParser from "cookie-parser";
// import { json } from "stream/consumers";

const app = express();
const port = 5000;
app.use(cors({
  origin:"http://localhost:5173",
  methods:["GET","POST","PUT","PATCH","DELETE"],
  credentials:true
}));
app.use(express.json());
app.use(cookieParser());
// Required to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the built React app statically
const reactBuildPath = path.join(__dirname, "../frontend/Authentication/dist");
app.use(express.static(reactBuildPath));

await handleDBconnection("mongodb://localhost:27017/FullStack-Auth").then(()=>console.log("Database connected successfully!")
).catch(()=>console.log("error in connecting database")
)

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
app.use("/auth",router);
