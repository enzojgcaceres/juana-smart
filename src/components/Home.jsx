'use client';
import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import ContactForm from './ContactForm';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* Fondo o Imagen de encabezado */}
      <div className="flex justify-between items-center">
        <div className='flex-grow flex justify-center ml-24'>
        <Image src="/images/logo-no-background.svg" alt="Logo Smart" width={370} height={76} />
        </div>
        <div className="flex space-x-4 ml-auto">
          <a href="https://www.instagram.com/juanamartpasteleria?igsh=MmZtajV4dGhseWlj" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="#contact-form">
            <MdEmail size={24} />
          </a>
          <a href="https://www.instagram.com/juanamartpasteleria?igsh=MmZtajV4dGhseWlj" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>

        </div>
      </div>

      {/* Galería de imágenes */}
      <section className="my-8">
        <h2 className="text-2xl font-bold text-center mb-4">Nuestros productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Image src="/images/imagen1.png" alt="Imagen 1" width={500} height={300} className="w-full h-auto"/>
          <Image src="/images/imagen2.png" alt="Imagen 2" width={500} height={300} className="w-full h-auto"/>
          <Image src="/images/imagen3.png" alt="Imagen 3" width={500} height={300} className="w-full h-auto"/>
          <Image src="/images/imagen4.png" alt="Imagen 4" width={500} height={300} className="w-full h-auto"/>
          <Image src="/images/imagen5.png" alt="Imagen 5" width={500} height={300} className="w-full h-auto"/>
          <Image src="/images/logo-color.svg" alt="Imagen 6" width={500} height={300} className="w-full h-auto"/>
        </div>
      </section>

      {/* Formulario de contacto */}
      <section className="my-8" id="contact-form">
        <h2 className="text-2xl font-bold text-center mb-4">Contáctanos</h2>
        <div className="max-w-md mx-auto bg-purple-200 p-6 rounded-lg"> {/* Añadí max-w-md y mx-auto */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
