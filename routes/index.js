//Creando rutas con express
import express from 'express';
import { homePage, testimonialsPage, travelsPage, aboutPage, travelsDetailPage } from '../controllers/pageControllers.js';
import { saveTestimonials } from "../controllers/testimonialsController.js";

const router = express.Router();
//req = lo que enviamos desde el cliente | res = lo que express responde

router.get("/", homePage)
router.get("/about", aboutPage)
router.get("/travels", travelsPage)
router.get("/travels/:slug", travelsDetailPage)
router.get("/testimonials", testimonialsPage)
router.post("/testimonials", saveTestimonials)

export default router;