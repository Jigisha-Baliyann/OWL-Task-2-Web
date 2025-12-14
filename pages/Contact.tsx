import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Internship Inquiry', message: '' });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-zinc-400 text-lg">Have questions about internships, services, or partnerships? We're here to help.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-1">Email Us</h4>
                    <p className="text-zinc-400">contact@owlai.com</p>
                    <p className="text-zinc-400">collaborations@owlai.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-zinc-800 text-white rounded-xl flex items-center justify-center flex-shrink-0 border border-zinc-700">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-1">Location</h4>
                    <p className="text-zinc-400">Hyderabad, India</p>
                    <p className="text-zinc-400">Operating Worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-zinc-800 text-white rounded-xl flex items-center justify-center flex-shrink-0 border border-zinc-700">
                    <Linkedin size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-1">Connect</h4>
                    <p className="text-zinc-400 mb-1">Follow us for updates</p>
                    <a href="https://www.linkedin.com/company/owlaiinterns/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-zinc-300">
                      LinkedIn: Overload Ware Labs AI
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl text-black overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">Join our Community</h3>
                <p className="text-zinc-600 mb-6">
                  Be part of 1000+ learners. Get updates on new cohorts and free webinars.
                </p>
                <a 
                  href="https://www.linkedin.com/company/owlaiinterns/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  Follow on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-zinc-900 p-8 md:p-10 rounded-3xl border border-zinc-800 shadow-xl">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-zinc-400">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-white border-b border-white pb-1 font-medium hover:text-zinc-300 hover:border-zinc-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl focus:ring-1 focus:ring-white focus:border-white outline-none transition-all text-white placeholder-zinc-600"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl focus:ring-1 focus:ring-white focus:border-white outline-none transition-all text-white placeholder-zinc-600"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">I am a...</label>
                  <select
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl focus:ring-1 focus:ring-white focus:border-white outline-none transition-all text-white appearance-none"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="Student">Student looking for Internship</option>
                    <option value="Company">Company looking for Services</option>
                    <option value="Teacher">Teacher looking for Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl focus:ring-1 focus:ring-white focus:border-white outline-none transition-all resize-none text-white placeholder-zinc-600"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;