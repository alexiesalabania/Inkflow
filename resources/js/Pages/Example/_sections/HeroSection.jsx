import React from 'react';

export default function HeroSection() {
    return (
        <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-violet-900 via-purple-900 to-indigo-950 text-white py-20 px-4 sm:px-6 lg:px-8 rounded-3xl shadow-xl my-6">
            {/* Background decoration elements */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 bg-violet-800/60 text-violet-200 px-4 py-1.5 rounded-full font-semibold text-xs uppercase tracking-widest border border-violet-700/50 shadow-inner">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    CocoHub Code Assist Lab
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                    Get Real-Time Peer Tutoring &amp; Lab Support
                </h1>
                
                <p className="text-base sm:text-lg text-violet-200 font-medium max-w-2xl mx-auto leading-relaxed">
                    Stuck on a bug, routing issue, or layout problem? Drop your station number and ticket details into the queue, and our peer tutors will assist you right at your workstation.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <a 
                        href="#submit" 
                        className="px-8 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl shadow-lg hover:shadow-violet-500/25 transition-all transform hover:-translate-y-0.5"
                    >
                        Submit a Ticket
                    </a>
                    <a 
                        href="#table-queue" 
                        className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md border border-white/10 transition-all"
                    >
                        View Live Queue
                    </a>
                </div>
            </div>
        </section>
    );
}