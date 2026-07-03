import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_piwf8fb",  // Replace with your EmailJS Service ID
        "template_0aget0g",  // Replace with your EmailJS Template ID
        form.current,
        "C2D04a9Q2OAOUamUA"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
  id="contact"
  className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
>
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
  <h2 className="text-4xl font-bold text-white">
    CONTACT
  </h2>

  <div className="w-24 h-1 bg-[#3B82F6] rounded-full mx-auto mt-3"></div>

  <p className="mt-4 text-base md:text-lg text-slate-300 font-medium tracking-wide leading-7 max-w-3xl mx-auto">
    Feel free to reach out for opportunities, collaborations, or just to say hello.
  </p>
</div>

      {/* Contact Form */}
      <div
  className="mt-8 w-full max-w-xl
  rounded-2xl
  border border-slate-700
  bg-slate-900/80
  backdrop-blur-md
  shadow-lg
  p-8
  hover:border-[#3B82F6]
  transition-all duration-300"
>
        <h3 className="text-2xl font-semibold text-white text-center">
  Get In Touch<span>📩</span>
</h3>



        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
           className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-600 placeholder-slate-400 focus:outline-none focus:border-[#3B82F6] transition"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-600 placeholder-slate-400 focus:outline-none focus:border-[#3B82F6] transition"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-600 placeholder-slate-400 focus:outline-none focus:border-[#3B82F6] transition"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-600 placeholder-slate-400 focus:outline-none focus:border-[#3B82F6] transition"
          />
          
          {/* Send Button */}
          <button
  type="submit"
  className="w-full py-3 rounded-lg font-semibold text-white
  bg-gradient-to-r from-[#2563EB] to-[#3B82F6]
  hover:from-[#1D4ED8] hover:to-[#2563EB]
  transition-all duration-300
  hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]"
>
  Send Message
</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

