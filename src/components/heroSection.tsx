'use client';
import React, { useState } from 'react';

const HeroSection: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      id="section"
      className={`h-full bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] px-3 py-4 transition-all duration-300 sm:px-10 ${
        menuOpen ? 'overflow-hidden' : 'overflow-visible'
      }`}
    >
      {/* Main Content */}
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col items-center">
        <button
          type="button"
          className="mt-16 mb-6 flex items-center space-x-2 rounded-full border border-indigo-600 px-4 py-1.5 pr-1.5 text-xs text-indigo-600 transition hover:bg-indigo-50"
        >
          <span>Explore how we help grow brands.</span>
          <span className="flex size-6 items-center justify-center rounded-full bg-indigo-600 p-1">
            <svg
              width="14"
              height="11"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        <h1 className="max-w-2xl text-center text-3xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl">
          Preferred choice of leaders in <span className="text-indigo-600">every industry</span>
        </h1>

        <p className="mt-4 max-w-md text-center text-sm leading-relaxed text-gray-600 sm:text-base">
          Learn why professionals trust our solution to complete their customer journey.
        </p>

        <button
          type="button"
          className="mt-8 flex items-center space-x-2 rounded-full bg-indigo-600 px-6 py-2.5 pr-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          <span>Read Success Stories</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
              stroke="#fff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <img
          className="mt-16 h-72 w-full max-w-5xl rounded-[50px] rounded-b-none object-cover"
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1074&auto=format&fit=crop"
          alt="Hero banner"
        />
      </main>
    </section>
  );
};

export default HeroSection;
