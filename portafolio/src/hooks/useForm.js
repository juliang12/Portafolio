import { useState } from "react"
import { helpHttp } from "../helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {

    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null)


    const handleChange = (e)=>{
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        })
    }

    const handleBlur = (e)=>{
        handleChange(e);
        setError(validateForm(form));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setError(validateForm(form));

        if(Object.keys(error).length === 0){
            alert("Enviando formulario");
            setLoading(true);
            helpHttp()
            .post("https://formsubmit.co/jgarcia.e16@gmail.com",{
            body: form,
            headers: {
                "Content-Type":"application/json",
                Accept: "application/json",

            },
        })
            .then((res) => {
                setLoading(false);
                setResponse(true)
                setForm(initialForm)
                setTimeout(()=>setResponse(false), 5000)
            })
        }else{
            return;
        }
    }

    return {
       form, error, loading, response, handleChange, handleBlur, handleSubmit
    }
}


