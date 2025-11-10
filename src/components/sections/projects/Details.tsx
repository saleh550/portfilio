import React from 'react';
import type { ProjectType } from '../../../types/types';
import { CalendarDaysIcon } from "@heroicons/react/24/outline";


interface props {
    project: ProjectType

}

const Details: React.FC<props> = ({ project }) => {
    return (
        <div className="p-6 text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {project.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {project.desc}
            </p>
            <div className="flex items-center text-gray-500 text-sm">
                <CalendarDaysIcon className="w-4 h-4 mr-1" />
                <span>Created: {project.createdAt}</span>
            </div>
        </div>
    );
};

export default Details;