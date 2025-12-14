import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, BarChart, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'palette': return <Palette size={32} />;
      case 'bar-chart': return <BarChart size={32} />;
      case 'book-open': return <BookOpen size={32} />;
      default: return <CheckCircle size={32} />;
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <div className="bg-zinc-950 text-white py-24 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Services for Companies</h1>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            Looking for affordable yet high-quality services? Our top-tier interns, guided by industry mentors, deliver exceptional results for your business needs.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-zinc-900 rounded-3xl p-10 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
              <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mb-8">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="space-y-4 text-sm text-zinc-300 mb-8">
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-white" /> Cost-effective solutions</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-white" /> Quick turnaround time</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-white" /> Mentor-verified quality</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Section */}
      <div className="bg-zinc-900 py-24 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-6">For Teachers & Trainers</h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Are you an educator with a passion for teaching? Partner with Owl AI to host your courses on our platform. Reach a wider audience and monetize your content while we handle the tech and marketing.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-zinc-200 transition-colors">
              Become a Partner <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-2xl transform rotate-6 scale-95"></div>
              <img 
                src="https://picsum.photos/seed/teaching/500/350" 
                alt="Teaching" 
                className="rounded-2xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;