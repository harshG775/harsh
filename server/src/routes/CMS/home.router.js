import express from "express";
import heroController from "../../../controllers/hero.controller.js";
const router = express.Router();

router.post("/hero", heroController.createHero);
router.get("/hero", heroController.getHero);
router.patch("/hero", heroController.updateHero);
router.delete("/hero", heroController.deleteHero);

export default router;
