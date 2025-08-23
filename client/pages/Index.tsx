export default function Index() {
  return (
    <div className="min-h-screen bg-white flex items-start lg:items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-[249px] lg:py-[166px] font-inter">
      <div className="w-full max-w-[942px] bg-[#F4F4F4] rounded-2xl px-6 py-8 sm:px-8 sm:py-10 lg:px-[55px] lg:pt-[36px] lg:pb-[51px] lg:pl-[29px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[29px] lg:items-start">
          {/* Left Column */}
          <div className="flex flex-col items-center gap-6 lg:gap-[29px] lg:w-[251px] flex-shrink-0">
            {/* Name */}
            <h1 className="text-xl font-bold text-black leading-normal text-center">
              Melissa Rombout (PhD)
            </h1>

            {/* Headshot */}
            <img
              src="/melissa-headshot.png"
              alt="Melissa Rombout"
              className="w-[180px] h-[180px] rounded-full object-cover"
            />

            {/* Contact Info */}
            <div className="flex flex-col gap-[9px] text-left self-stretch">
              <p className="text-base text-black leading-normal">Stella, Ontario</p>
              <p className="text-base text-black leading-normal break-words">melba@melbavivendi.com</p>
            </div>

            {/* Skills Section */}
            <div className="flex flex-col gap-6 self-stretch">
              <h2 className="text-lg font-bold text-black leading-normal">
                Curator / Cultural Analyst
              </h2>

              <div className="flex flex-col gap-6">
                <p className="text-base text-black leading-normal">
                  Masterplanning for cultural and heritage sites
                </p>
                <p className="text-base text-black leading-normal">
                  Exhibition development
                </p>
                <p className="text-base text-black leading-normal">
                  Cultural resources analysis
                </p>
                <p className="text-base text-black leading-normal">
                  Strategic messaging and communications planning
                </p>
                <p className="text-base text-black leading-normal">
                  Audience engagement program development
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 lg:w-[578px] lg:h-[632px] flex flex-col justify-between">
            <div className="text-base text-black leading-normal space-y-6 text-left">
              <p>
                My consulting practice (melbavivendi) provides curatorial and cultural analysis services to archives, museums, libraries and historical sites. My strength is making effective and sensitive use of the whole interpretive universe of each project to create varied, dynamic, accessible and interesting integrative experiences.
              </p>

              <p>
                My doctoral research (Amsterdam School for Cultural Analysis) considered 20th-century photographic collage practices as political speech. As an educator, I have taught histories of photography at Queen's University, Carleton University, the University of Ottawa, and Simmons College (Boston).
              </p>

              <p>
                From my early career as a specialist in historical and contemporary photography, I have worked across a diverse range of interpretive projects: fine art and visual communication, natural history and cultural heritage, agricultural science and technological innovation. My recent projects have connected climate science and visual culture. I have activated artist/scientist engagement in ocean literacy initiatives and considered the resurgence of "extinct" photographic technologies as medium and metaphor in addressing eco-anxiety.
              </p>

              <p>
                My new book, Yousuf Karsh: Life & Work (forthcoming 2025), was commissioned by the Art Canada Institute. The monograph explores the celebrated portrait photographer's artistic choices in the context of image making and image sharing, and critically, the role of the portrait in the contemporary social space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
