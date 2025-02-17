
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [active, setActive] = useState('results');

    const handleMouseEnter = (tab) => {
        setActive(tab);
        if (tab === 'types') {
            setDropdownOpen(true);
        }
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    const handleClick = (tab) => {
        setActive(tab);
        setDropdownOpen(false); 
    };

    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="text-2xl font-bold">16Personalities</div>
                    </div>
                    <div className="flex space-x-8">
                        <button
                            onClick={() => handleClick('results')}
                            onMouseEnter={() => handleMouseEnter('results')}
                            className={`${
                                active === 'results' ? 'border-b-2 border-blue-500' : ''
                            } text-gray-700 hover:text-blue-500`}
                        >
                            Your Results
                        </button>
                        <div 
                            className="relative" 
                            onMouseEnter={() => handleMouseEnter('types')} 
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                onClick={() => handleClick('types')}
                                className={`${
                                    active === 'types' ? 'border-b-2 border-blue-500' : ''
                                } text-gray-700 hover:text-blue-500`}
                            >
                                Personality Types
                            </button>
                            {dropdownOpen && (
                                <div className="w-[500px] absolute z-10 right-0 bg-white shadow-lg rounded-md  p-4">
                                    <div className="py-2">
                                        <div className="py-1 font-bold text-gray-800">Analysts</div>
                                        <p className="text-sm text-gray-600 font-semibold mb-2">
                                            Intuitive (N) and Thinking (T) personality types, known for their rationality, impartiality, and intellectual excellence.
                                        </p>
                                        <div className="grid grid-cols-4 gap-2">
                                            <Link to='/personality'>
                                            <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 w-full font-semibold">Personality</button>
                                            </Link>
                                            <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 w-full font-semibold">Logician</button>
                                            <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 w-full font-semibold">Commander</button>
                                            <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 w-full font-semibold">Debater</button>
                                        </div>
                                        
                                        <div className="py-1 font-bold text-gray-800 mt-4">Diplomats</div>
                                        <p className="text-sm text-gray-600 font-semibold mb-2">
                                            Intuitive (N) and Feeling (F) personality types, known for their empathy, diplomatic skills, and passionate idealism.
                                        </p>
                                        <div className="grid grid-cols-4 gap-2">
                                            <button className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 w-full font-semibold">Advocate</button>
                                            <button className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 w-full font-semibold">Mediator</button>
                                            <button className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 w-full font-semibold">Protagonist</button>
                                            <button className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 w-full font-semibold">Campaigner</button>
                                        </div>

                                        <div className="py-1 font-bold text-gray-800 mt-4">Sentinels</div>
                                        <p className="text-sm text-gray-600 font-semibold mb-2">
                                            Observant (S) and Judging (J) personality types, known for their practicality and focus on order, security, and stability.
                                        </p>
                                        <div className="grid grid-cols-4 gap-2">
                                            <button className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 w-full font-semibold">Logistics</button>
                                            <button className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 w-full font-semibold">Defender</button>
                                            <button className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 w-full font-semibold">Executive</button>
                                            <button className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 w-full font-semibold">Consult</button>
                                        </div>

                                        <div className="py-1 font-bold text-gray-800 mt-4">Explorers</div>
                                        <p className="text-sm text-gray-600 font-semibold mb-2">
                                            Observant (S) and Prospecting (P) personality types, known for their spontaneity, ingenuity, and flexibility.
                                        </p>
                                        <div className="grid grid-cols-4 gap-2">
                                            <button className="bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 w-full">Virtuoso</button>
                                            <button className="bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 w-full">Adventurer</button>
                                            <button className="bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 w-full">Entrepreneur</button>
                                            <button className="bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 w-full">Entertainer</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;