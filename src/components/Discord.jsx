import React from 'react';

const DiscordHero = () => {
  const avatars = Array(24).fill("/placeholder.svg?height=48&width=48");

  return (
    <div className="relative min-h-[500px] w-full overflow-hidden bg-[#1a1c36] px-4 py-12">
      <div className="relative z-10 mx-auto max-w-5xl">
        <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
          #3 Discord Server in the World
        </p>
        <h1 className="mb-8 text-4xl font-bold text-white md:text-6xl">
          Be part of a{" "}
          <span className="text-[#7289da]">creative</span>
          <br />
          community! 🌎
        </h1>
        <button className="inline-flex items-center gap-2 rounded-full bg-[#7289da] px-6 py-3 text-lg font-semibold text-white hover:bg-[#677bc4]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="3"/>
            <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
            <path d="M18.95 11.45a11 11 0 0 0-14.08 0"/>
          </svg>
          Join Discord Server
        </button>
      </div>
      <div className="absolute right-0 top-0 grid h-full w-1/2 grid-cols-4 gap-4 md:w-2/5">
        {avatars.map((avatar, i) => (
          <div
            key={i}
            className="relative h-12 w-12 animate-float rounded-full bg-black/50 shadow-lg"
            style={{
              animationDelay: `${i * 0.1}s`,
            }}
          >
            <img
              alt="User avatar"
              className="h-full w-full rounded-full object-cover"
              src={avatar}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default DiscordHero;