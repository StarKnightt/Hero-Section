import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'


export default function Component() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { 
        threshold: 0.2,
        rootMargin: '50px'
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative h-screen w-screen overflow-x-hidden">
      <svg className="absolute -z-10 -top-10 opacity-20" width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(2) rotate(0)'>
            <rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/>
            <path d='M3.25 10h13.5M10 3.25v13.5' strokeLinecap='square' strokeWidth='0.5' stroke='hsla(258.5,59.4%,59.4%,1)' fill='none'/>
          </pattern>
        </defs>
        <rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/>
      </svg>
      
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-20 text-center sm:px-6 lg:px-8">
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
          Learn. Create. Grow.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-900/80">
          Our mission is to empower every person and organization to harness the power of AI to learn, create, and grow.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-full bg-gray-900/10 px-8 py-3 text-sm font-semibold text-gray-900 backdrop-blur-sm transition hover:bg-gray-900/20"
          >
            Get Started
          </a>
          <a
            href="#"
            className="flex items-center text-sm font-semibold text-gray-900"
          >
            Developer API <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div ref={containerRef} className="relative mx-auto mt-16 max-w-5xl">
          <div 
            className={`absolute -top-20 -left-20 w-64 md:-left-56 transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-full -translate-y-full'} 
              hover:scale-105 hover:-translate-y-2`}
            style={{ transitionDelay: '200ms' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60" 
              alt="" 
              className="aspect-square w-full -rotate-12 rounded-3xl border-4 border-purple-500/30 object-cover shadow-2xl shadow-purple-500/20"
            />
          </div>
          <div 
            className={`absolute -top-20 -right-20 w-64 md:-right-56 transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-full -translate-y-full'}
              hover:scale-105 hover:-translate-y-2`}
            style={{ transitionDelay: '400ms' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60" 
              alt="" 
              className="aspect-square w-full rotate-12 rounded-3xl border-4 border-pink-500/30 object-cover shadow-2xl shadow-pink-500/20"
            />
          </div>
          <div 
            className={`absolute -bottom-20 -left-20 w-64 md:-left-56 transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-full translate-y-full'}
              hover:scale-105 hover:translate-y-2`}
            style={{ transitionDelay: '600ms' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=60" 
              alt="" 
              className="aspect-square w-full -rotate-12 rounded-3xl border-4 border-blue-500/30 object-cover shadow-2l shadow-blue-500/20"
            />
          </div>
          <div 
            className={`absolute -bottom-20 -right-20 w-64 md:-right-56 transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-full translate-y-full'}
              hover:scale-105 hover:translate-y-2`}
            style={{ transitionDelay: '800ms' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60" 
              alt="" 
              className="aspect-square w-full rotate-12 rounded-3xl border-4 border-indigo-500/30 object-cover shadow-2xl shadow-indigo-500/20"
            />
          </div>
          
          <div 
            className={`rounded-[2.5rem] bg-gray-900/40 p-4 backdrop-blur-xl transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-32 scale-95'}`}
            style={{ transitionDelay: '1000ms' }}
          >
            <video 
              className="w-full rounded-[2rem] shadow-2xl"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="/src/assets/video1.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'For Creators',
              description: 'Create production-quality visual assets for your projects with unprecedented quality, speed, and style-consistency.'
            },
            {
              title: 'For Teams',
              description: 'Bring your team\'s best ideas to life at scale, with our intuitive AI-first creative suite designed for collaboration and built for business.'
            },
            {
              title: 'For Developers',
              description: 'Experience content creation excellence with Leonardo AI\'s API. With unmatched scalability, effortlessly tailor outputs to your brand guideline.'
            }
          ].map((card, index) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-gray-900/30 p-8 backdrop-blur-sm transition hover:bg-gray-900/40"
            >
              <h3 className="flex items-center text-xl font-semibold text-gray-900">
                {card.title}
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </h3>
              <p className="mt-4 text-sm text-gray-900/70">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}