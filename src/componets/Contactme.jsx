import React from 'react';
import { useForm } from "react-hook-form";

function Contactme() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Here you would typically send the data to your backend
        alert('Message sent successfully!');
    };

    return (
        <div className='px-15 max-md:px-5 py-10 bg-gray-100' id='contact'>
            <div className='max-w-4xl mx-auto'>
                <h1 className='uppercase text-5xl text-center font-bold text-gray-800'>Contact</h1>
                <div className='flex flex-col items-center mb-10'>
                    <hr className='w-[20vw] max-md:w-[50vw] border-gray-400 mt-2' />
                    <hr className='w-[8vw] max-md:w-[20vw] border-2 -translate-y-0.5 rounded-2xl border-yellow-400' />
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className='bg-white p-8 rounded-lg shadow-md'>
                    <div className='mb-6'>
                        <label className='block text-gray-600 text-lg mb-2'>Name*</label>
                        <input 
                            type="text"
                            placeholder="Enter your name"
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-yellow-200'}`}
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
                    </div>
                    
                    <div className='flex flex-col md:flex-row gap-6 mb-6'>
                        <div className='w-full md:w-1/2'>
                            <label className='block text-gray-600 text-lg mb-2'>Email*</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-yellow-200'}`}
                                {...register("email", { 
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                        </div>
                        
                        <div className='w-full md:w-1/2'>
                            <label className='block text-gray-600 text-lg mb-2'>Subject</label>
                            <input 
                                type="text" 
                                placeholder="Enter subject" 
                                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-200'
                                {...register("subject")}
                            />
                        </div>
                    </div>
                    
                    <div className='mb-6'>
                        <label className='block text-gray-600 text-lg mb-2'>Message*</label>
                        <textarea 
                            cols="30" 
                            rows="6" 
                            placeholder='Enter your message' 
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-yellow-200'}`}
                            {...register("message", { 
                                required: "Message is required",
                                minLength: {
                                    value: 10,
                                    message: "Message must be at least 10 characters"
                                }
                            })}
                        ></textarea>
                        {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
                    </div>
                    
                    <button 
                        type="submit" 
                        className='w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 shadow hover:shadow-lg'
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contactme;   