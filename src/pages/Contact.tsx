import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, ChevronDown } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    serviceNeeded: "",
    comment: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-6 py-16"
      style={{ backgroundColor: "#080844" }}
    >
      <div
        className="max-w-3xl w-full rounded-3xl p-10 shadow-xl"
        style={{ backgroundColor: "#EBEBDF", color: "#080844" }}
      >
        {/* Title */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Get In Touch
          </h1>
          <p className="text-lg font-semibold max-w-xl mx-auto text-[#080844] opacity-80">
            Ready to transform your business with our intelligent solutions? Let's
            start the conversation.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* First + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold mb-2"
              >
                First Name *
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#080844]"
                  size={20}
                />
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your first name"
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-white border border-[#080844] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#080844] transition"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold mb-2"
              >
                Last Name *
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#080844]"
                  size={20}
                />
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your last name"
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-white border border-[#080844] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#080844] transition"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#080844]"
                size={20}
              />
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email address"
                className="w-full pl-11 pr-4 py-3 rounded-lg bg-white border border-[#080844] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#080844] transition"
              />
            </div>
          </div>

          {/* Service Needed */}
          <div>
            <label
              htmlFor="serviceNeeded"
              className="block text-sm font-semibold mb-2"
            >
              Service Needed *
            </label>
            <div className="relative">
              <select
                id="serviceNeeded"
                name="serviceNeeded"
                value={formData.serviceNeeded}
                onChange={handleInputChange}
                required
                className="w-full appearance-none pl-4 pr-10 py-3 rounded-lg bg-white border border-[#080844] text-[#080844] focus:outline-none focus:ring-2 focus:ring-[#080844] transition"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>AI Content</option>
                <option>Professional Media Production</option>
                <option>Interactive Company Profile</option>
                <option>AI Powered Training Content</option>
                <option>AI Automation System</option>
                <option>Company Portal</option>
                <option>Social Media Management</option>
                <option>Interactive Avatar</option>
                <option>360 AI Tour</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#080844]"
                size={20}
              />
            </div>
          </div>

          {/* Additional Comments */}
          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-semibold mb-2"
            >
              Additional Comments (Optional)
            </label>
            <div className="relative">
              <MessageSquare
                className="absolute left-3 top-3 text-[#080844]"
                size={20}
              />
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                rows={4}
                placeholder="Tell us more about your project or requirements..."
                className="w-full pl-11 pr-4 py-3 rounded-lg bg-white border border-[#080844] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#080844] transition resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px #080844",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 rounded-lg font-bold transition"
            style={{ backgroundColor: "#080844", color: "#EBEBDF" }}
          >
            <div className="flex items-center justify-center space-x-2">
              <Send size={20} />
              <span>Send Message</span>
            </div>
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
