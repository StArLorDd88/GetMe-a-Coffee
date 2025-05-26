export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[44vh]">
      <div className="flex items-center gap-8 text-5xl font-bold text-white">
        Buy me a Coffee
        <span>
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGZ6MGk4aTR0dmhtbTJvc2FvMnNpdnM0MnpiemF0OGxlYTR2N2tnMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VeHQ1jd7yRema2dwg6/giphy.gif"
            className="giphy-gif-img giphy-img-loaded"
            style={{ background: 'unset' }}
            width={88}
            height="110%"
            alt="coffee gif"
          />
        </span>
      </div>
      <p className="text-2xl text-white">A portal to showcase my projects</p>
      <div className="flex gap-4">
        <button className="bg-amber-600 text-lg font-extrabold font-sans px-5 py-2 border-2 border-black rounded-md shadow-sm cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow active:translate-x-0.5 active:translate-y-0.5 active:shadow-xs transition-transform">
          Read More
        </button>
        <button className="bg-amber-600 text-lg font-extrabold font-sans px-5 py-2 border-2 border-black rounded-md shadow-sm cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow active:translate-x-0.5 active:translate-y-0.5 active:shadow-xs transition-transform">
          Get Started
        </button>
      </div>
    </div>
  );
}
