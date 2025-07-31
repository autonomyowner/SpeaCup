import { Link } from 'react-router-dom'
import { Coffee, Mail, Phone, MapPin, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-her-fierceness text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-rose-radiance-600 rounded-lg flex items-center justify-center">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">SpeaCup</span>
            </div>
            <p className="text-rose-radiance-200 mb-6 max-w-md">
              Experience English learning in a cozy café atmosphere. Join our community 
              of learners and practice real-life English conversations over coffee and sweets.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/speacup.nb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-radiance-200 hover:text-white transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-rose-radiance-200 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sessions" className="text-rose-radiance-200 hover:text-white transition-colors duration-200">
                  Sessions
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-rose-radiance-200 hover:text-white transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-rose-radiance-200 hover:text-white transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-rose-radiance-200 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-rose-radiance-400" />
                <span className="text-rose-radiance-200">Algiers, Elbiar</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-radiance-400" />
                <span className="text-rose-radiance-200">+213 XXX XXX XXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-radiance-400" />
                <span className="text-rose-radiance-200">info@speacup.dz</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black-hearted mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-rose-radiance-300 text-sm">
            © 2024 SpeaCup. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-rose-radiance-300 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-rose-radiance-300 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 