import React from 'react';

const Faq = () => {
  return (
    <div className="py-10 px-5 md:px-20 bg-gray-100">
      <h1 className="font-bold text-3xl md:text-5xl text-center mb-10">FAQ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        <div className="flex flex-col">
          <h2 className="font-bold text-lg md:text-xl text-black mb-2">What is a financial account?</h2>
          <p className="text-sm md:text-base">
            Financial accounts are a grouping of income and expense items that can be used for tracking or reporting purposes.
          </p>
          <p className="text-sm md:text-base mt-2">
            They're designed to be flexible and can be used to differentiate between bank accounts, companies, individuals, or between personal and business entries.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-lg md:text-xl text-black mb-2">How does Pulse manage cash flow?</h2>
          <p className="text-sm md:text-base">
            Pulse allows you to monitor cash flow on a daily, weekly, monthly, or yearly basis, providing detailed insights for effective financial planning.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-lg md:text-xl text-black mb-2">Can I use Pulse with multiple currencies?</h2>
          <p className="text-sm md:text-base">
            Yes, Pulse supports multiple currencies, allowing you to localize cash flow reporting and projections for global operations.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-lg md:text-xl text-black mb-2">What happens after the free trial?</h2>
          <p className="text-sm md:text-base">
            After the 30-day free trial, you can choose a subscription plan that best suits your needs. All data will remain intact if you decide to continue.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-lg md:text-xl text-black mb-2">Is there a refund policy?</h2>
          <p className="text-sm md:text-base">
            Yes, we offer a 30-day money-back guarantee if you are not satisfied with our service during your subscription.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-lg md:text-xl text-black mb-2">How do I contact support?</h2>
          <p className="text-sm md:text-base">
            You can reach our support team through email or the live chat feature on our website. We're here to help 24/7.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
