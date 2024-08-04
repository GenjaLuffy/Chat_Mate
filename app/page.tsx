import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';

const featuresData = [
  {
    title: "User-Friendly Interface",
    description: "An intuitive and straightforward design that makes navigation easy and ensures accessibility for all users.",
  },
  {
    title: "Effortless Image Sharing",
    description: "A quick and high-quality image sharing process that supports various media formats and enhances communication with multimedia content.",
  },
  {
    title: "Reliable Performance",
    description: "A fast and intuitive platform that ensures smooth messaging experiences, real-time interactions, and overall efficient performance.",
  },
  {
    title: "Username-Based Communication",
    description: "A feature that supports communication based solely on usernames, eliminating the need to share phone numbers and enhancing user privacy.",
  },
];

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="relative z-20">
          <Navbar />
        </div>

        <div className="relative flex items-center h-screen bg-transparent" >
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover z-0 "
          >
            <source src="Video/landingpage1.mp4" type="video/mp4" />
          </video>

          <div className="relative w-full px-4 z-10">
            <div className="ms-44">
              <p className="text-left mb-4 text-white">
                Welcome to ChatMate!!!
                <br />A sleek and modern chat application for your team.
              </p>
              <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-blue-200 hover:text-black">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-300 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="flex flex-wrap justify-center">
          {featuresData.map((feature, index) => (
            <div className="p-6 m-4 rounded-lg shadow-lg max-w-xs text-center" key={index}>
              <div className="mb-4">
                <img src="/gallery.png" alt="Feature Icon" className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
