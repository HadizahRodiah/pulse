import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-10">
      {/* Main Content Section */}
      <section className="flex flex-col md:flex-row justify-between items-start px-5 md:px-20 gap-10">
        {/* Branding and Sign-Up */}
        <div className="flex-1 flex flex-col items-start">
          <h1 className="text-5xl md:text-7xl text-green-800 font-bold">PULSE</h1>
          <button className="bg-green-600 text-black p-3 mt-5 w-full md:w-64 text-sm font-semibold">
            Sign Up for a Free 30-Day Trial
          </button>
        </div>

        {/* Links Section */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <p className="text-white mb-3 font-bold">Product</p>
            <ul className="space-y-2">
              <li>Features</li>
              <li>Pricing</li>
              <li>Sign Up</li>
            </ul>
          </div>
          <div>
            <p className="text-white mb-3 font-bold">Company</p>
            <ul className="space-y-2">
              <li>Customer Stories</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="text-white mb-3 font-bold">Resources</p>
            <ul className="space-y-2">
              <li>Support</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-5 md:px-20 mt-10">
        {/* Terms and Policies */}
        <p className="text-center md:text-left text-sm mb-5 md:mb-0">
          ©2019 pulseapp.com, Inc. All Rights Reserved |{' '}
          <a href="#" className="underline">
            Terms of Use
          </a>{' '}
          |{' '}
          <a href="#" className="underline">
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="#" className="underline">
            EU Policy
          </a>
        </p>

        {/* Contact Us Button */}
        <button className="font-bold text-white bg-green-600 px-4 py-2 text-sm border-2 border-white">
          CONTACT US
        </button>
      </section>
    </footer>
  );
};

export default Footer;
