import { Coffee, Users, Heart, Target } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About SpeaCup</h1>
          <p className="text-xl text-rose-100 max-w-3xl mx-auto">
            Discover our story and mission to make English learning accessible, enjoyable, and effective.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-lg text-rose-100 mb-6">
              SpeaCup was born from a simple idea: learning English should feel natural and enjoyable, 
              just like having a conversation with friends over coffee. We believe that the best way to 
              learn a language is through real conversations in a relaxed, welcoming environment.
            </p>
            <p className="text-lg text-rose-100">
              Located in the heart of Algiers, Elbiar, our cozy café provides the perfect setting for 
              English learners to practice, connect, and grow together.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <Coffee className="w-16 h-16 text-rose-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">SpeaCup</h3>
              <p className="text-rose-200">English Conversation Café</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="card text-center">
            <Target className="w-12 h-12 text-rose-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Our Mission</h3>
            <p className="text-rose-100">
              To create a welcoming space where English learners can practice real conversations 
              and build confidence in a natural, café environment.
            </p>
          </div>
          
          <div className="card text-center">
            <Heart className="w-12 h-12 text-rose-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Our Values</h3>
            <p className="text-rose-100">
              We believe in creating an inclusive, supportive community where everyone feels 
              comfortable practicing and improving their English skills.
            </p>
          </div>
          
          <div className="card text-center">
            <Users className="w-12 h-12 text-rose-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Our Community</h3>
            <p className="text-rose-100">
              Join our diverse community of learners, from beginners to advanced speakers, 
              all united by the goal of improving their English.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 