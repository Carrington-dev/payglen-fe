"use client";

import React, { useState } from 'react';
import { ArrowRight, Shield, Clock, Globe, Star, Menu, X, Send, Users, Award, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Send money</span>{' '}
                  <span className="block text-blue-600 xl:inline">worldwide instantly</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Fast, secure, and affordable money transfers to over 200 countries. Your family receives money in minutes, not days.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                      Send Money Now
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                      Track Transfer
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-gradient-to-br from-blue-400 to-blue-600 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
            <div className="text-white text-center">
              <Globe className="w-24 h-24 mx-auto mb-4 opacity-80" />
              <p className="text-xl font-semibold opacity-90">Trusted by millions worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Fast, Secure & Affordable
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We make sending money simple and secure with competitive rates and lightning-fast transfers.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">Minutes Not Days</h3>
                <p className="mt-2 text-base text-gray-500">
                  Money reaches your recipient in minutes with our instant transfer network across the globe.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">Bank-Level Security</h3>
                <p className="mt-2 text-base text-gray-500">
                  Your money and data are protected with 256-bit encryption and regulatory compliance.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">200+ Countries</h3>
                <p className="mt-2 text-base text-gray-500">
                  Send money to family and friends in over 200 countries and territories worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Trusted by millions worldwide
            </h2>
            <p className="mt-3 text-xl text-blue-200 sm:mt-4">
              Join over 5 million customers who trust us with their money transfers
            </p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
                Happy Customers
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                5M+
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
                Countries Served
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                200+
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
                Money Transferred
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                $50B+
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Send money in 3 simple steps
            </p>
          </div>
          
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Enter Details</h3>
                <p className="mt-2 text-base text-gray-500">
                  Enter your recipient's information and choose how they'll receive the money.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Pay Securely</h3>
                <p className="mt-2 text-base text-gray-500">
                  Pay with your bank account, debit card, or credit card. Your payment is protected.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Money Delivered</h3>
                <p className="mt-2 text-base text-gray-500">
                  Your recipient gets the money in minutes. Track your transfer every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What our customers say
            </h2>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Fastest money transfer service I've ever used. My family received the money within 2 minutes!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Great rates and excellent customer service. I've been using MoneyFlow for over 2 years now."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Michael Chen</p>
                  <p className="text-sm text-gray-500">London, UK</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Reliable and secure. I trust MoneyFlow to send money to my family back home every month."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Maria Rodriguez</p>
                  <p className="text-sm text-gray-500">New York, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to send money?</span>
            <span className="block text-blue-200">Start your transfer today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50">
                Send Money Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold text-white">MoneyFlow</span>
              </div>
              <p className="text-gray-400 text-base">
                Making money transfers fast, secure, and affordable for millions of customers worldwide.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Services</h3>
                  <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Send Money</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Track Transfer</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Exchange Rates</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Locations</a></li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
                  <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Help Center</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Contact Us</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Security</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2025 MoneyFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}