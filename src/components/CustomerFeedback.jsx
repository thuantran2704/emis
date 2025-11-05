export default function ShortsSection({ content }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#4b4b8f] mb-2">
          {content.shortsSectionTitle}
        </h2>
        <p className="text-center text-gray-600 mb-10">
          {content.shortsSectionSubtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.shorts.map((short, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="relative aspect-video">
                <img
                //   src={short.thumbnail}
                  alt={short.name}
                  className="w-full h-full object-cover"
                />
                <a
                  href={short.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="none"
                    className="w-12 h-12 opacity-90"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-[#4b4b8f]">
                  {short.name}
                </h3>
                <p className="text-sm text-[#d4af37] mb-2">{short.service}</p>
                <p className="text-gray-600 text-sm">{short.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
