
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// ZOD Schema
const contactSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Email must be valid"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;
interface props {
}

const ContactForm: React.FC<props> = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        console.log("Contact Form Submitted:", data);

        await new Promise((res) => setTimeout(res, 1000));
        alert("Message sent!");

        reset();
    };
    return (
        <div>


            <div className="text-center">
                <span className="text-blue-600 uppercase tracking-widest font-semibold text-center">
                    Contact me
                </span>
            </div>
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                Send me a message
            </h2>
            <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
                <form onSubmit={handleSubmit(onSubmit)} className=" lg:px-10">

                    {/* NAME */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            {...register("name")}
                            className="w-full border border-gray-300 rounded-lg p-2 
                        focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* EMAIL */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register("email")}
                            className="w-full border border-gray-300 rounded-lg p-2 
                        focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="example@mail.com"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* MESSAGE */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            {...register("message")}
                            rows={4}
                            className="w-full border border-gray-300 rounded-lg p-2 
                        focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Write your message..."
                        />
                        {errors.message && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-500 hover:bg-sunny-600 text-white 
                    font-semibold py-2 rounded-lg transition my-2"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;