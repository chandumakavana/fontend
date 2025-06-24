import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { contactAPI } from '../services/api';
import { FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

function Contactme() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        try {
            const response = await contactAPI.submit(data);
            setSubmitStatus({
                type: 'success',
                message: response.message || 'Message sent successfully!'
            });
            reset(); // Clear form
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: error.message || 'Failed to send message. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='px-15 max-md:px-5 py-10 bg-gray-100' id='contact'>
            <div className='max-w-4xl mx-auto'>
                <h1 className='uppercase text-5xl text-center font-bold text-gray-800'>Contact</h1>
                <div className='flex flex-col items-center mb-10'>
                    <hr className='w-[20vw] max-md:w-[50vw] border-gray-400 mt-2' />
                    <hr className='w-[8vw] max-md:w-[20vw] border-2 -translate-y-0.5 rounded-2xl border-yellow-400' />
                </div>
                
                {/* Status Message */}
                {submitStatus && (
                    <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                        submitStatus.type === 'success' 
                            ? 'bg-green-100 text-green-800 border border-green-200' 
                            : 'bg-red-100 text-red-800 border border-red-200'
                    }`}>
                        {submitStatus.type === 'success' ? (
                            <FaCheckCircle className='text-green-600' />
                        ) : (
                            <FaExclamationCircle className='text-red-600' />
                        )}
                        <span>{submitStatus.message}</span>
                    </div>
                )}
                
                <form onSubmit={handleSubmit(onSubmit)} className='bg-white p-8 rounded-lg shadow-md'>
                    <div className='mb-6'>
                        <label className='block text-gray-600 text-lg mb-2'>Name*</label>
                        <input 
                            type="text"
                            placeholder="Enter your name"
                            disabled={isSubmitting}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 disabled:bg-gray-100 disabled:cursor-not-allowed ${
                                errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-yellow-200'
                            }`}
                            {...register("name", { 
                                required: "Name is required",
                                minLength: {
                                    value: 2,
                                    message: "Name must be at least 2 characters"
                                }
                            })}
                        />
                        {errors.name && <span className="text-red-500 text-sm mt-1 block">{errors.name.message}</span>}
                    </div>
                    
                    <div className='flex flex-col md:flex-row gap-6 mb-6'>
                        <div className='w-full md:w-1/2'>
                            <label className='block text-gray-600 text-lg mb-2'>Email*</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                disabled={isSubmitting}
                                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 disabled:bg-gray-100 disabled:cursor-not-allowed ${
                                    errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-yellow-200'
                                }`}
                                {...register("email", { 
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                            {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email.message}</span>}
                        </div>
                        
                        <div className='w-full md:w-1/2'>
                            <label className='block text-gray-600 text-lg mb-2'>Subject</label>
                            <input 
                                type="text" 
                                placeholder="Enter subject" 
                                disabled={isSubmitting}
                                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-200 disabled:bg-gray-100 disabled:cursor-not-allowed'
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
                            disabled={isSubmitting}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 disabled:bg-gray-100 disabled:cursor-not-allowed ${
                                errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-yellow-200'
                            }`}
                            {...register("message", { 
                                required: "Message is required",
                                minLength: {
                                    value: 10,
                                    message: "Message must be at least 10 characters"
                                }
                            })}
                        ></textarea>
                        {errors.message && <span className="text-red-500 text-sm mt-1 block">{errors.message.message}</span>}
                    </div>
                    
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className='w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-gray-800 font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 shadow hover:shadow-lg disabled:transform-none flex items-center justify-center gap-2'
                    >
                        {isSubmitting ? (
                            <>
                                <FaSpinner className='animate-spin' />
                                Sending...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contactme;