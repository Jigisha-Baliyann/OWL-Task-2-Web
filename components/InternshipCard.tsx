import React from 'react';
import { Clock, BarChart, ChevronRight } from 'lucide-react';
import { Internship } from '../types';

interface InternshipCardProps {
  internship: Internship;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ internship }) => {
  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden flex flex-col h-full hover:border-zinc-600 transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={internship.image} 
          alt={internship.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white border border-zinc-700">
          {internship.category}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{internship.title}</h3>
        <p className="text-zinc-400 text-sm mb-4 line-clamp-3">{internship.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {internship.skills.slice(0, 3).map((skill) => (
            <span key={skill} className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-md border border-zinc-700">
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-zinc-800 flex items-center justify-between">
          <div className="flex items-center text-zinc-500 text-xs gap-3">
            <span className="flex items-center gap-1">
              <Clock size={14} /> {internship.duration}
            </span>
            <span className="flex items-center gap-1">
              <BarChart size={14} /> {internship.level}
            </span>
          </div>
          <button className="text-white font-semibold text-sm flex items-center hover:gap-2 transition-all">
            Details <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;