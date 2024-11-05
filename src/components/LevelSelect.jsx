import React from 'react';
import { useNavigate } from 'react-router-dom';

const LevelSelect = () => {
    const navigate = useNavigate();

    const handleSelect = (level) => {
        navigate(`/quiz/${level}`);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Wild life Ecology Quiz </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[...Array(6).keys()].map((level) => (
                    <button
                        key={level}
                        className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col items-center justify-center"
                        onClick={() => handleSelect(level + 1)}
                    >
                        <span className="text-3xl font-bold text-blue-600 mb-2">{level + 1}</span>
                        <span className="text-sm text-gray-600">Week {level + 1}</span>
                    </button>
                ))}
                <button
                    className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col items-center justify-center"
                    onClick={() => handleSelect("cumulative")}
                >
                    <span className="text-3xl font-bold text-white mb-2">🏆</span>
                    <span className="text-xl font-semibold text-white">Mid Term (week 1 to 6)</span>
                </button>
                {[...Array(6).keys()].map((level) => (
                    <button
                        key={level}
                        className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col items-center justify-center"
                        onClick={() => handleSelect(level + 1)}
                    >
                        <span className="text-3xl font-bold text-blue-600 mb-2">{level + 1+6}</span>
                        <span className="text-sm text-gray-600">Week {level + 1+6}</span>
                    </button>
                ))}
                <button
                    className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col items-center justify-center"
                    onClick={() => handleSelect("cumulative")}
                >
                    <span className="text-3xl font-bold text-white mb-2">🏆</span>
                    <span className="text-xl font-semibold text-white">Pre-Boards (week 6 to 12)</span>
                </button>
                <button
                    className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col items-center justify-center"
                    onClick={() => handleSelect("cumulative")}
                >
                    <span className="text-3xl font-bold text-white mb-2">🏆</span>
                    <span className="text-xl font-semibold text-white">S-Grade confirm (week 1 to 12)</span>
                </button>
            </div>
        </div>
    );
};

export default LevelSelect;
