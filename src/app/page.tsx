// import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">LJ</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Lee Jourdan</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#expertise" className="text-gray-600 hover:text-blue-600 transition-colors">Expertise</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  C&L STRATEGY
                </span>
                <h1 className="text-5xl font-bold text-gray-900 mb-4">
                  LEE JOURDAN
                </h1>
                <h2 className="text-2xl font-semibold text-blue-600 mb-6">
                  PREMIER INDEPENDENT BOARD DIRECTOR
                </h2>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">VALUE CREATION</span>
                  <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">$500M ADDITIONAL VALUE</span>
                  <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">40% ABOVE TARGET</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded">$400 MAGIC-TO-MARKET</span>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Independent Board Director with exceptional track record across Energy,
                Technology, International Business, and Government sectors. Recognized
                by business leaders as one of the Maple Leafs&apos; outstanding business in North
                America with a proven track record of exceptional value creation and
                governance leadership across strategy, technology, international
                business, and Government sectors.
              </p>

              <div className="mb-8">
                <span className="text-sm font-semibold text-gray-700 mb-2 block">CURRENT ROLES</span>
                <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded">COMPENSATION COMMITTEE CHAIR</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  View Board Profile
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Download Resume
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-4xl font-bold">LJ</span>
                    </div>
                    <p className="text-blue-800 font-semibold">Lee Jourdan</p>
                    <p className="text-blue-600 text-sm">Professional Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Director Profile Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C&L</span>
                </div>
                <span className="text-blue-600 font-semibold">C&L STRATEGY</span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                BOARD DIRECTOR PROFILE
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Lee Jourdan stands as a premier independent board director with
                a proven track record of exceptional value creation and
                governance leadership across strategy, technology, international
                business, and Government sectors.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Leadership Profile</h3>
                    <p className="text-gray-600">
                      Most high-performing board experience at NYSE-listed
                      companies. Former Vice President at Chevron leading multinational teams
                      across international markets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Value Creation</h3>
                    <p className="text-gray-600">
                      Track record of generating $500M+ in additional value through strategic
                      initiatives, operational improvements, and digital value creation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Board Inquiries</h3>
                    <p className="text-gray-600">
                      Available upon formal inquiry for board opportunities only.
                      Contact: <a href="mailto:lee@jourdanboards.com" className="text-blue-600 hover:underline">lee@jourdanboards.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                <span className="text-blue-600 font-semibold">BOARD EXPERIENCE</span>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Global Expertise</h4>
                      <p className="text-sm text-gray-600">International operations experience across Thailand and Southeast Asia</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Extensive partnerships and joint ventures spanning learning and development across
                    multiple international markets.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Industry Recognition</h4>
                      <p className="text-sm text-gray-600">Recognized thought leadership in premier business publications</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    &quot;Top Ranking Transforming Business&quot; and &quot;Accelerating Sharing the Future of
                    Energy&quot; published thought leadership in premier business publications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Recognition Section */}
      <section id="expertise" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">EXPERTISE & RECOGNITION</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven leadership across multiple sectors with recognized expertise in value creation and strategic governance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Global Expertise */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-blue-600 text-xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Expertise</h3>
              <p className="text-gray-600 mb-4">
                International operations experience across Thailand and Southeast Asia
                with strategic partnerships and joint ventures spanning learning and development.
              </p>
              <div className="text-sm text-blue-600 font-semibold">
                Multi-market operations
              </div>
            </div>

            {/* Industry Recognition */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-green-600 text-xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Recognition</h3>
              <p className="text-gray-600 mb-4">
                Published thought leadership in premier business publications including
                &quot;Top Ranking Transforming Business&quot; and &quot;Accelerating Sharing the Future of Energy&quot;.
              </p>
              <div className="space-y-2">
                <div className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded inline-block">
                  Thought Leader
                </div>
                <div className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded inline-block ml-2">
                  Published Author
                </div>
              </div>
            </div>

            {/* Sector Expertise */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-purple-600 text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sector Expertise</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Energy & Technology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">International Business</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Government Relations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Strategic Consulting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Board Opportunities
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Available for premier board director positions.
            Inquiries welcome from search firms and board nominating committees.
          </p>

          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <span className="text-gray-600">📧</span>
                <a href="mailto:lee@jourdanboards.com" className="text-blue-600 hover:underline font-medium">
                  lee@jourdanboards.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-gray-600">💼</span>
                <span className="text-gray-700">Board Inquiries Only</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Available upon formal inquiry for board opportunities only
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">LJ</span>
              </div>
              <span className="text-white font-semibold">Lee Jourdan</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Lee Jourdan. Premier Independent Board Director.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
