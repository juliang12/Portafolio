import { useState } from "react"
import Loader from "../components/Loader"
import { useForm } from "../hooks/useForm"
import "./ContactoPage.css"

const initialForm = {
    nombre: "",
    email: "",
    subject: "",
    comments: ""
}

const validationsForm = (form)=>{
    let error = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if(!form.nombre.trim()){
        error.nombre = "El campo Nombre es requerido";

    }else if(!regexName.test(form.nombre)){
        error.nombre = "El campo 'Nombre' solo acepta letras y espacios en blanco";
    }

    if(!form.email.trim()){
        error.email = "El campo Email es requerido";

    }else if(!regexEmail.test(form.email)){
        error.email = "El campo 'Email' es incorrecto";
    }

    if(!form.subject.trim()){
        error.subject = "El campo Asunto es requerido";

    }

    if(!form.comments.trim()){
        error.comments = "El campo Comentarios es requerido";

    }else if(!regexComments.test(form.comments)){
        error.comments = "El campo 'Comentarios' no debe exceder los 255 caracteres"
    }

    return error;
}

const ContactoPage = () => {
    const {form, error, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validationsForm)
    return (
        <div className="contacto">
            <div className="container-contact">
                <h3 className="titulo-1">¡Gracias por tu interés en ponerte en contacto!</h3>
                <h4 className="titulo-2">si desea hablar sobre cómo trabajar juntos , me complace recibir su correo electrónico.</h4>
                <form onSubmit={handleSubmit} className="form-container">
                    <label className="title" htmlFor="nombre">Nombre:</label>
                    <input 
                    className="input-form"
                    type="text" 
                    name="nombre" 
                    id="" 
                    placeholder="Nombre"
                     onBlur={handleBlur} 
                     onChange={handleChange}
                      value={form.nombre} 
                      required/>
                      {error.nombre && <div className="form-error">{error.nombre}</div>}
                    <label className="title" htmlFor="email">Email:</label>
                    <input 
                    className="input-form"
                    type="email" 
                    name="email" 
                    id="" 
                    placeholder="Direccion de correo"
                    onBlur={handleBlur} 
                     onChange={handleChange}
                     value={form.email} 
                      required/>
                      {error.email && <div className="form-error">{error.email}</div>}
                      <label className="title" htmlFor="email">Asunto:</label>
                    <input
                    className="input-form"
                     type="text" 
                    name="subject" 
                    value={form.subject}  
                    placeholder="Asunto a tratar"
                    onBlur={handleBlur} 
                     onChange={handleChange}
                     required />
                     {error.subject && <div className="form-error">{error.subject}</div>}
                    <textarea name="comments" id="" cols="50" rows="5"
                           value={form.commments}  
                           
                           onBlur={handleBlur} 
                            onChange={handleChange}
                            required >
                    </textarea>
                    <button className="btn-form" value="Enviar">Enviar</button>
                </form>
                {loading &&  <Loader/>}
                <div className="enviado">{response && "Los datos han sido enviados"}</div>
            </div>
        </div>
    )
}

export default ContactoPage
