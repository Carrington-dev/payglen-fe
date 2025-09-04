"use client";

import React, { useState } from 'react';
import { ArrowRight, Shield, Clock, Globe, Star, Menu, X, Send, Users, Award, CheckCircle, Heart, Target, Eye, Zap, Building, MapPin, Phone, Mail } from 'lucide-react';

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Connecting families</span>
              <span className="block text-blue-600">across the globe</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Since 2015, we've been making it easier for people to send money to their loved ones around the world. Our mission is simple: fast, secure, and affordable money transfers for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                MoneyFlow was founded in 2015 by a team of financial technology experts who experienced firsthand the frustration of expensive and slow international money transfers. We knew there had to be a better way.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                What started as a simple idea to help immigrant communities send money home has grown into a global platform serving millions of customers across six continents. Today, we process over $50 billion in transfers annually, connecting families and enabling dreams worldwide.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our commitment remains the same: to provide the fastest, most secure, and most affordable way to send money internationally, while delivering exceptional customer service every step of the way.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-white">
                  <Building className="w-24 h-24 mx-auto mb-4 opacity-80" />
                  <p className="text-xl font-semibold">Founded in 2015</p>
                  <p className="text-lg opacity-90">Growing stronger every year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Mission, Vision & Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To democratize international money transfers by making them fast, secure, and affordable for everyone, regardless of their location or financial status.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                A world where distance doesn't matter when it comes to supporting family and friends. Where anyone can send money anywhere, anytime, instantly.
              </p>
            </div>
            
            {/* Values */}
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Trust, transparency, and customer-first approach guide everything we do. We believe in empowering communities through reliable financial services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              MoneyFlow by the Numbers
            </h2>
            <p className="mt-4 text-xl text-blue-200">
              Our impact across the globe continues to grow
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-white mb-2">5M+</div>
              <div className="text-blue-200">Active Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-white mb-2">200+</div>
              <div className="text-blue-200">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-white mb-2">$50B+</div>
              <div className="text-blue-200">Money Transferred</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-white mb-2">99.9%</div>
              <div className="text-blue-200">Uptime Reliability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Leadership Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Experienced leaders driving innovation in financial technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-white opacity-80" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Sarah Mitchell</h3>
              <p className="text-blue-600 font-medium">Chief Executive Officer</p>
              <p className="mt-2 text-sm text-gray-600">
                Former VP at Goldman Sachs with 15+ years in financial services and fintech innovation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-16 h-16 text-white opacity-80" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">David Chen</h3>
              <p className="text-blue-600 font-medium">Chief Technology Officer</p>
              <p className="mt-2 text-sm text-gray-600">
                Former Senior Engineer at Google, specializing in secure payment systems and blockchain technology.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-16 h-16 text-white opacity-80" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Maria Rodriguez</h3>
              <p className="text-blue-600 font-medium">Chief Operating Officer</p>
              <p className="mt-2 text-sm text-gray-600">
                International business expert with deep experience in cross-border payments and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Awards & Recognition
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Industry recognition for our innovation and customer service
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Best Fintech App 2024</h3>
              <p className="text-sm text-gray-600">Financial Times Innovation Awards</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Top Customer Service</h3>
              <p className="text-sm text-gray-600">Global Finance Excellence Awards</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Security Excellence</h3>
              <p className="text-sm text-gray-600">Cybersecurity Leadership Awards</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <Zap className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Fastest Growing Fintech</h3>
              <p className="text-sm text-gray-600">TechCrunch Startup Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance and Security */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Security & Compliance
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Your money and data are protected by industry-leading security measures
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Regulatory Compliance</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Licensed Money Service Business (MSB)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">PCI DSS Level 1 Certified</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">SOC 2 Type II Compliant</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">GDPR Compliant</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Measures</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">256-bit SSL Encryption</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Multi-factor Authentication</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">24/7 Fraud Monitoring</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Segregated Customer Funds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Global Offices
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Serving customers from offices around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">London, UK</h3>
              </div>
              <p className="text-gray-600 mb-2">Global Headquarters</p>
              <p className="text-sm text-gray-500 mb-4">25 Finsbury Square, London EC2A 1DX</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+44 20 7946 0958</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>london@moneyflow.com</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">New York, USA</h3>
              </div>
              <p className="text-gray-600 mb-2">Americas Operations</p>
              <p className="text-sm text-gray-500 mb-4">350 5th Avenue, New York, NY 10118</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>newyork@moneyflow.com</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Singapore</h3>
              </div>
              <p className="text-gray-600 mb-2">Asia-Pacific Hub</p>
              <p className="text-sm text-gray-500 mb-4">1 Raffles Place, Singapore 048616</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+65 6123 4567</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>singapore@moneyflow.com</span>
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
            <span className="block">Join millions who trust MoneyFlow</span>
            <span className="block text-blue-200">Start sending money today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50">
                Get Started
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
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">About Us</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Careers</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Press</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-white">Contact</a></li>
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