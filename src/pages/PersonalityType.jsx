// src/components/PersonalityType.js
import React from 'react';

const PersonalityType = () => {
    const sections = [
        { id: 'introduction', title: 'Introduction', content: 'Thought constitutes the greatness of man. Man is a reed, the feeblest thing in nature, but he is a thinking reed. Blaise Pascal. People with the INTJ personality type (Architects) are intellectually curious individuals with a deep-seated thirst for knowledge. They tend to value creative ingenuity, straightforward rationality, and self-improvement.' },
        { id: 'relationships', title: 'Romantic Relationships', content: 'INTJs value independence and self-sufficiency in their relationships. They seek partners who can match their intellectual curiosity and engage in deep conversations.' },
        { id: 'friendships', title: 'Friendships', content: 'INTJs tend to have a small circle of close friends. They prefer deep, meaningful conversations over small talk and often choose quality over quantity in their friendships.' },
        { id: 'parenthood', title: 'Parenthood', content: 'As parents, INTJs are likely to encourage independence and critical thinking in their children. They aim to foster a love for learning and exploration.' },
        { id: 'career-paths', title: 'Career Paths', content: 'INTJs thrive in environments that allow them to use their analytical skills and creativity. They often excel in strategic roles and positions that require problem-solving.' },
        { id: 'workplace-habits', title: 'Workplace Habits', content: 'INTJs are known for their strategic thinking and ability to solve complex problems. They prefer to work independently but can collaborate effectively when needed.' },
        { id: 'conclusion', title: 'Conclusion', content: 'In conclusion, INTJs are imaginative and strategic thinkers, with a plan for everything. They are driven by their desire for knowledge and self-improvement.' },
    ];

    return (
        <div className="flex flex-col md:flex-row bg-gray-50 min-h-screen">
            <div className="w-full md:w-1/4 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Table of Contents</h2>
                <ul className="space-y-3">
                    {sections.map(section => (
                        <li key={section.id}>
                            <a href={`#${section.id}`} className="text-blue-600 hover:underline transition duration-300 ease-in-out transform hover:scale-105">
                                {section.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full md:w-3/4 p-6">
                <h1 className="text-5xl font-bold text-gray-900">Architect</h1>
                <h2 className="text-2xl font-semibold mt-2 text-gray-700">INTJ Personality</h2>
                <p className="mt-4 text-gray-600">Architects are imaginative and strategic thinkers, with a plan for everything.</p>

                {sections.map(section => (
                    <div key={section.id} id={section.id} className="mt-10">
                        <h3 className="text-3xl font-bold text-gray-800">{section.title}</h3>
                        <p className="mt-3 text-gray-600">{section.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PersonalityType;