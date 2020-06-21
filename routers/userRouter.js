import express from "express";
import routes from "../routes";

const userRouter = express.Router();
userRouter.get(routes.users, (req,res) => res.send("Users"));
userRouter.get(routes.userDetail, (req,res) => res.send("UsersDetail"));
userRouter.get(routes.editProfile, (req,res) => res.send("editeProfile"));
userRouter.get(routes.changePassword, (req,res) => 
res.send("changePassword"));

export default userRouter;