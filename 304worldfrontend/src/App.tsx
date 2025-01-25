import React from 'react';
import { Search, Camera, Play, MessageCircle, Sparkles, Download, Grid, QrCode, ChevronDown, MoreVertical, Link2, Globe, Users, Compass, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <Camera className="w-8 h-8" />
              <div className="relative flex-1 md:flex-initial">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-800 rounded-full py-2 pl-10 pr-4 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>
            
            <nav className="flex items-center gap-4 md:gap-8 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <a href="#" className="flex items-center gap-2 whitespace-nowrap">
                <div className="w-6 h-6"><img src="/vite.svg" alt="Stories" /></div>
                <span>Stories</span>
              </a>
              <a href="#" className="flex items-center gap-2 whitespace-nowrap">
                <Play className="w-6 h-6" />
                <span>Spotlight</span>
              </a>
              <a href="#" className="flex items-center gap-2 whitespace-nowrap">
                <MessageCircle className="w-6 h-6" />
                <span>Chat</span>
              </a>
              <a href="#" className="flex items-center gap-2 whitespace-nowrap">
                <Sparkles className="w-6 h-6" />
                <span className="flex items-center">
                  Lenses
                  <span className="ml-1 bg-blue-500 text-xs px-1 rounded">NEW</span>
                </span>
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <QrCode className="w-6 h-6 hidden md:block" />
              <Grid className="w-6 h-6 hidden md:block" />
              <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
                Download
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Advertisement Container */}
      <div className="container mx-auto px-4 py-4">
        <div className="bg-gray-900 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">Advertisement</span>
            <button className="text-xs text-gray-400 hover:text-white">×</button>
          </div>
          <div className="bg-gray-800 rounded-lg h-24 flex items-center justify-center">
            <span className="text-gray-500">Ad Space Available</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-gray-900 rounded-xl p-6 space-y-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Users className="w-5 h-5" />
                Popular Creators
              </h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full" />
                    <div>
                      <p className="font-semibold">Creator {i}</p>
                      <p className="text-sm text-gray-400">@creator{i}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="text-blue-400 text-sm hover:underline w-full text-center">
                View All Creators
              </button>
            </div>

            <div className="mt-6 bg-gray-900 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Trending
              </h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg" />
                    <div>
                      <p className="font-semibold">Trending Topic {i}</p>
                      <p className="text-sm text-gray-400">{i}K views</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-black" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Snap Spotlight</h2>
                <p className="text-gray-400">Discover The Latest Stories From Top Snap Creators.</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-6 h-6" />
                <span className="font-semibold">World Vibe</span>
                <span className="text-gray-400 hidden md:inline">View more episodes »</span>
              </div>

              <div className="relative aspect-video bg-gray-800 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1600096194534-95cf5ece04cf"
                  alt="Featured Story"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button className="p-2 bg-gray-800/80 rounded-full">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-gray-800/80 rounded-full">
                    <Link2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5" />
                Discover
              </h2>
              <div className="space-y-4">
                {/* Mehndi Art Story */}
                <div className="group cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1581234794335-bb0c77c13b1a"
                    alt="Mehndi Art"
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="font-semibold group-hover:text-yellow-400">Mehndi Art</span>
                  </div>
                </div>

                {/* Recent Story */}
                <div className="group cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
                    alt="Recent Story"
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold group-hover:text-yellow-400">jbjhanceboyz</span>
                      <span className="text-yellow-400">⭐</span>
                    </div>
                    <span className="text-sm text-gray-400">11h ago</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gray-900 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Recent Activity
              </h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-full" />
                    <div>
                      <p className="font-semibold">User {i}</p>
                      <p className="text-sm text-gray-400">Posted a new story</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-8">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;