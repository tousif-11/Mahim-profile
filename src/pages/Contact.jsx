

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-teal-50 to-emerald-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="h-1 w-12 bg-linear-to-r from-emerald-600 to-transparent rounded" />
                        <span className="text-[11px] font-serif font-bold uppercase tracking-[0.4em] text-emerald-900/80">
                            ~ Get In Touch ~
                        </span>
                        <span className="h-1 w-12 bg-linear-to-l from-emerald-600 to-transparent rounded" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold text-emerald-950 mb-4 drop-shadow-sm">
                        Contact Me
                    </h1>
                    <p className="text-lg text-emerald-800 font-medium tracking-wide">
                        At any time when needed
                    </p>
                </div>

                

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 sm:mt-16">
                    <div className="rounded-2xl border-3 border-emerald-700/40 bg-white/70 p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-3xl mb-4">📍</div>
                        <h3 className="font-serif font-bold text-emerald-950 mb-2 text-lg">Address</h3>
                        <p className="text-emerald-800 text-sm leading-relaxed font-medium">
                            Pathaliya, Jamalpur<br />Bangladesh
                        </p>
                    </div>
                    <div className="rounded-2xl border-3 border-emerald-700/40 bg-white/70 p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-3xl mb-4">📱</div>
                        <h3 className="font-serif font-bold text-emerald-950 mb-2 text-lg">Phone</h3>
                        <p className="text-emerald-800 text-xl">
                            +880 1840712806<br />
                        </p>
                    </div>
                    <div className="rounded-2xl border-3 border-emerald-700/40 bg-white/70 p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-3xl mb-4">📧</div>
                        <h3 className="font-serif font-bold text-emerald-950 mb-2 text-lg">Email</h3>
                        <p className="text-emerald-800 text-xl leading-relaxed font-medium">
                            mahim420@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            <p className="text-gray-400 text-right py-1 pr-1.5">by tousif</p>
        </div>
    );
};

export default Contact;