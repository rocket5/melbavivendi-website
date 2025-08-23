export default function Index() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center font-inter px-4 py-8 sm:px-8 sm:py-12 lg:px-[249px] lg:py-[72px]"
      style={{ 
        background: 'var(--melba-beige)'
      }}
    >
      <div 
        className="w-full max-w-[942px] rounded-2xl shadow-lg flex flex-col lg:flex-row items-start justify-center p-6 sm:p-8 lg:p-9 gap-8 lg:gap-10"
        style={{
          background: 'linear-gradient(128deg, var(--melba-red) 1.32%, var(--melba-brown) 98.8%)',
          boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.25)',
          minHeight: '600px'
        }}
      >
        {/* Left Column */}
        <div 
          className="flex flex-col items-center w-full lg:w-[251px] lg:flex-shrink-0"
          style={{
            gap: '48px'
          }}
        >
          {/* Headshot */}
          <img
            src="/melissa-headshot.png"
            alt="Melissa Rombout"
            className="object-cover w-40 h-40 sm:w-44 sm:h-44 lg:w-[180px] lg:h-[180px]"
            style={{
              borderRadius: '50%',
              boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.25)'
            }}
          />

          {/* Skills Section */}
          <div 
            className="flex flex-col items-start w-full"
            style={{
              gap: '24px'
            }}
          >
            <h2 
              className="font-bold text-lg"
              style={{
                color: 'var(--melba-light-gray)',
                lineHeight: 'normal',
                width: '100%'
              }}
            >
              Expertise
            </h2>
            
            <div className="flex flex-col gap-4 w-full">
              <p 
                className="font-normal text-lg"
                style={{
                  color: 'var(--melba-light-gray)',
                  lineHeight: 'normal'
                }}
              >
                Masterplanning for cultural and heritage sites
              </p>
              
              <p 
                className="font-normal text-lg"
                style={{
                  color: 'var(--melba-light-gray)',
                  lineHeight: 'normal'
                }}
              >
                Exhibition development
              </p>
              
              <p 
                className="font-normal text-lg"
                style={{
                  color: 'var(--melba-light-gray)',
                  lineHeight: 'normal'
                }}
              >
                Cultural resources analysis
              </p>
              
              <p 
                className="font-normal text-lg"
                style={{
                  color: 'var(--melba-light-gray)',
                  lineHeight: 'normal'
                }}
              >
                Strategic messaging and communications planning
              </p>
              
              <p 
                className="font-normal text-lg"
                style={{
                  color: 'var(--melba-light-gray)',
                  lineHeight: 'normal'
                }}
              >
                Audience engagement program development
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div 
          className="flex flex-col items-start w-full lg:w-[578px] lg:flex-shrink-0"
          style={{
            gap: '24px'
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
              className="font-bold text-lg"
              style={{
                color: 'var(--melba-beige)',
                lineHeight: 'normal'
              }}
            >
              Curator / Cultural Analyst
            </h2>
          </div>

          {/* Location */}
          <div 
            className="flex flex-col items-start w-full"
            style={{
              gap: '9px'
            }}
          >
            <p 
              className="font-normal text-lg"
              style={{
                color: 'var(--melba-light-gray)',
                lineHeight: 'normal'
              }}
            >
              📍 Stella, Ontario
            </p>
            
            <p 
              className="font-normal text-lg break-all sm:break-normal"
              style={{
                color: 'var(--melba-light-gray)',
                lineHeight: 'normal'
              }}
            >
              melba@melbavivendi.com
            </p>
          </div>

          {/* Biography */}
          <div 
            className="font-normal text-base sm:text-lg w-full"
            style={{
              color: 'var(--melba-light-gray)',
              lineHeight: '1.5'
            }}
          >
            <p className="mb-4">
              My consulting practice (melbavivendi) provides curatorial and cultural analysis services to archives, museums, libraries and historical sites. My strength is making effective and sensitive use of the whole interpretive universe of each project to create varied, dynamic, accessible and interesting integrative experiences.
            </p>
            
            <p className="mb-4">
              My doctoral research (Amsterdam School for Cultural Analysis) considered 20th-century photographic collage practices as political speech. As an educator, I have taught histories of photography at Queen's University, Carleton University, the University of Ottawa, and Simmons College (Boston).
            </p>
            
            <p className="mb-4">
              From my early career as a specialist in historical and contemporary photography, I have worked across a diverse range of interpretive projects: fine art and visual communication, natural history and cultural heritage, agricultural science and technological innovation. My recent projects have connected climate science and visual culture. I have activated artist/scientist engagement in ocean literacy initiatives and considered the resurgence of "extinct" photographic technologies as medium and metaphor in addressing eco-anxiety.
            </p>
            
            <p>
              My new book, Yousuf Karsh: Life & Work (forthcoming 2025), was commissioned by the Art Canada Institute. The monograph explores the celebrated portrait photographer's artistic choices in the context of image making and image sharing, and critically, the role of the portrait in the contemporary social space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
