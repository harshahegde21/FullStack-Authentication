import express from "express"
import { renderSignupForm,renderLoginForm, handleLogin, handleSignup ,handleLogout} from "../controllers/authcontrol.js";
import path from 'path';
import { fileURLToPath } from 'url';
const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
router.use(express.static(path.join(__dirname, "../../frontend/Authentication/dist")));


// Display form routes
router.get("/",(req,res)=>{
    
})
router.get("/signup",renderSignupForm);
router.get("/login",renderLoginForm);

// Routes for handling the signup,login
router.post("/signup",handleSignup);
router.post("/login",handleLogin);
router.post("/logout",handleLogout)

export default router;