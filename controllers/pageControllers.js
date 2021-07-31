import { Travels } from '../models/Travels.js'
import { Testimonial } from "../models/Testimonials.js"

export const homePage = async(req, res) => {
  try {
    const travelsResult =  Travels.findAll({ limit: 3})
    const testimonialsResult =  Testimonial.findAll({ limit: 3})
    
    const [ travels, testimonials] = await Promise.all([travelsResult, testimonialsResult])
    res.render("home", {
      page: "Home",
      hero: "home",
      travels,
      testimonials
    });
  } catch (error) {
    console.log(error)
  }

}

export const testimonialsPage = async(req, res) => {
  try {
    const testimonials = await Testimonial.findAll();

    res.render("testimonials", {
      page: "Testimonials",
      testimonials
    });
  } catch (error) {
    console.error(error)
  }
}

export const travelsPage = async (req, res) => {
  //Consultar BDD
  try {
    const travels = await Travels.findAll();

    //Eviamos la consulta a las vistas
    res.render("travels", {
      page: "Next Trips",
      travels,
    });
  } catch (error) {
    console.error(error)
  }
}

export const travelsDetailPage = async (req, res) => {
  const { slug } = req.params;

  try {
    const travel = await Travels.findOne({ where: { slug }})
    res.render("travel_detail", {
      page: "Travel Information",
      travel,
    })
  } catch (error) {
    console.log(error)
  }
}

export const aboutPage = (req, res) => {
  res.render("about", {
    page: "About"
  });
}