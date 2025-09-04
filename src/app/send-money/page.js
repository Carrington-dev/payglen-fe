"use client";

import React, { useState, useEffect } from 'react';
import { Send, Menu, X, Calculator, User, CreditCard, Building2, Smartphone, MapPin, Clock, Shield, Check, ChevronRight, ChevronLeft, Plus, Edit2, Trash2, AlertCircle, Info, Eye, EyeOff } from 'lucide-react';

export default function SendMoneyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [sendAmount, setSendAmount] = useState('500');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('GBP');
  const [receiveAmount, setReceiveAmount] = useState('410.50');
  const [deliveryMethod, setDeliveryMethod] = useState('bank');
  const [recipientType, setRecipientType] = useState('existing'); // 'existing' or 'new'
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [showAddCard, setShowAddCard] = useState(false);
  const [transferPurpose, setTransferPurpose] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock data
  const savedRecipients = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah@email.com',
      country: 'United Kingdom',
      flag: '🇬🇧',
      accountType: 'Bank Account',
      lastUsed: '2 days ago'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael@email.com',
      country: 'Philippines',
      flag: '🇵🇭',
      accountType: 'Mobile Wallet',
      lastUsed: '1 week ago'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      email: 'maria@email.com',
      country: 'Nigeria',
      flag: '🇳🇬',
      accountType: 'Cash Pickup',
      lastUsed: '2 weeks ago'
    }
  ];

  const deliveryMethods = [
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: Building2,
      time: '1-3 business days',
      fee: 2.99,
      popular: true
    },
    {
      id: 'mobile',
      name: 'Mobile Money',
      icon: Smartphone,
      time: 'Within minutes',
      fee: 1.99,
      popular: false
    },
    {
      id: 'cash',
      name: 'Cash Pickup',
      icon: MapPin,
      time: 'Within minutes',
      fee: 3.99,
      popular: false
    }
  ];

  const paymentMethods = [
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: Building2,
      fee: 0,
      time: '1-2 business days'
    },
    {
      id: 'debit',
      name: 'Debit Card',
      icon: CreditCard,
      fee: 2.50,
      time: 'Instant'
    },
    {
      id: 'credit',
      name: 'Credit Card',
      icon: CreditCard,
      fee: 4.50,
      time: 'Instant'
    }
  ];

  const [newRecipient, setNewRecipient] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'United Kingdom',
    accountNumber: '',
    routingCode: '',
    bankName: '',
    address: ''
  });

  const steps = [
    { number: 1, name: 'Amount', completed: currentStep > 1 },
    { number: 2, name: 'Recipient', completed: currentStep > 2 },
    { number: 3, name: 'Payment', completed: currentStep > 3 },
    { number: 4, name: 'Review', completed: currentStep > 4 }
  ];

  // Calculate fees and totals
  const calculateTotal = () => {
    const amount = parseFloat(sendAmount) || 0;
    const deliveryFee = deliveryMethods.find(m => m.id === deliveryMethod)?.fee || 0;
    const paymentFee = paymentMethods.find(m => m.id === paymentMethod)?.fee || 0;
    return {
      amount,
      deliveryFee,
      paymentFee,
      total: amount + deliveryFee + paymentFee,
      rate: 0.821, // Mock exchange rate
      receiveAmount: amount * 0.821
    };
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSendTransfer = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentStep(5); // Success page
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">MoneyFlow</span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Send Money</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Rates</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Locations</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Help</a>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6 space-x-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <User className="w-4 h-4" />
                  <span>John Doe</span>
                </div>
                <button className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Sign Out</button>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex items-center">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                    step.completed 
                      ? 'bg-blue-600 border-blue-600 text-white' 
                      : currentStep === step.number
                        ? 'border-blue-600 text-blue-600'
                        : 'border-gray-300 text-gray-400'
                  }`}>
                    {step.completed ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <span className="text-sm font-medium">{step.number}</span>
                    )}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    step.completed || currentStep === step.number
                      ? 'text-gray-900'
                      : 'text-gray-400'
                  }`}>
                    {step.name}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block w-12 h-px ml-6 ${
                    step.completed ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border">
              {/* Step 1: Amount */}
              {currentStep === 1 && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">How much do you want to send?</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">You send</label>
                        <div className="flex">
                          <select 
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                            className="rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                            <option value="EUR">EUR</option>
                          </select>
                          <input
                            type="number"
                            value={sendAmount}
                            onChange={(e) => setSendAmount(e.target.value)}
                            className="flex-1 rounded-r-lg border border-gray-300 px-3 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter amount"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Recipient gets</label>
                        <div className="flex">
                          <select 
                            value={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                            className="rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="GBP">GBP</option>
                            <option value="EUR">EUR</option>
                            <option value="ZAR">ZAR</option>
                            <option value="NGN">NGN</option>
                          </select>
                          <input
                            type="text"
                            value={calculateTotal().receiveAmount.toFixed(2)}
                            readOnly
                            className="flex-1 rounded-r-lg border border-gray-300 px-3 py-3 text-lg font-semibold bg-gray-50"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Delivery Method */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">How should they receive it?</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {deliveryMethods.map((method) => (
                          <div key={method.id} className="relative">
                            <input
                              type="radio"
                              name="delivery"
                              value={method.id}
                              checked={deliveryMethod === method.id}
                              onChange={(e) => setDeliveryMethod(e.target.value)}
                              className="sr-only"
                            />
                            <label className={`flex flex-col p-4 border-2 rounded-lg cursor-pointer hover:border-blue-300 ${
                              deliveryMethod === method.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200'
                            }`}>
                              {method.popular && (
                                <span className="absolute -top-2 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                  Popular
                                </span>
                              )}
                              <method.icon className="w-6 h-6 text-blue-600 mb-2" />
                              <span className="font-medium text-gray-900">{method.name}</span>
                              <span className="text-sm text-gray-500">{method.time}</span>
                              <span className="text-sm text-green-600">+${method.fee}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={handleNext}
                        className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Continue
                        <ChevronRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Recipient */}
              {currentStep === 2 && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Who are you sending to?</h2>
                  
                  <div className="space-y-6">
                    {/* Recipient Type Selection */}
                    <div className="flex space-x-4 p-1 bg-gray-100 rounded-lg">
                      <button
                        onClick={() => setRecipientType('existing')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                          recipientType === 'existing'
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        Saved Recipients
                      </button>
                      <button
                        onClick={() => setRecipientType('new')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                          recipientType === 'new'
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        New Recipient
                      </button>
                    </div>

                    {/* Existing Recipients */}
                    {recipientType === 'existing' && (
                      <div className="space-y-3">
                        {savedRecipients.map((recipient) => (
                          <div key={recipient.id} className="relative">
                            <input
                              type="radio"
                              name="recipient"
                              value={recipient.id}
                              checked={selectedRecipient?.id === recipient.id}
                              onChange={() => setSelectedRecipient(recipient)}
                              className="sr-only"
                            />
                            <label className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer hover:border-blue-300 ${
                              selectedRecipient?.id === recipient.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200'
                            }`}>
                              <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                  <User className="w-6 h-6 text-gray-400" />
                                </div>
                                <div>
                                  <div className="flex items-center space-x-2">
                                    <span className="font-medium text-gray-900">{recipient.name}</span>
                                    <span className="text-lg">{recipient.flag}</span>
                                  </div>
                                  <div className="text-sm text-gray-500">{recipient.email}</div>
                                  <div className="text-sm text-gray-500">{recipient.accountType} • {recipient.country}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-gray-500">Last used {recipient.lastUsed}</div>
                                <div className="flex items-center space-x-2 mt-1">
                                  <button className="text-blue-600 hover:text-blue-500">
                                    <Edit2 className="w-4 h-4" />
                                  </button>
                                  <button className="text-red-600 hover:text-red-500">
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            </label>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* New Recipient Form */}
                    {recipientType === 'new' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                            <input
                              type="text"
                              value={newRecipient.firstName}
                              onChange={(e) => setNewRecipient({...newRecipient, firstName: e.target.value})}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter first name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                            <input
                              type="text"
                              value={newRecipient.lastName}
                              onChange={(e) => setNewRecipient({...newRecipient, lastName: e.target.value})}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter last name"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                              type="email"
                              value={newRecipient.email}
                              onChange={(e) => setNewRecipient({...newRecipient, email: e.target.value})}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter email address"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                              type="tel"
                              value={newRecipient.phone}
                              onChange={(e) => setNewRecipient({...newRecipient, phone: e.target.value})}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter phone number"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                          <select
                            value={newRecipient.country}
                            onChange={(e) => setNewRecipient({...newRecipient, country: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="United Kingdom">🇬🇧 United Kingdom</option>
                            <option value="Nigeria">🇳🇬 Nigeria</option>
                            <option value="South Africa">🇿🇦 South Africa</option>
                            <option value="Kenya">🇰🇪 Kenya</option>
                            <option value="Philippines">🇵🇭 Philippines</option>
                            <option value="India">🇮🇳 India</option>
                          </select>
                        </div>

                        {deliveryMethod === 'bank' && (
                          <>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
                              <input
                                type="text"
                                value={newRecipient.bankName}
                                onChange={(e) => setNewRecipient({...newRecipient, bankName: e.target.value})}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter bank name"
                              />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                                <input
                                  type="text"
                                  value={newRecipient.accountNumber}
                                  onChange={(e) => setNewRecipient({...newRecipient, accountNumber: e.target.value})}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  placeholder="Enter account number"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Sort Code / Routing</label>
                                <input
                                  type="text"
                                  value={newRecipient.routingCode}
                                  onChange={(e) => setNewRecipient({...newRecipient, routingCode: e.target.value})}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  placeholder="Enter sort code"
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    <div className="flex justify-between">
                      <button
                        onClick={handleBack}
                        className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <ChevronLeft className="mr-2 w-4 h-4" />
                        Back
                      </button>
                      <button
                        onClick={handleNext}
                        disabled={recipientType === 'existing' ? !selectedRecipient : !newRecipient.firstName}
                        className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Continue
                        <ChevronRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">How do you want to pay?</h2>
                  
                  <div className="space-y-6">
                    <div className="space-y-3">
                      {paymentMethods.map((method) => (
                        <div key={method.id} className="relative">
                          <input
                            type="radio"
                            name="payment"
                            value={method.id}
                            checked={paymentMethod === method.id}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="sr-only"
                          />
                          <label className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer hover:border-blue-300 ${
                            paymentMethod === method.id
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200'
                          }`}>
                            <div className="flex items-center space-x-4">
                              <method.icon className="w-6 h-6 text-blue-600" />
                              <div>
                                <div className="font-medium text-gray-900">{method.name}</div>
                                <div className="text-sm text-gray-500">{method.time}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium text-gray-900">
                                {method.fee === 0 ? 'Free' : `+$${method.fee}`}
                              </div>
                            </div>
                          </label>
                        </div>
                      ))}
                    </div>

                    {/* Transfer Purpose */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Purpose of transfer</label>
                      <select
                        value={transferPurpose}
                        onChange={(e) => setTransferPurpose(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select purpose</option>
                        <option value="family-support">Family Support</option>
                        <option value="education">Education</option>
                        <option value="medical">Medical Expenses</option>
                        <option value="business">Business</option>
                        <option value="property">Property Purchase</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={handleBack}
                        className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <ChevronLeft className="mr-2 w-4 h-4" />
                        Back
                      </button>
                      <button
                        onClick={handleNext}
                        disabled={!transferPurpose}
                        className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Continue
                        <ChevronRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Review */}
              {currentStep === 4 && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Review your transfer</h2>
                  
                  <div className="space-y-6">
                    {/* Transfer Details */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-medium text-gray-900 mb-3">Transfer Details</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">You send:</span>
                          <span className="font-medium">{fromCurrency} {sendAmount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Recipient gets:</span>
                          <span className="font-medium">{toCurrency} {calculateTotal().receiveAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Exchange rate:</span>
                          <span className="font-medium">1 {fromCurrency} = {calculateTotal().rate} {toCurrency}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery method:</span>
                          <span className="font-medium">{deliveryMethods.find(m => m.id === deliveryMethod)?.name}</span>
                        </div>
                      </div>
                    </div>

                    {/* Recipient Details */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-medium text-gray-900 mb-3">Recipient</h3>
                      {selectedRecipient ? (
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-gray-400" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{selectedRecipient.name}</div>
                            <div className="text-sm text-gray-500">{selectedRecipient.email}</div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-gray-400" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{newRecipient.firstName} {newRecipient.lastName}</div>
                            <div className="text-sm text-gray-500">{newRecipient.email}</div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Cost Breakdown */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-medium text-gray-900 mb-3">Cost Breakdown</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Transfer amount:</span>
                          <span>${calculateTotal().amount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery fee:</span>
                          <span>${calculateTotal().deliveryFee.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Payment fee:</span>
                          <span>${calculateTotal().paymentFee.toFixed(2)}</span>
                        </div>
                        <div className="border-t border-gray-200 pt-2 mt-2">
                          <div className="flex justify-between font-medium">
                            <span>Total to pay:</span>
                            <span>${calculateTotal().total.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Terms Agreement */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-blue-800">
                          <p className="mb-2">
                            By completing this transfer, you agree to our Terms of Service and confirm that:
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-xs">
                            <li>The recipient information is accurate</li>
                            <li>This transfer is for legitimate purposes</li>
                            <li>You authorize us to process this payment</li>
                            <li>Exchange rates are guaranteed for 30 minutes</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={handleBack}
                        className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <ChevronLeft className="mr-2 w-4 h-4" />
                        Back
                      </button>
                      <button
                        onClick={handleSendTransfer}
                        disabled={isProcessing}
                        className="flex items-center px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                      >
                        {isProcessing ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Shield className="mr-2 w-4 h-4" />
                            Send Money
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Success */}
              {currentStep === 5 && (
                <div className="p-6 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Transfer Sent!</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Your money is on its way to {selectedRecipient?.name || `${newRecipient.firstName} ${newRecipient.lastName}`}
                  </p>

                  <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                      <div>
                        <h3 className="font-medium text-gray-900 mb-3">Transfer Details</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Reference:</span>
                            <span className="font-mono font-medium">#MF{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Amount sent:</span>
                            <span className="font-medium">{fromCurrency} {sendAmount}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Amount received:</span>
                            <span className="font-medium">{toCurrency} {calculateTotal().receiveAmount.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-3">Expected Delivery</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Delivery time:</span>
                            <span className="font-medium">{deliveryMethods.find(m => m.id === deliveryMethod)?.time}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Status:</span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              Processing
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Track Transfer
                    </button>
                    <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      Send Another
                    </button>
                    <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      Download Receipt
                    </button>
                  </div>

                  <div className="mt-8 text-sm text-gray-500">
                    <p>We'll send you email and SMS updates about this transfer.</p>
                    <p className="mt-1">Need help? <a href="#" className="text-blue-600 hover:text-blue-500">Contact our support team</a></p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Transfer Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600">You send</div>
                    <div className="text-xl font-bold text-gray-900">{fromCurrency} {sendAmount}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">They receive</div>
                    <div className="text-xl font-bold text-gray-900">{toCurrency} {calculateTotal().receiveAmount.toFixed(2)}</div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Exchange rate:</span>
                    <span>1 {fromCurrency} = {calculateTotal().rate} {toCurrency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Transfer fee:</span>
                    <span>${calculateTotal().deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment fee:</span>
                    <span>${calculateTotal().paymentFee.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between font-medium">
                      <span>Total to pay:</span>
                      <span>${calculateTotal().total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {currentStep < 4 && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2 text-sm text-green-800">
                      <Clock className="w-4 h-4" />
                      <span>Rate guaranteed for 30 minutes</span>
                    </div>
                  </div>
                )}

                {currentStep >= 2 && (selectedRecipient || newRecipient.firstName) && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm">
                      <div className="font-medium text-gray-900 mb-1">Recipient</div>
                      <div className="text-gray-600">
                        {selectedRecipient ? selectedRecipient.name : `${newRecipient.firstName} ${newRecipient.lastName}`}
                      </div>
                      {currentStep >= 2 && (
                        <div className="text-gray-500 mt-1">
                          {deliveryMethods.find(m => m.id === deliveryMethod)?.name}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Security Badge */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Bank-level security</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Real-time tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      {currentStep < 5 && (
        <section className="bg-blue-50 border-t">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Need help with your transfer?</h3>
              <p className="text-gray-600 mb-4">Our support team is available 24/7 to assist you</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-white transition-colors">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Live Chat
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-white transition-colors">
                  <Send className="w-4 h-4 mr-2" />
                  Email Support
                </button>
                <a href="tel:+1-555-0123" className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-white transition-colors">
                  📞 Call +1 (555) 0123
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-white">MoneyFlow</span>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-400 text-sm">
            <p>&copy; 2025 MoneyFlow. All rights reserved. Licensed Money Service Business.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}