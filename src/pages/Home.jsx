import { Link } from 'react-router-dom'
import { Coffee, Users, Clock, Star, ArrowRight, Play } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-2 text-rose-300">
                <Coffee className="w-6 h-6" />
                <span className="text-sm font-medium">English Conversation Café</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Learn English
                <span className="block text-rose-300">Over Coffee</span>
              </h1>
              
              <p className="text-xl text-rose-100 leading-relaxed">
                Join our cozy English conversation sessions in Algiers. Practice real-life English 
                in a relaxed café atmosphere with experienced instructors and fellow learners.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/sessions"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Book a Session</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="btn-secondary inline-flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Video</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300 border border-white/20 relative overflow-hidden"
                style={{
                  backgroundImage: 'url(/pictures/logo.webp)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
                
                <div className="text-center space-y-4 relative z-10">
                  <div className="w-20 h-20 bg-rose-600 rounded-full mx-auto flex items-center justify-center">
                    <Coffee className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">SpeaCup</h3>
                  <p className="text-rose-200">English Conversation Café</p>
                  <div className="flex justify-center space-x-4 text-sm text-rose-200">
                    <span>📍 Algiers, Elbiar</span>
                    <span>⏰ 2h Sessions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose SpeaCup?
            </h2>
            <p className="text-xl text-rose-100 max-w-3xl mx-auto">
              Experience English learning in a unique café environment designed for natural conversation and real-world practice.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-rose-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-rose-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Small Groups</h3>
              <p className="text-rose-100">
                Maximum 10 participants per session for intimate, focused conversations and personalized attention.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-rose-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-8 h-8 text-rose-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Café Atmosphere</h3>
              <p className="text-rose-100">
                Relax in our cozy café setting with coffee and sweets while practicing English naturally.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-rose-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-rose-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Expert Instructors</h3>
              <p className="text-rose-100">
                Learn from experienced English instructors who guide conversations and provide valuable feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Session Times Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Available Sessions
            </h2>
            <p className="text-xl text-rose-100">
              Choose from our flexible session times that fit your schedule.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { day: 'Fridays', time: '4pm – 6pm', icon: '🌅' },
              { day: 'Saturdays', time: '1pm – 3pm', icon: '☀️' },
              { day: 'Saturdays', time: '4pm – 6pm', icon: '🌆' },
              { day: 'Wednesdays', time: '1pm – 3pm', icon: '🌞' },
            ].map((session, index) => (
              <div key={index} className="card text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{session.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{session.day}</h3>
                <p className="text-rose-300 font-medium">{session.time}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/sessions" className="btn-primary">
              View All Sessions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your English Journey?
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            Join our community of English learners and experience the difference of learning in a real café environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="bg-white text-rose-900 hover:bg-rose-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Get Started Today
            </Link>
            <Link to="/pricing" className="border-2 border-white text-white hover:bg-white hover:text-rose-900 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 