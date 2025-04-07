import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] mt-[80px] w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4 px-4 sm:px-6">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        className="w-32 h-32 relative"
      >
        <Image 
          src={assets.profile_img} 
          alt="Profile" 
          className="rounded-full w-full h-full object-cover"
          priority
        />
      </motion.div>
      
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Panayappan Lakshmanan{" "}
        <Image src={assets.hand_icon} alt="Wave" className="w-6 h-6" />
      </motion.h3>
      
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl lg:text-5xl font-Ovo leading-tight"
      >
        Tech Enthusiast | Full Stack Innovator | Solution-Driven Engineer 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto font-Ovo text-lg sm:text-xl leading-relaxed"
      >
        I am a Senior Software Engineer from India with 4 years of experience in
        developing full stack web and mobile applications using the MERN stack,
        Next.js, and React Native.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent hover:bg-[#EB2F64] hover:border-transparent transition-all"
        >
          contact me{" "}
          <Image src={assets.right_arrow_white} alt="Arrow" className="w-4 h-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          href="/Panayappan_Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black hover:bg-[#EB2F64] hover:text-white hover:border-transparent transition-all"
        >
          my resume <Image src={assets.download_icon} alt="Download" className="w-4 h-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
