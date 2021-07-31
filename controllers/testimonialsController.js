import {Testimonial} from "../models/Testimonials.js"

export const saveTestimonials =  async(req, res) => {

  const errors = []

  const { name, email, message } = req.body
  //Validacion
  if(name.trim() === "") {
    errors.push({message: "The name cannot be empty"});
  }

  if(email.trim() === "") {
    errors.push({message: "The email cannot be empty"});
  }

  if(message.trim() === "") {
    errors.push({message: "The message cannot be empty"});
  }
  
  if(errors.length > 0) {
    //Consultar testimoniales existentes
    const testimonials = await Testimonial.findAll();


    //Enviar a la vista los errores
    res.render("testimonials" , {
      page: "Testimonials",
      errors,
      name,
      email,
      message,
      testimonials
    })
  } else {
    //Enviar a la base de datos
    //Creamos una nueva tabla para los testimoniales en TablePlus
    try {
      await Testimonial.create({
        name,
        email,
        message
      })

      res.redirect("/testimonials")
    } catch (error) {
      console.error(error)
    }
  }
}