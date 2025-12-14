import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Briefcase, Zap, Star } from 'lucide-react';
import InternshipCard from '../components/InternshipCard';
import { INTERNSHIPS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const featuredInternships = INTERNSHIPS.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative bg-black pt-20 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Now enrolling for 2025 cohorts
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
              Learn. Intern. <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">Grow.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              Bridge the gap between theory and practice. Gain real-world experience through virtual internships and build a career you love with Owl AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/internships" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-white rounded-xl hover:bg-zinc-200 transition-all shadow-lg hover:shadow-white/10"
              >
                Find Internships <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-transparent border border-zinc-700 rounded-xl hover:bg-zinc-900 transition-all"
              >
                Hire Interns
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-zinc-900 py-16 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">1000+</div>
              <div className="text-zinc-500 text-sm uppercase tracking-wider">Students Enrolled</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">50+</div>
              <div className="text-zinc-500 text-sm uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">20+</div>
              <div className="text-zinc-500 text-sm uppercase tracking-wider">Partner Companies</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">100%</div>
              <div className="text-zinc-500 text-sm uppercase tracking-wider">Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Owl AI?</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
              We don't just teach; we provide an ecosystem for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="w-14 h-14 bg-zinc-800 text-white rounded-2xl flex items-center justify-center mb-6">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Real-World Projects</h3>
              <p className="text-zinc-400 leading-relaxed">
                Work on live tasks in Data Science, UI/UX, and Web Dev. No more dummy projects; build a portfolio that matters.
              </p>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="w-14 h-14 bg-zinc-800 text-white rounded-2xl flex items-center justify-center mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Self-Paced Learning</h3>
              <p className="text-zinc-400 leading-relaxed">
                Learn at your own speed with our curated content modules. Flexible schedules designed for full-time students.
              </p>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="w-14 h-14 bg-zinc-800 text-white rounded-2xl flex items-center justify-center mb-6">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Placement Support</h3>
              <p className="text-zinc-400 leading-relaxed">
                Get certified and connected with our HR network. We help top performers land interviews and full-time roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Internships */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Popular Internships</h2>
              <p className="text-zinc-400">Top-rated programs chosen by students.</p>
            </div>
            <Link to="/internships" className="inline-flex items-center text-white font-semibold hover:gap-2 transition-all group">
              View All <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredInternships.map((internship) => (
              <InternshipCard key={internship.id} internship={internship} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Student Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 flex gap-6 hover:bg-zinc-800/80 transition-colors">
                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full object-cover grayscale" />
                <div>
                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} size={14} className="text-white fill-white" />
                    ))}
                  </div>
                  <p className="text-zinc-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                  <div>
                    <h4 className="font-bold text-white text-lg">{t.name}</h4>
                    <p className="text-sm text-zinc-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden border border-zinc-800">
             {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white relative z-10">Ready to kickstart your career?</h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Join 1000+ students who are learning, interning, and growing with Owl AI today.
            </p>
            <Link 
              to="/internships" 
              className="inline-block bg-white text-black font-bold py-4 px-10 rounded-xl hover:bg-zinc-200 transition-colors shadow-xl relative z-10"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;