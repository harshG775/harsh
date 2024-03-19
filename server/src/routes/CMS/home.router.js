import express from "express";
import heroController from "../../../controllers/hero.controller.js";
import aboutMeController from "../../../controllers/aboutMeController.controller.js";
const router = express.Router();

// Hero Section
router.post("/hero", heroController.createHero);
router.get("/hero", heroController.getHero);
router.patch("/hero", heroController.updateHero);
router.delete("/hero", heroController.deleteHero);


// About me Section
router.post("/about-me", aboutMeController.createAboutMe);
router.get("/about-me", aboutMeController.getAboutMe);
router.patch("/about-me", aboutMeController.updateAboutMe);
router.delete("/about-me", aboutMeController.deleteAboutMe);

export default router;
