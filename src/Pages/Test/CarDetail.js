import React, { useState } from 'react';

import { Search, Settings, Heart, Bell, ChevronDown, Filter, X } from 'lucide-react';

export default function CarDetail() {
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

    const carSpecs = [
        { label: 'Type Car', value: 'Sport' },
        { label: 'Steering', value: 'Manual' },
        { label: 'Capacity', value: '2 Person' },
        { label: 'Gasoline', value: '70L' },
    ];

    const reviews = [
        {
            name: 'Alex Stanton',
            position: 'CEO at Bukalapak',
            date: '21 July 2022',
            rating: 4,
            comment: 'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
            avatar: '/api/placeholder/32/32'
        },
        {
            name: 'Skylar Dias',
            position: 'CEO at Amazon',
            date: '20 July 2022',
            rating: 4,
            comment: 'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
            avatar: '/api/placeholder/32/32'
        }
    ];
    return (
        <>

            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="max-w-10xl mx-auto px-4 py-4 flex items-center justify-between">
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

                <main className="max-w-10xl mx-auto px-4 py-8">
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

                                <div className="flex-1">
                                    <div className="bg-white rounded-lg shadow-sm p-6">
                                        {/* Car Preview */}
                                        <div className="bg-blue-600 rounded-lg p-8 text-white mb-6">
                                            <h2 className="text-2xl font-bold mb-2">
                                                Sports car with the best design and acceleration
                                            </h2>
                                            <p className="mb-6">
                                                Safety and comfort while driving a futuristic and elegant sports car
                                            </p>
                                            <img
                                                src="/api/placeholder/600/300"
                                                alt="Nissan GT-R"
                                                className="w-96 mx-auto"
                                            />
                                        </div>

                                        {/* Thumbnails */}
                                        <div className="flex gap-4 mb-6">
                                            <img
                                                src="/api/placeholder/120/80"
                                                alt="Car thumbnail"
                                                className="rounded border-2 border-blue-600"
                                            />
                                            <img
                                                src="/api/placeholder/120/80"
                                                alt="Interior thumbnail"
                                                className="rounded"
                                            />
                                            <img
                                                src="/api/placeholder/120/80"
                                                alt="Interior thumbnail"
                                                className="rounded"
                                            />
                                        </div>

                                        {/* Car Details */}
                                        <div className="flex justify-between items-start mb-8">
                                            <div>
                                                <h2 className="text-2xl font-bold mb-2">Nissan GT-R</h2>
                                                <div className="flex items-center mb-4">
                                                    {[1, 2, 3, 4].map((star) => (
                                                        <span key={star} className="text-yellow-400">★</span>
                                                    ))}
                                                    <span className="text-gray-400">★</span>
                                                    <span className="ml-2 text-gray-600">440+ Reviewer</span>
                                                </div>
                                                <p className="text-gray-600 mb-4">
                                                    NISMO has become the embodiment of Nissan's outstanding performance,
                                                    inspired by the most unforgiving proving ground, the "race track".
                                                </p>
                                                <div className="grid grid-cols-4 gap-4">
                                                    {carSpecs.map((spec) => (
                                                        <div key={spec.label}>
                                                            <p className="text-gray-500">{spec.label}</p>
                                                            <p className="font-semibold">{spec.value}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xl font-bold text-blue-600">$80.00<span className="text-gray-400">/days</span></p>
                                                <p className="line-through text-gray-400">$100.00</p>
                                                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">
                                                    Rent Now
                                                </button>
                                            </div>
                                        </div>

                                        {/* Reviews */}
                                        <div>
                                            <div className="flex items-center mb-6">
                                                <h3 className="text-lg font-semibold">Reviews</h3>
                                                <span className="ml-2 px-2 py-1 bg-blue-600 text-white text-sm rounded">
                                                    13
                                                </span>
                                            </div>

                                            {reviews.map((review) => (
                                                <div key={review.name} className="mb-6 pb-6 border-b">
                                                    <div className="flex justify-between mb-4">
                                                        <div className="flex items-center">
                                                            <img
                                                                src={review.avatar}
                                                                alt={review.name}
                                                                className="w-12 h-12 rounded-full mr-4"
                                                            />
                                                            <div>
                                                                <h4 className="font-semibold">{review.name}</h4>
                                                                <p className="text-gray-500 text-sm">{review.position}</p>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="text-gray-500">{review.date}</p>
                                                            <div className="flex">
                                                                {Array(review.rating).fill(null).map((_, i) => (
                                                                    <span key={i} className="text-yellow-400">★</span>
                                                                ))}
                                                                {Array(5 - review.rating).fill(null).map((_, i) => (
                                                                    <span key={i} className="text-gray-300">★</span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-600">{review.comment}</p>
                                                </div>
                                            ))}

                                            <button className="w-full py-2 text-blue-600 font-semibold flex items-center justify-center">
                                                Show All <ChevronDown className="ml-2" size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* </div> */}

                            </div>
                        </div>
                    </div >
                </main >
            </div >
        </>
    )
}
