"use client";

import React, { useState, useEffect } from 'react';
import { Send, Menu, X, Calculator, TrendingUp, Clock, DollarSign, Info, Search, Filter, ArrowRight, RefreshCw, Star, AlertTriangle } from 'lucide-react';

export default function RatesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sendAmount, setSendAmount] = useState('100');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('GBP');
  const [receiveAmount, setReceiveAmount] = useState('82.35');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock exchange rates data
  const exchangeRates = [
    { 
      from: 'USD', 
      to: 'GBP', 
      rate: 0.8235, 
      fee: 2.99, 
      total: 102.99,
      receive: 82.35,
      flag: '🇬🇧',
      country: 'United Kingdom',
      change: '+0.12%',
      trending: 'up'
    },
    { 
      from: 'USD', 
      to: 'EUR', 
      rate: 0.9245, 
      fee: 3.50, 
      total: 103.50,
      receive: 92.45,
      flag: '🇪🇺',
      country: 'European Union',
      change: '-0.08%',
      trending: 'down'
    },
    { 
      from: 'USD', 
      to: 'ZAR', 
      rate: 18.75, 
      fee: 1.99, 
      total: 101.99,
      receive: 1875.00,
      flag: '🇿🇦',
      country: 'South Africa',
      change: '+0.45%',
      trending: 'up'
    },
    { 
      from: 'USD', 
      to: 'NGN', 
      rate: 1580.50, 
      fee: 2.50, 
      total: 102.50,
      receive: 158050.00,
      flag: '🇳🇬',
      country: 'Nigeria',
      change: '+1.23%',
      trending: 'up'
    },
    { 
      from: 'USD', 
      to: 'KES', 
      rate: 158.25, 
      fee: 2.00, 
      total: 102.00,
      receive: 15825.00,
      flag: '🇰🇪',
      country: 'Kenya',
      change: '-0.34%',
      trending: 'down'
    },
    { 
      from: 'USD', 
      to: 'GHS', 
      rate: 12.45, 
      fee: 2.25, 
      total: 102.25,
      receive: 1245.00,
      flag: '🇬🇭',
      country: 'Ghana',
      change: '+0.67%',
      trending: 'up'
    },
    { 
      from: 'USD', 
      to: 'INR', 
      rate: 83.25, 
      fee: 1.99, 
      total: 101.99,
      receive: 8325.00,
      flag: '🇮🇳',
      country: 'India',
      change: '+0.12%',
      trending: 'up'
    },
    { 
      from: 'USD', 
      to: 'PHP', 
      rate: 56.75, 
      fee: 2.99, 
      total: 102.99,
      receive: 5675.00,
      flag: '🇵🇭',
      country: 'Philippines',
      change: '-0.23%',
      trending: 'down'
    }
  ];

  const popularRoutes = [
    { from: 'USD', to: 'GBP', route: 'US Dollar → British Pound' },
    { from: 'USD', to: 'EUR', route: 'US Dollar → Euro' },
    { from: 'GBP', to: 'USD', route: 'British Pound → US Dollar' },
    { from: 'USD', to: 'ZAR', route: 'US Dollar → South African Rand' },
    { from: 'USD', to: 'NGN', route: 'US Dollar → Nigerian Naira' },
    { from: 'EUR', to: 'GBP', route: 'Euro → British Pound' }
  ];

  const countries = [
    { value: 'all', label: 'All Countries' },
    { value: 'africa', label: 'Africa' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'americas', label: 'Americas' }
  ];

  useEffect(() => {
    // Simulate rate calculation
    const rate = exchangeRates.find(r => r.from === fromCurrency && r.to === toCurrency);
    if (rate && sendAmount) {
      const amount = parseFloat(sendAmount);
      const received = (amount * rate.rate).toFixed(2);
      setReceiveAmount(received);
    }
  }, [sendAmount, fromCurrency, toCurrency]);

  const handleRefreshRates = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  const filteredRates = exchangeRates.filter(rate => {
    const matchesSearch = rate.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         rate.to.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCountry === 'all') return matchesSearch;
    
    const countryGroups = {
      africa: ['ZAR', 'NGN', 'KES', 'GHS'],
      asia: ['INR', 'PHP'],
      europe: ['GBP', 'EUR'],
      americas: ['USD']
    };
    
    return matchesSearch && countryGroups[selectedCountry]?.includes(rate.to);
  });

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
              <span className="block">Live exchange rates</span>
              <span className="block text-blue-600">and transparent fees</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Real-time rates updated every minute. No hidden fees, no surprises.
            </p>
            <div className="mt-6 flex items-center justify-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
              <button 
                onClick={handleRefreshRates}
                className="ml-2 text-blue-600 hover:text-blue-500"
                disabled={isRefreshing}
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Calculator */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg border p-6">
            <div className="flex items-center mb-6">
              <Calculator className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Rate Calculator</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-end">
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">You send</label>
                <div className="flex">
                  <select 
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                  </select>
                  <input
                    type="number"
                    value={sendAmount}
                    onChange={(e) => setSendAmount(e.target.value)}
                    className="flex-1 rounded-r-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Recipient gets</label>
                <div className="flex">
                  <select 
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                    <option value="ZAR">ZAR</option>
                    <option value="NGN">NGN</option>
                    <option value="INR">INR</option>
                  </select>
                  <input
                    type="text"
                    value={receiveAmount}
                    readOnly
                    className="flex-1 rounded-r-lg border border-gray-300 px-3 py-2 text-sm bg-gray-50"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Send Now
                </button>
              </div>
            </div>
            
            {/* Rate breakdown */}
            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Exchange rate:</span>
                  <div className="font-semibold">1 {fromCurrency} = {exchangeRates.find(r => r.from === fromCurrency && r.to === toCurrency)?.rate || 'N/A'} {toCurrency}</div>
                </div>
                <div>
                  <span className="text-gray-600">Transfer fee:</span>
                  <div className="font-semibold">${exchangeRates.find(r => r.from === fromCurrency && r.to === toCurrency)?.fee || 'N/A'}</div>
                </div>
                <div>
                  <span className="text-gray-600">Total to pay:</span>
                  <div className="font-semibold">${exchangeRates.find(r => r.from === fromCurrency && r.to === toCurrency)?.total || 'N/A'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Currency Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularRoutes.map((route, index) => (
              <div key={index} className="bg-white rounded-lg border p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{route.route}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      1 {route.from} = {exchangeRates.find(r => r.from === route.from && r.to === route.to)?.rate || 'N/A'} {route.to}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Rates Table */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">All Exchange Rates</h2>
              <p className="text-gray-600">Based on sending $100 USD</p>
            </div>
            
            <div className="mt-4 lg:mt-0 flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search countries or currencies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {countries.map(country => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Country
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Exchange Rate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fee
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Recipient Gets
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      24h Change
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredRates.map((rate, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{rate.flag}</span>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{rate.country}</div>
                            <div className="text-sm text-gray-500">{rate.to}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          1 {rate.from} = {rate.rate} {rate.to}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">${rate.fee}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {rate.receive.toLocaleString()} {rate.to}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`flex items-center text-sm ${
                          rate.trending === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          <TrendingUp className={`w-4 h-4 mr-1 ${
                            rate.trending === 'down' ? 'transform rotate-180' : ''
                          }`} />
                          {rate.change}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-500">
                          Send Money
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Transparent Fee Structure</h2>
            <p className="text-lg text-gray-600 mt-2">No hidden costs, ever. Here's exactly what you pay.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="text-center">
                <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Low Fixed Fees</h3>
                <p className="text-gray-600">
                  Starting from just $1.99 per transfer, regardless of the amount you send.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real Exchange Rates</h3>
                <p className="text-gray-600">
                  We use the mid-market rate with a small, transparent margin - no markup.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="text-center">
                <Info className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Hidden Costs</h3>
                <p className="text-gray-600">
                  What you see is what you pay. No surprise fees or hidden charges.
                </p>
              </div>
            </div>
          </div>

          {/* Fee breakdown table */}
          <div className="mt-12 bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Fee Breakdown by Transfer Amount</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Transfer Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Our Fee</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Cost</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fee Percentage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">$1 - $500</td>
                    <td className="px-6 py-4 text-sm text-gray-900">$1.99</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Amount + $1.99</td>
                    <td className="px-6 py-4 text-sm text-green-600">0.4% - 1.99%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">$500 - $2,000</td>
                    <td className="px-6 py-4 text-sm text-gray-900">$2.99</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Amount + $2.99</td>
                    <td className="px-6 py-4 text-sm text-green-600">0.15% - 0.6%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">$2,000+</td>
                    <td className="px-6 py-4 text-sm text-gray-900">$4.99</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Amount + $4.99</td>
                    <td className="px-6 py-4 text-sm text-green-600">{'< 0.25%'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Alert */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Never Miss a Good Rate</h2>
          <p className="text-xl text-blue-100 mb-8">
            Set up rate alerts and we'll notify you when your target rate is available.
          </p>
          <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
            <div className="space-y-4">
              <div className="flex space-x-2">
                <select className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
                  <option>USD</option>
                  <option>GBP</option>
                  <option>EUR</option>
                </select>
                <span className="self-center text-gray-500">to</span>
                <select className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
                  <option>GBP</option>
                  <option>EUR</option>
                  <option>ZAR</option>
                </select>
              </div>
              <input 
                type="number" 
                placeholder="Target rate (e.g., 0.85)"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <input 
                type="email" 
                placeholder="Your email address"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                Set Rate Alert
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}