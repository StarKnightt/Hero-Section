import { ArrowRight } from 'lucide-react'

export default function Component() {
  return (
    <div class="relative h-screen w-screen">
    <svg class="absolute -z-10 -top-10 opacity-20 " width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M3.25 10h13.5M10 3.25v13.5'  stroke-linecap='square' stroke-width='0.5' stroke='hsla(258.5,59.4%,59.4%,1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/></svg>
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-20 text-center sm:px-6 lg:px-8">
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Creativity, Unleashed.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
          Leverage generative AI with a unique suite of tools to convey your ideas to the world.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-full bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Get Started
          </a>
          <a
            href="#"
            className="flex items-center text-sm font-semibold text-white"
          >
            Developer API <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        {/* App Preview Video */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="rounded-[2.5rem] bg-gray-900/40 p-4 backdrop-blur-xl">
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

        {/* Feature Cards */}
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
              <h3 className="flex items-center text-xl font-semibold text-white">
                {card.title}
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </h3>
              <p className="mt-4 text-sm text-white/70">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}