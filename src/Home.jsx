import React from 'react';

const Home = () => {
  return (
    <div className="bg-green-200">
      <div className="mx-5 md:mx-20 pt-20">
        {/* Hero Section */}
        <div className="text-center px-4 md:px-10 mx-auto justify-center">
          <h1 className="text-black text-2xl md:text-5xl font-bold pt-10 md:pt-20">
            Try Pulse free for 30 days
          </h1>
          <p className="mt-3 text-sm md:text-lg">
            See why Pulse is the best way to monitor your cash flow. Sign up for
            any plan and try Pulse free for 30 days.
          </p>
        </div>

        {/* Features Section */}
        <div className="flex flex-col md:flex-row justify-center gap-6 my-10">
          {/* Pulse Basics */}
          <div className="md:mt-10 text-sm md:text-base w-full md:w-96">
            <h1 className="text-green-700 font-bold text-lg md:text-xl my-3 mt-5">
              These are what we call the Pulse Basics. They’re what every
              customer gets.
            </h1>
            <div className="text-gray-600 text-left px-5 md:px-10">
              <ul>
                <li>Manage cash flow on a daily, weekly, monthly, or yearly basis</li>
                <li>Forecast growth with recurring income or expenses</li>
                <li>Works with any currency</li>
                <li>Categorize transactions and run helpful reports</li>
                <li>Toggle entries and accounts to game out different scenarios</li>
              </ul>
            </div>
            <p className="mt-2 text-gray-600">
              Just need the Pulse Basics?{' '}
              <a href="#" className="underline text-green-600">
                Get them now
              </a>{' '}
              for $29 per month.
            </p>
          </div>

          {/* Recommended Plan */}
          <div className="bg-white border-green-400 border-2 rounded-lg w-full md:w-96">
            <h1 className="font-bold bg-green-800 rounded-t-lg text-white text-sm md:text-xl py-2 text-center">
              RECOMMENDED
            </h1>
            <div className="text-center px-5">
              <h1 className="font-bold text-green-800 text-xl md:text-2xl mt-5">
                Small Business Plan
              </h1>
              <p className="font-light text-gray-600 text-lg md:text-2xl mt-3 mb-4">
                $59 per month
              </p>
              <button className="bg-green-500 px-4 py-2 text-black font-bold mb-4">
                Sign Up Now
              </button>
              <p className="font-bold text-sm md:text-lg mt-3 mb-2">GET IT ALL, PLUS:</p>
            </div>
            <div className="text-left px-5 md:px-10 mb-5">
              <ul>
                <li>Manage cash flow across multiple financial accounts</li>
                <li>Invite your investors, bookkeeper, or management team</li>
                <li>Integrate with QuickBooks Online</li>
                <li>Track your actual and projected cash flow</li>
              </ul>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="w-full md:w-96">
            <h1 className="bg-gray-300 text-center text-sm md:text-lg px-4 py-2 text-gray-600 rounded-t-lg">
              Complex business with multiple financial accounts or currencies?
            </h1>
            <div className="bg-white border-2 border-gray-300 rounded-b-lg">
              <div className="text-center px-5 pt-3">
                <h1 className="font-bold text-2xl md:text-3xl">Unlock Extra Features</h1>
                <p className="text-gray-600 font-light text-lg md:text-2xl mt-2">
                  $89 per month
                </p>
                <button className="bg-green-500 text-black px-4 py-2 mt-4 font-bold">
                  Try Premium
                </button>
                <p className="font-bold text-sm md:text-lg mt-4">GET IT ALL, PLUS:</p>
              </div>
              <div className="text-left px-5 md:px-10 pb-6 mb-5">
                <ul>
                  <li>Manage cash flow across unlimited financial accounts</li>
                  <li>Localized cash flow reporting and projections</li>
                  <li>Attach invoices or contracts for accountability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="text-center px-4 md:px-10 py-10">
          <h1 className="text-sm md:text-2xl font-light mt-5">
            "Pulse is worth every penny because it empowers business owners with critical financial insight and knowledge."
          </h1>
          <p className="text-sm text-green-600 font-bold mt-3">SUBVERT MARKETING, INC.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
