import express from "express";
import routes from "../routes";

const vidoRouter = express.Router();

vidoRouter.get(routes.videos, (req,res) => res.send("videos"));
vidoRouter.get(routes.upload, (req,res) => res.send("videosUpload"));
vidoRouter.get(routes.videoDetail, (req,res) => res.send("videosDetail"));
vidoRouter.get(routes.editVideo, (req,res) => res.send("editevideos"));
vidoRouter.get(routes.deleteVideo, (req,res) => res.send("DeleteVideos"));

export default vidoRouter;