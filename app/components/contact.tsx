"use client";
import React, { useState, FormEvent , ChangeEvent} from "react";

interface FormType {
  fullName:string,
  email:string,
  feedback:string,
  message:string
}
interface ErrorType {
  fullName:string,
  email:string,
  feedback:string,
  message:string
}
export default function ContactCard() {
  const [formData , setFormData] = useState<FormType>({fullName:"",email:"",feedback:"",message:""})
  const [error , setError] = useState<ErrorType>({fullName:"",email:"",feedback:"",message:""})

  //form logic
  const validateForm = ()=>{
    const formErrors:FormType = {
      fullName: "",
      email: "",
      feedback: "",
      message: ""
    }
    if(!formData.fullName){
      formErrors.fullName = "Full name is required";
    }
    if(!formData.email){
      formErrors.email = "Email is required";
    }else if(!/\S+@\S+\.\S+/.test(formData.email)){
      formErrors.email = "Email address is required";
    }

    if(!formData.feedback){
      formErrors.feedback = "feedback is required";
    }

    if(!formData.message){
      formErrors.message = "Message is required";
    }

    return formErrors;
  }

  //handle for Submission
  const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const validationErrors = validateForm()
    setError(validationErrors)
    //if no errors
    if(Object.keys(validationErrors).length === 0){
      console.log("Form Submitted Succesfully", formData)

      //clear form after submission
      setFormData({fullName:"",email:"",feedback:"",message:""})
    }
  }

  //handle Change
  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <section className="bg-bg py-16 px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Contact Us
        </h1>
      </section>
      <div className="bg-bg">
        <div className=" flex flex-col md:flex-row items-center max-w-screen-xl p-9 md:p-10">
          {/* Text Section */}
          <div className="flex-1 p-5 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-medium leading-tight  hover:text-amber-700">
              Introduce the Best
            </h1>
            <h1 className="text-4xl mt-2 md:text-5xl font-medium text-blue-950 leading-tight">
              Best Watches for You To Enhace Your Style
            </h1>
            <p className="text-blue-950 mt-11">
              we believe that a watch is more than just a timepiece it’s a symbol of
              style, precision, and individuality. Our mission is to curate an 
              exceptional collection of watches that cater to every taste,
              occasion, and lifestyle. From timeless classics to innovative 
              smartwatches, we offer a diverse range of designs that blend 
              functionality with elegance.
            
            </p>
            <p className="text-blue-950 mt-4">
              Join us today to explore our collection and find the perfect
              resource to elevate your tech skills. Sign up now and get
              exclusive deals!
            </p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="flex-1 bg-white p-8 shadow-2xl rounded-sm w-auto max-w-md">
            {/* Name */}
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* feedback */}
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Feedback</label>
              <input
                type="text"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                placeholder="feedback"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>setFormData({...formData , [e.target.name]:e.target.value})}
                placeholder="Write your message here"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              ></textarea>
              {error.message && <p className="text-red-500 text-sm">{error.message}</p>}
            </div>

            {/* Submit Button */}
            <button className="bg-blue-600 text-white py-2 px-3 rounded-md hover:bg-blue-700 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
