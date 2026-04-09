import React from 'react'
import ContactForm from '../form/ContactForm'
import ContactDetails from '../ContactDetail'

export default function ContactSection() {
  return (
    <section
      id='contact'
      className='w-full px-6 py-20 flex items-center justify-center'
    >
      <div className=''>
        <ContactDetails />
        <ContactForm />
      </div>
    </section>
  )
}
