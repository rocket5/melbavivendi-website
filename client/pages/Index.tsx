import { Mail, MapPin } from "lucide-react";
import GlareHover from "@/components/GlareHover";

export default function Index() {
  return (
    <div
      className="min-h-screen flex items-center justify-center font-inter px-4 py-8 sm:px-8 sm:py-12 lg:px-[249px] lg:py-[72px]"
      style={{
        background: 'var(--melba-beige)',
        overscrollBehavior: 'none',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      <div
        className="w-full max-w-[95vw] lg:max-w-[1100px] rounded-2xl flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-6"
        style={{
          background: 'linear-gradient(128deg, var(--melba-red) 1.32%, var(--melba-brown) 98.8%)',
          boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.25)',
          padding: 'min(40px, 5vw) min(29px, 4vw) min(30px, 4vw) min(28px, 4vw)',
          minHeight: '600px'
        }}
      >
        {/* Left Column */}
        <div
          className="flex flex-col items-start lg:items-center w-full lg:w-[260px] xl:w-[283px] lg:flex-shrink-0"
          style={{
            gap: 'min(48px, 6vw)'
          }}
        >
          {/* Headshot with background circle */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-[188px] lg:h-[188px]">
            <div
              className="absolute w-32 h-32 sm:w-40 sm:h-40 lg:w-[188px] lg:h-[188px] rounded-full"
              style={{
                background: 'var(--melba-light-gray)',
                filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25))',
                left: '1px',
                top: '0px'
              }}
            />
            <img
              src="/melissa-headshot.png"
              alt="Melissa Rombout"
              className="absolute object-cover rounded-full w-[120px] h-[120px] sm:w-[152px] sm:h-[152px] lg:w-[180px] lg:h-[180px]"
              style={{
                left: '5px',
                top: '4px'
              }}
            />
          </div>

          {/* Skills Section - Desktop Only */}
          <div
            className="hidden lg:flex flex-col items-start w-full"
            style={{
              gap: '24px'
            }}
          >
            {[
              "Masterplanning for cultural and heritage sites",
              "Exhibition development",
              "Cultural resources analysis",
              "Strategic messaging and communications planning",
              "Audience engagement program development"
            ].map((skill, index) => (
              <GlareHover
                key={index}
                width="100%"
                height="auto"
                background="transparent"
                borderRadius="1rem"
                borderColor="var(--melba-light-gray)"
                glareColor="#EDC285"
                glareOpacity={0.3}
                className="flex flex-col justify-center items-center w-full"
                style={{
                  padding: 'min(8px, 1vw) min(12px, 2vw)',
                  gap: '10px',
                  borderWidth: '1px',
                  boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.25)'
                }}
              >
                <div
                  className="text-center font-normal text-sm sm:text-base lg:text-lg w-full"
                  style={{
                    color: 'var(--melba-light-gray)',
                    lineHeight: 'normal'
                  }}
                >
                  {skill}
                </div>
              </GlareHover>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div
          className="flex flex-col items-start w-full lg:flex-1 lg:min-w-0"
          style={{
            gap: 'min(24px, 3vw)'
          }}
        >
          {/* Name and Title */}
          <div className="w-full">
            <h1
              className="font-bold text-2xl sm:text-3xl lg:text-[32px] mb-2"
              style={{
                color: 'var(--melba-gold)',
                lineHeight: 'normal'
              }}
            >
              Melissa Rombout (PhD)
            </h1>

            <h2
              className="font-bold text-base sm:text-lg mb-6"
              style={{
                color: 'var(--melba-beige)',
                lineHeight: 'normal'
              }}
            >
              Curator / Cultural Analyst
            </h2>

            {/* Location */}
            <div
              className="flex items-center mb-4"
              style={{
                gap: '8px'
              }}
            >
              <MapPin
                size={20}
                className="sm:w-6 sm:h-6"
                style={{
                  color: 'var(--melba-light-gray)',
                  flexShrink: 0
                }}
              />
              <div
                className="font-normal text-base sm:text-lg"
                style={{
                  color: 'var(--melba-light-gray)',
                  lineHeight: 'normal'
                }}
              >
                Stella, Ontario
              </div>
            </div>

            {/* Email */}
            <div
              className="flex items-center mb-6"
              style={{
                gap: '8px'
              }}
            >
              <Mail
                size={20}
                className="sm:w-6 sm:h-6"
                style={{
                  color: 'var(--melba-light-gray)',
                  flexShrink: 0
                }}
              />
              <a
                href="mailto:melba@melbavivendi.com"
                className="font-normal text-base sm:text-lg break-all sm:break-normal hover:underline transition-all duration-200"
                style={{
                  color: 'var(--melba-light-gray)',
                  lineHeight: 'normal'
                }}
              >
                melba@melbavivendi.com
              </a>
            </div>
          </div>

          {/* Biography */}
          <div
            className="font-normal text-sm sm:text-base lg:text-lg w-full flex-1"
            style={{
              color: 'var(--melba-light-gray)',
              lineHeight: '1.4'
            }}
          >
            My consulting practice (melbavivendi) provides curatorial and cultural analysis services to archives, museums, libraries and historical sites. My strength is making effective and sensitive use of the whole interpretive universe of each project to create varied, dynamic, accessible and interesting integrative experiences.
            <br /><br />
            My doctoral research (Amsterdam School for Cultural Analysis) considered 20th-century photographic collage practices as political speech. As an educator, I have taught histories of photography at Queen's University, Carleton University, the University of Ottawa, and Simmons College (Boston).
            <br /><br />
            From my early career as a specialist in historical and contemporary photography, I have worked across a diverse range of interpretive projects: fine art and visual communication, natural history and cultural heritage, agricultural science and technological innovation. My recent projects have connected climate science and visual culture. I have activated artist/scientist engagement in ocean literacy initiatives and considered the resurgence of "extinct" photographic technologies as medium and metaphor in addressing eco-anxiety.
            <br /><br />
            My new book, Yousuf Karsh: Life & Work (forthcoming 2025), was commissioned by the Art Canada Institute. The monograph explores the celebrated portrait photographer's artistic choices in the context of image making and image sharing, and critically, the role of the portrait in the contemporary social space.
          </div>

          {/* Skills Section - Mobile Only */}
          <div
            className="lg:hidden flex flex-col items-start w-full"
            style={{
              gap: '24px',
              paddingTop: '16px'
            }}
          >
            {[
              "Masterplanning for cultural and heritage sites",
              "Exhibition development",
              "Cultural resources analysis",
              "Strategic messaging and communications planning",
              "Audience engagement program development"
            ].map((skill, index) => (
              <GlareHover
                key={`mobile-${index}`}
                width="100%"
                height="auto"
                background="transparent"
                borderRadius="1rem"
                borderColor="var(--melba-light-gray)"
                glareColor="#EDC285"
                glareOpacity={0.3}
                className="flex flex-col justify-center items-center w-full"
                style={{
                  padding: 'min(8px, 1vw) min(12px, 2vw)',
                  gap: '10px',
                  borderWidth: '1px',
                  boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.25)'
                }}
              >
                <div
                  className="text-center font-normal text-sm sm:text-base w-full"
                  style={{
                    color: 'var(--melba-light-gray)',
                    lineHeight: 'normal'
                  }}
                >
                  {skill}
                </div>
              </GlareHover>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
