import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://i.pinimg.com/474x/76/38/f1/7638f13a3df3a4cf9e317312165b9b60.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-red-800 font-bold md:text-4xl">
                        Dreaming of your next getaway?
                        </h2>
                        <p className="mt-6 text-black">
                        <span className="font-extrabold">VACAY</span> an app that goes beyond just booking flights and hotels.  This vacation app would be your all-in-one travel companion, helping you craft the perfect itinerary based on your interests and budget. Discover hidden gems recommended by locals and fellow travelers, not just the usual tourist traps.
                        </p>
                        <p className="mt-4 text-black">
                        Stay organized with packing list suggestions, countdown timers that track flights and excursions, and a budget tracker that keeps you on course.  This app will  transform your trip from stressful planning to an unforgettable adventure!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}