import React, { useState } from 'react';
const MAX_LENGTH = 80;
interface props {
    text: string;
    index?: number;
}

const LongText: React.FC<props> = ({ text, index }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleReadMore = (i: any) => {
        setExpandedIndex(expandedIndex === i ? null : i);
    };
    return (
        <div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {expandedIndex === index
                    ? text
                    : text.substring(0, MAX_LENGTH) + (text.length > MAX_LENGTH ? "..." : "")
                }
                 {text.length > MAX_LENGTH && (
                <span
                    onClick={() => toggleReadMore(index)}
                    className="text-blue-600 text-sm font-medium hover:underline"
                >{expandedIndex === index ? " Show Less" : " Read More"}</span>  )}
            </p>
        </div>
    );
};

export default LongText;