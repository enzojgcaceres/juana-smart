import React, { useState } from "react";
import emailjs from "emailjs-com";


export default function ContactForm() {

    const [buttonText, setButtonText] = useState("Enviar");

    const sendEmail = (e) => {
        e.preventDefault();
        setButtonText("Enviando...");

        emailjs.sendForm("service_qoys55p", "template_4c04gyc", e.target, "lzGTN41AO4AKlhwhW")
        .then((result) => {
            console.log(result.text);
            alert("Email enviado con exito");
            setButtonText("Enviar");
        }, (error) => {
            console.log(error.text);
            alert("Error al enviar el email");
            setButtonText("Enviar");
        });
    }

    return (
        <form onSubmit={sendEmail} id="form" className="max-w-lg p-8 bg-white shadow-lg rounded-lg">
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2" >Nombre</label>
                <input type="text" 
                    name="user_name" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre..." 
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2" >Email</label>
                <input 
                    type="email" 
                    name="user_email" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tuemail@ejemplo.com"
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea 
                    name="message" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="Escribe tu mensaje aquí"
                    rows="5"
                />
            </div>
            <div className="text-center">
                <input 
                    type="submit" 
                    value="Enviar" 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg cursor-pointer transition duration-300 ease-in-out"
                />
            </div>
        </form>
    );
}