
import React, { useState } from 'react';
import { Search, Settings, Heart, Bell, ChevronDown, Filter, X } from 'lucide-react';


export default function Test() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [favorites, setFavorites] = useState(new Set());

    const carTypes = [
        { name: 'Sport', count: 10, checked: true },
        { name: 'SUV', count: 12, checked: true },
        { name: 'MPV', count: 16, checked: false },
        { name: 'Sedan', count: 20, checked: false },
        { name: 'Coupe', count: 14, checked: false },
        { name: 'Hatchback', count: 14, checked: false },
    ];

    const capacityTypes = [
        { name: '2 Person', count: 10, checked: true },
        { name: '4 Person', count: 14, checked: false },
        { name: '6 Person', count: 12, checked: false },
        { name: '8 or More', count: 16, checked: true },
    ];
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-blue-600">MORENT</h1>

                    <div className="flex-1 max-w-xl mx-8 hidden md:block">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search something here"
                                className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-200"
                            />
                            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Mobile Filter Toggle Button */}
                        <button
                            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <Filter size={20} />
                        </button>
                        <button className="hidden md:block p-2 text-gray-600 hover:text-gray-900">
                            <Settings size={20} />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-gray-900">
                            <Bell size={20} />
                        </button>
                        <img
                            src="/api/placeholder/32/32"
                            alt="Profile"
                            className="w-8 h-8 rounded-full"
                        />
                    </div>
                </div>

                {/* Mobile Search */}
                <div className="md:hidden px-4 pb-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search something here"
                            className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-200"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex gap-8">
                    {/* Mobile Sidebar Overlay */}
                    {isSidebarOpen && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                            onClick={() => setIsSidebarOpen(false)}
                        />
                    )}

                    {/* Sidebar */}
                    <div className={`
            fixed md:relative inset-y-0 left-0 z-50 w-64 bg-white transform 
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:transform-none md:translate-x-0 transition-transform duration-200 ease-in-out
            overflow-y-auto
          `}>
                        <div className="p-6">
                            {/* Mobile Close Button */}
                            <div className="flex justify-between items-center mb-6 md:hidden">
                                <h2 className="text-xl font-bold">Filters</h2>
                                <button
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="p-2 text-gray-600 hover:text-gray-900"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-lg font-semibold mb-4">TYPE</h3>
                                {carTypes.map((type) => (
                                    <label key={type.name} className="flex items-center mb-3">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600"
                                            defaultChecked={type.checked}
                                        />
                                        <span className="ml-2 flex-1">{type.name}</span>
                                        <span className="text-gray-400">({type.count})</span>
                                    </label>
                                ))}
                            </div>

                            <div className="mb-8">
                                <h3 className="text-lg font-semibold mb-4">CAPACITY</h3>
                                {capacityTypes.map((type) => (
                                    <label key={type.name} className="flex items-center mb-3">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600"
                                            defaultChecked={type.checked}
                                        />
                                        <span className="ml-2 flex-1">{type.name}</span>
                                        <span className="text-gray-400">({type.count})</span>
                                    </label>
                                ))}
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4">PRICE</h3>
                                <input
                                    type="range"
                                    className="w-full"
                                    min="0"
                                    max="100"
                                    defaultValue="100"
                                />
                                <p className="mt-2">Max. $100.00</p>
                            </div>

                            {/* Mobile Apply Filters Button */}
                            <button
                                className="w-full mt-6 py-2 bg-blue-600 text-white rounded-lg md:hidden"
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            {/* Keep the rest of the main content the same as before */}
                            {/* ... */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
