import React from 'react'
import ContactForm from '../form/ContactForm'
import ContactDetails from '../ContactDetail'

export default function ContactSection() {
  return (
    <section
      id='contact'
      className='max-w-7xl mx-auto w-full py-20 px-6'
    >
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <ContactDetails />
        <ContactForm />
      </div>
    </section>
  )
}
