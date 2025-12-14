import React from 'react';
import { Linkedin, Mail, Globe, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-zinc-400 py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">Owl AI</h3>
            <p className="text-sm leading-relaxed mb-6 text-zinc-500">
              Overload Ware Labs AI<br/>
              Redefining how students, learners, and freshers gain experience through virtual internships and real-world projects.
            </p>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <MapPin size={16} />
              <span>Hyderabad, India</span>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#/internships" className="hover:text-white transition-colors">Apply for Internship</a></li>
              <li><a href="#/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.linkedin.com/company/owlaiinterns/" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 p-2 rounded-full hover:bg-white hover:text-black transition-all border border-zinc-800">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@owlai.com" className="bg-zinc-900 p-2 rounded-full hover:bg-white hover:text-black transition-all border border-zinc-800">
                <Mail size={20} />
              </a>
              <a href="https://sites.google.com/view/overloadwarelabsai/home" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 p-2 rounded-full hover:bg-white hover:text-black transition-all border border-zinc-800">
                <Globe size={20} />
              </a>
            </div>
            <p className="text-xs text-zinc-600">
              © 2025 Overload Ware Labs AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;