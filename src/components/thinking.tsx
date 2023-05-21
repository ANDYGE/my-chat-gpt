import Image from 'next/image';
import React from 'react';

const Thinking = () => {
    return (
        <div className="flex items-center space-x-2 mt-4">
            <Image alt="thinking" src='/gpt.png' className="w-10 rounded-full" />
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 animate-pulse" />
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 animate-pulse animation-delay-500" />
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 animate-pulse animation-delay-1000" />
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 animate-pulse animation-delay-1500" />
        </div>
    );
};

export default Thinking;