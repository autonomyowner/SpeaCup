const Sessions = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Available Sessions</h1>
          <p className="text-xl text-rose-100">
            Book your English conversation session and start your learning journey.
          </p>
        </div>
        
        {/* Emotional Elegance Card */}
        <div className="mb-12">
          <div className="card relative overflow-hidden h-96 group">
            {/* Video Background */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted={false}
              controls
              poster="/pictures/emotionalenetlegance.mp4"
            >
              <source src="/pictures/emotionalenetlegance.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8">
              <h2 className="text-4xl font-bold text-white mb-4">Emotional Elegance</h2>
              <p className="text-xl text-rose-200 mb-6 max-w-2xl">
                Experience the art of emotional intelligence through our specialized English conversation sessions. 
                Learn to express yourself with grace and confidence in a supportive environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                  Book This Session
                </button>
                <button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Session Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-rose-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🌅</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Friday Evening</h3>
            <p className="text-rose-100 mb-4">4pm – 6pm</p>
            <p className="text-rose-200 text-sm mb-6">
              Perfect for unwinding after a long week while improving your English skills.
            </p>
            <button className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
              Book Session
            </button>
          </div>
          
          <div className="card text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-rose-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">☀️</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Saturday Morning</h3>
            <p className="text-rose-100 mb-4">1pm – 3pm</p>
            <p className="text-rose-200 text-sm mb-6">
              Start your weekend with energizing conversations and new friendships.
            </p>
            <button className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
              Book Session
            </button>
          </div>
          
          <div className="card text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-rose-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🌆</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Saturday Evening</h3>
            <p className="text-rose-100 mb-4">4pm – 6pm</p>
            <p className="text-rose-200 text-sm mb-6">
              Evening vibes with relaxed conversations and cultural exchange.
            </p>
            <button className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
              Book Session
            </button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-rose-300">More session types coming soon...</p>
        </div>
      </div>
    </div>
  )
}

export default Sessions 