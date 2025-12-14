import React, { useState } from 'react';
import { Send, CheckCircle, GraduationCap, Briefcase, User, Mail, Phone, Linkedin as LinkedinIcon, MapPin, FileText } from 'lucide-react';

const Internships: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    whatsapp: '',
    linkedin: '',
    college: '',
    year: '',
    branch: '',
    domain: '',
    referral: ''
  });

  const domains = [
    'Data Analytics (Power BI & Excel)',
    'Python for Data Science',
    'UI/UX Design',
    'Artificial Intelligence & ML',
    'Web Development',
    'Human Resources (HR)',
    'Marketing'
  ];

  const years = [
    '1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate', 'Working Professional'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black text-white pt-10 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
             <img 
                src="https://media.licdn.com/dms/image/v2/D560BAQGjC0-25v8Czw/company-logo_200_200/company-logo_200_200/0/1709966838883?e=1749686400&v=beta&t=H-W-K4sH12J2k3m5n6o7p8q9r0s1t2u3v4w5x6y7z8" 
                alt="Owl AI" 
                className="w-20 h-20 rounded-full border-2 border-zinc-800 mx-auto"
              />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Internship Registration Form</h1>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            Owl AI - Learn. Intern. Grow.<br/>
            Fill out the details below to register for our upcoming cohorts.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-zinc-500">
             <span className="bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">Virtual Internship</span>
             <span className="bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">Certificate Included</span>
             <span className="bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">Placement Support</span>
          </div>
        </div>

        {isSubmitted ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center shadow-2xl">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-black" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Application Submitted!</h2>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto">
              Thank you for applying to Owl AI. Please check your email (including spam folder) for the onboarding kit and next steps.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => window.location.href = '#/'}
                className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors"
              >
                Back to Home
              </button>
              <button 
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    whatsapp: '',
                    linkedin: '',
                    college: '',
                    year: '',
                    branch: '',
                    domain: '',
                    referral: ''
                  });
                }}
                className="px-8 py-3 bg-zinc-800 text-white font-semibold rounded-xl hover:bg-zinc-700 transition-colors border border-zinc-700"
              >
                Submit Another Response
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Form Decoration Top */}
            <div className="h-2 bg-gradient-to-r from-zinc-700 via-white to-zinc-700"></div>
            
            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
              
              {/* Section: Personal Info */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white uppercase tracking-wider border-b border-zinc-800 pb-2 mb-4">
                  1. Personal Information
                </h3>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:ring-1 focus:ring-white focus:border-white outline-none transition-all text-white placeholder-zinc-700"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-300">Email Address <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:ring-1 focus:ring-white focus:border-white outline-none transition-all text-white placeholder-zinc-700"
                        placeholder="yourname@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-300">Contact Number <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:ring-1 focus:ring-white focus:border-white outline-none transition-all text-white placeholder-zinc-700"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-medium text-zinc-300">WhatsApp Number <span className="text-red-500">*</span></label>
                     <input
                        type="tel"
                        name="whatsapp"
                        required
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:ring-1 focus:ring-white focus:border-white outline-none transition-all text-white placeholder-zinc-700"
                        placeholder="Same as contact number"
                      />
                      <p className="text-xs text-zinc-500">We will add you to the official internship group here.</p>
                  </div>
                </div>
              </div>

              {/* Section: Academic Info */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white uppercase tracking-wider border-b border-zinc-800 pb-2 mb-4">
                  2. Academic Details
                </h3>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">College / University Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="college"
                      required
                      value={formData.college}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:ring-1 focus:ring-white focus:border-white outline-none transition-all text-white placeholder-zinc-700"
                      placeholder="e.g. IIT Hyderabad"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Current Year <span className="text-red-500">*</span></label>
                        <select
                        name="year"
                        required
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:ring-1 focus:ring-white focus:border-white outline-none transition-all text-white"
                        >
                        <option value="" disabled>Select Year</option>
                        {years.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Branch / Stream</label>
                        <input
                        type="text"
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:ring-1 focus:ring-white focus:border-white outline-none transition-all text-white placeholder-zinc-700"
                        placeholder="e.g. CSE, ECE, BBA"
                        />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section: Internship Selection */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white uppercase tracking-wider border-b border-zinc-800 pb-2 mb-4">
                  3. Internship Preference
                </h3>
                
                <div className="space-y-4">
                  <label className="text-sm font-medium text-zinc-300 block mb-2">Select Domain of Interest <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {domains.map((d) => (
                        <label key={d} className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-all ${formData.domain === d ? 'bg-white text-black border-white' : 'bg-black text-zinc-400 border-zinc-700 hover:border-zinc-500'}`}>
                            <input 
                                type="radio" 
                                name="domain" 
                                value={d} 
                                checked={formData.domain === d}
                                onChange={handleChange}
                                className="hidden"
                            />
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.domain === d ? 'border-black' : 'border-zinc-500'}`}>
                                {formData.domain === d && <div className="w-3 h-3 rounded-full bg-black"></div>}
                            </div>
                            <span className="font-medium">{d}</span>
                        </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mt-6">
                    <label className="text-sm font-medium text-zinc-300">LinkedIn Profile URL</label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:ring-1 focus:ring-white focus:border-white outline-none transition-all text-white placeholder-zinc-700"
                      placeholder="https://linkedin.com/in/..."
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Referral Code (Optional)</label>
                    <input
                      type="text"
                      name="referral"
                      value={formData.referral}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:ring-1 focus:ring-white focus:border-white outline-none transition-all text-white placeholder-zinc-700"
                      placeholder="Enter code if any"
                    />
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition-all shadow-lg hover:shadow-white/10 flex items-center justify-center gap-2 text-lg uppercase tracking-wide"
                >
                  Submit Registration <Send size={20} />
                </button>
                <p className="text-center text-zinc-600 text-xs mt-4">
                  By clicking submit, you agree to receive communications from Owl AI regarding your internship.
                </p>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Internships;