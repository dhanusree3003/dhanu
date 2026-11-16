import { useId, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CharacterWrapperProps {
  label: string;
  greeting: string;
  children: React.ReactNode;
  className?: string;
}

function InteractiveCharacterStage({
  label,
  greeting,
  children,
  className = '',
}: CharacterWrapperProps) {
  const [activeGreeting, setActiveGreeting] = useState(false);
  const [hopKey, setHopKey] = useState(0);

  const handleInteract = () => {
    setHopKey((k) => k + 1);
    setActiveGreeting(true);
    window.setTimeout(() => {
      setActiveGreeting(false);
    }, 2600);
  };

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      <AnimatePresence>
        {activeGreeting && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.94 }}
            transition={{ duration: 0.18 }}
            className="mb-1.5 px-2.5 py-1 rounded-md bg-white/95 border border-stone-200 shadow-sm text-[11px] font-medium text-[#1C1917] whitespace-nowrap pointer-events-none"
          >
            {greeting}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        key={hopKey}
        type="button"
        onClick={handleInteract}
        aria-label={label}
        whileHover={{ scale: 1.035, y: -3 }}
        whileTap={{ scale: 0.97 }}
        animate={hopKey > 0 ? { y: [0, -10, 0] } : undefined}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="bg-transparent border-0 p-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E3A8A] rounded-lg"
      >
        {children}
      </motion.button>
    </div>
  );
}

/**
 * 1. Homepage Hero: Male & Female College Students in stylish outfits with backpacks & books,
 * walking & waving cheerfully.
 */
export function CampusDuoWalking({ className = '' }: { className?: string }) {
  const uid = useId().replace(/:/g, '');

  return (
    <InteractiveCharacterStage
      label="Animated college students walking and waving on campus"
      greeting="Welcome to Sri Krishna College, Coimbatore!"
      className={className}
    >
      <svg
        viewBox="0 0 280 180"
        className="w-56 sm:w-64 lg:w-72 h-auto overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`${uid}-skin-m`} cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#F2BA93" />
            <stop offset="60%" stopColor="#DC9B70" />
            <stop offset="100%" stopColor="#B8774E" />
          </radialGradient>
          <radialGradient id={`${uid}-skin-f`} cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#F8C8A4" />
            <stop offset="60%" stopColor="#E3A57D" />
            <stop offset="100%" stopColor="#BF8058" />
          </radialGradient>
          <linearGradient id={`${uid}-hair`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B2A26" />
            <stop offset="50%" stopColor="#231917" />
            <stop offset="100%" stopColor="#120D0C" />
          </linearGradient>
          <linearGradient id={`${uid}-jacket`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2D52B8" />
            <stop offset="55%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#13265E" />
          </linearGradient>
          <linearGradient id={`${uid}-cardigan`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D97736" />
            <stop offset="60%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#7C2D12" />
          </linearGradient>
          <linearGradient id={`${uid}-denim`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B4D6B" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>
          <linearGradient id={`${uid}-pack`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#57534E" />
            <stop offset="100%" stopColor="#292524" />
          </linearGradient>
          <linearGradient id={`${uid}-book`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#BE185D" />
            <stop offset="100%" stopColor="#831843" />
          </linearGradient>
        </defs>

        {/* Ground Ambient Occlusion Shadows */}
        <ellipse cx="88" cy="168" rx="34" ry="6" fill="#1C1917" fillOpacity="0.11" />
        <ellipse cx="192" cy="168" rx="34" ry="6" fill="#1C1917" fillOpacity="0.11" />

        {/* === LEFT CHARACTER: Male Student Waving & Walking === */}
        <g className="skc-walk-bob">
          {/* Backpack peeking behind shoulders */}
          <rect x="58" y="76" width="24" height="36" rx="9" fill={`url(#${uid}-pack)`} />
          <rect x="61" y="82" width="18" height="10" rx="4" fill="#78716C" fillOpacity="0.45" />

          {/* Legs */}
          <g className="skc-walk-a">
            <rect x="74" y="118" width="12" height="36" rx="6" fill={`url(#${uid}-denim)`} />
            <ellipse cx="81" cy="155" rx="9" ry="5" fill="#F5F5F4" />
            <path d="M72 155 Q81 159 90 155 L89 158 Q81 161 73 158 Z" fill="#1E3A8A" />
          </g>
          <g className="skc-walk-b">
            <rect x="91" y="118" width="12" height="36" rx="6" fill={`url(#${uid}-denim)`} />
            <ellipse cx="98" cy="155" rx="9" ry="5" fill="#F5F5F4" />
            <path d="M89 155 Q98 159 107 155 L106 158 Q98 161 90 158 Z" fill="#1E3A8A" />
          </g>

          {/* Torso Varsity Jacket + Tee */}
          <rect x="68" y="73" width="40" height="49" rx="14" fill={`url(#${uid}-jacket)`} />
          <path d="M82 74 L94 74 L92 118 L84 118 Z" fill="#FAF8F4" />
          {/* Backpack Straps */}
          <path d="M74 75 C73 88 73 102 76 114" stroke="#292524" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M102 75 C103 88 103 102 100 114" stroke="#292524" strokeWidth="3.5" strokeLinecap="round" fill="none" />

          {/* Left Arm carrying book */}
          <path d="M68 80 C61 92 61 104 68 112" stroke={`url(#${uid}-jacket)`} strokeWidth="10" strokeLinecap="round" fill="none" />
          <circle cx="69" cy="113" r="5" fill={`url(#${uid}-skin-m)`} />
          <rect x="56" y="106" width="18" height="12" rx="2.5" transform="rotate(-12 65 112)" fill="#0F766E" />
          <rect x="58" y="109" width="15" height="2.5" transform="rotate(-12 65 112)" fill="#FAF8F4" />

          {/* Right Waving Arm */}
          <g className="skc-wave">
            <path d="M107 80 C118 70 123 58 122 46" stroke={`url(#${uid}-jacket)`} strokeWidth="10" strokeLinecap="round" fill="none" />
            <circle cx="122" cy="43" r="5.5" fill={`url(#${uid}-skin-m)`} />
          </g>

          {/* Head & Pixar Face */}
          <g className="skc-head-nod">
            <rect x="83" y="62" width="10" height="13" rx="4" fill={`url(#${uid}-skin-m)`} />
            <ellipse cx="67" cy="46" rx="4" ry="5.5" fill={`url(#${uid}-skin-m)`} />
            <ellipse cx="109" cy="46" rx="4" ry="5.5" fill={`url(#${uid}-skin-m)`} />
            <ellipse cx="88" cy="44" rx="21" ry="22" fill={`url(#${uid}-skin-m)`} />
            {/* Cheek blush */}
            <ellipse cx="75" cy="50" rx="4" ry="2.2" fill="#E11D48" fillOpacity="0.16" />
            <ellipse cx="101" cy="50" rx="4" ry="2.2" fill="#E11D48" fillOpacity="0.16" />
            {/* Glossy Eyes with Blink */}
            <g className="skc-blink">
              <ellipse cx="80" cy="44" rx="4.2" ry="4.8" fill="#FFFFFF" />
              <circle cx="80.8" cy="44.3" r="2.7" fill="#291E1A" />
              <circle cx="81.6" cy="43.2" r="1" fill="#FFFFFF" />
              <circle cx="79.5" cy="45.6" r="0.5" fill="#FFFFFF" />
            </g>
            <g className="skc-blink">
              <ellipse cx="96" cy="44" rx="4.2" ry="4.8" fill="#FFFFFF" />
              <circle cx="96.8" cy="44.3" r="2.7" fill="#291E1A" />
              <circle cx="97.6" cy="43.2" r="1" fill="#FFFFFF" />
              <circle cx="95.5" cy="45.6" r="0.5" fill="#FFFFFF" />
            </g>
            {/* Eyebrows & Smile */}
            <path d="M75 37.5 Q80 35.5 84.5 37.5" stroke="#231917" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <path d="M91.5 37.5 Q96 35.5 101 37.5" stroke="#231917" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <ellipse cx="88" cy="48.5" rx="2" ry="1.4" fill="#C9835B" />
            <path d="M81 54 Q88 59.5 95 54" stroke="#6B2E22" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Sculpted Hair */}
            <path
              d="M66 42 C65 24 78 16 91 18 C104 19 111 29 110 42 C106 32 98 28 89 29 C79 30 71 33 66 42 Z"
              fill={`url(#${uid}-hair)`}
            />
            <path d="M76 23 Q89 19 99 24" stroke="#685049" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.55" />
          </g>
        </g>

        {/* === RIGHT CHARACTER: Female Student Walking with Backpack & Books === */}
        <g className="skc-float-delayed">
          {/* Stylish Dusty Rose Backpack */}
          <rect x="196" y="75" width="24" height="36" rx="10" fill="#9F1239" />
          <rect x="200" y="83" width="16" height="10" rx="4" fill="#FB7185" fillOpacity="0.3" />

          {/* Legs */}
          <g className="skc-walk-b">
            <rect x="179" y="119" width="11" height="35" rx="5.5" fill={`url(#${uid}-denim)`} />
            <ellipse cx="184" cy="155" rx="8.5" ry="4.8" fill="#F5F5F4" />
            <path d="M176 155 Q184 159 192 155 L191 158 Q184 161 177 158 Z" fill="#B45309" />
          </g>
          <g className="skc-walk-a">
            <rect x="195" y="119" width="11" height="35" rx="5.5" fill={`url(#${uid}-denim)`} />
            <ellipse cx="200" cy="155" rx="8.5" ry="4.8" fill="#F5F5F4" />
            <path d="M192 155 Q200 159 208 155 L207 158 Q200 161 193 158 Z" fill="#B45309" />
          </g>

          {/* Torso Cardigan & Cream Top */}
          <rect x="174" y="74" width="37" height="48" rx="14" fill={`url(#${uid}-cardigan)`} />
          <path d="M187 75 L198 75 L197 119 L188 119 Z" fill="#FEF3C7" />
          {/* Backpack straps */}
          <path d="M180 76 C179 88 179 102 182 114" stroke="#881337" strokeWidth="3.2" strokeLinecap="round" fill="none" />
          <path d="M205 76 C206 88 206 102 203 114" stroke="#881337" strokeWidth="3.2" strokeLinecap="round" fill="none" />

          {/* Arms holding stacked books */}
          <path d="M175 82 C164 91 163 103 173 108" stroke={`url(#${uid}-cardigan)`} strokeWidth="9.5" strokeLinecap="round" fill="none" />
          <path d="M209 82 C214 94 209 106 198 108" stroke={`url(#${uid}-cardigan)`} strokeWidth="9.5" strokeLinecap="round" fill="none" />
          <rect x="167" y="101" width="34" height="9" rx="2.5" fill={`url(#${uid}-book)`} />
          <rect x="169" y="94" width="32" height="8" rx="2.5" fill="#1E3A8A" />
          <rect x="171" y="96.5" width="28" height="2" fill="#FAF8F4" opacity="0.85" />
          <circle cx="174" cy="108" r="4.5" fill={`url(#${uid}-skin-f)`} />
          <circle cx="198" cy="108" r="4.5" fill={`url(#${uid}-skin-f)`} />

          {/* Head & Long Flowing Hair */}
          <g className="skc-head-nod">
            <path d="M171 38 C166 56 168 78 176 86 L209 86 C216 76 218 54 213 38 Z" fill={`url(#${uid}-hair)`} />
            <rect x="187.5" y="63" width="9" height="12" rx="4" fill={`url(#${uid}-skin-f)`} />
            <ellipse cx="173" cy="47" rx="3.6" ry="5" fill={`url(#${uid}-skin-f)`} />
            <ellipse cx="211" cy="47" rx="3.6" ry="5" fill={`url(#${uid}-skin-f)`} />
            <ellipse cx="192" cy="45" rx="19.5" ry="20.5" fill={`url(#${uid}-skin-f)`} />
            {/* Cheek blush */}
            <ellipse cx="180" cy="51" rx="3.8" ry="2" fill="#E11D48" fillOpacity="0.18" />
            <ellipse cx="204" cy="51" rx="3.8" ry="2" fill="#E11D48" fillOpacity="0.18" />
            {/* Eyes with delayed blink */}
            <g className="skc-blink-delayed">
              <ellipse cx="184.5" cy="45" rx="4" ry="4.6" fill="#FFFFFF" />
              <circle cx="184" cy="45.2" r="2.6" fill="#291E1A" />
              <circle cx="184.8" cy="44.1" r="1" fill="#FFFFFF" />
              <circle cx="182.8" cy="46.4" r="0.5" fill="#FFFFFF" />
            </g>
            <g className="skc-blink-delayed">
              <ellipse cx="199.5" cy="45" rx="4" ry="4.6" fill="#FFFFFF" />
              <circle cx="199" cy="45.2" r="2.6" fill="#291E1A" />
              <circle cx="199.8" cy="44.1" r="1" fill="#FFFFFF" />
              <circle cx="197.8" cy="46.4" r="0.5" fill="#FFFFFF" />
            </g>
            <path d="M180 38.5 Q184.5 36.8 189 38.5" stroke="#231917" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            <path d="M195 38.5 Q199.5 36.8 204 38.5" stroke="#231917" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            <ellipse cx="192" cy="49.5" rx="1.8" ry="1.3" fill="#D18E67" />
            <path d="M185.5 54.5 Q192 59.5 198.5 54.5" stroke="#7F1D1D" strokeWidth="1.9" strokeLinecap="round" fill="none" />
            {/* Front Bangs & Hair Highlight */}
            <path
              d="M172 42 C173 25 186 20 194 21 C204 22 212 30 212 42 C205 33 197 30 189 33 C181 36 176 38 172 42 Z"
              fill={`url(#${uid}-hair)`}
            />
            <path d="M181 26 Q192 22 203 27" stroke="#685049" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.55" />
          </g>
        </g>
      </svg>
    </InteractiveCharacterStage>
  );
}

/**
 * 2. Academics & Departments: Studying & Typing on Laptop Student
 */
export function StudyingLaptopStudent({ className = '' }: { className?: string }) {
  const uid = useId().replace(/:/g, '');

  return (
    <InteractiveCharacterStage
      label="Animated student studying and typing on a laptop"
      greeting="Exploring B.E., B.Tech. & Research Syllabi"
      className={className}
    >
      <svg
        viewBox="0 0 210 155"
        className="w-44 sm:w-52 h-auto overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`${uid}-skin`} cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#F6C49F" />
            <stop offset="65%" stopColor="#DE9F76" />
            <stop offset="100%" stopColor="#B87A54" />
          </radialGradient>
          <linearGradient id={`${uid}-hair`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B2924" />
            <stop offset="100%" stopColor="#160F0D" />
          </linearGradient>
          <linearGradient id={`${uid}-sweater`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0F766E" />
            <stop offset="100%" stopColor="#115E59" />
          </linearGradient>
          <linearGradient id={`${uid}-laptop`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E7E5E4" />
            <stop offset="100%" stopColor="#A8A29E" />
          </linearGradient>
          <linearGradient id={`${uid}-glow`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <ellipse cx="105" cy="144" rx="68" ry="7" fill="#1C1917" fillOpacity="0.1" />

        {/* Stack of Reference Textbooks on left */}
        <rect x="22" y="126" width="38" height="10" rx="2.5" fill="#1E3A8A" />
        <rect x="25" y="117" width="34" height="9" rx="2.5" fill="#B45309" />
        <rect x="28" y="119.5" width="28" height="2" fill="#FAF8F4" opacity="0.8" />

        {/* Study Character */}
        <g className="skc-float">
          {/* Torso */}
          <rect x="76" y="74" width="52" height="52" rx="16" fill={`url(#${uid}-sweater)`} />
          <path d="M94 74 L110 74 L106 86 L98 86 Z" fill="#FAF8F4" />

          {/* Head with gentle nod */}
          <g className="skc-head-nod">
            <circle cx="102" cy="24" r="10" fill={`url(#${uid}-hair)`} />
            <rect x="97" y="61" width="10" height="15" rx="4" fill={`url(#${uid}-skin)`} />
            <ellipse cx="83" cy="46" rx="3.8" ry="5.2" fill={`url(#${uid}-skin)`} />
            <ellipse cx="121" cy="46" rx="3.8" ry="5.2" fill={`url(#${uid}-skin)`} />
            <ellipse cx="102" cy="45" rx="20" ry="21" fill={`url(#${uid}-skin)`} />
            <ellipse cx="89" cy="51" rx="3.8" ry="2" fill="#E11D48" fillOpacity="0.16" />
            <ellipse cx="115" cy="51" rx="3.8" ry="2" fill="#E11D48" fillOpacity="0.16" />

            {/* Eyes */}
            <g className="skc-blink">
              <ellipse cx="94" cy="45" rx="4" ry="4.5" fill="#FFFFFF" />
              <circle cx="94.3" cy="45.6" r="2.5" fill="#1F1612" />
              <circle cx="95" cy="44.3" r="0.9" fill="#FFFFFF" />
            </g>
            <g className="skc-blink">
              <ellipse cx="110" cy="45" rx="4" ry="4.5" fill="#FFFFFF" />
              <circle cx="110.3" cy="45.6" r="2.5" fill="#1F1612" />
              <circle cx="111" cy="44.3" r="0.9" fill="#FFFFFF" />
            </g>

            {/* Stylish Round Glasses */}
            <circle cx="94" cy="45" r="6.8" stroke="#57534E" strokeWidth="1.6" fill="none" />
            <circle cx="110" cy="45" r="6.8" stroke="#57534E" strokeWidth="1.6" fill="none" />
            <line x1="100.8" y1="45" x2="103.2" y2="45" stroke="#57534E" strokeWidth="1.6" />

            <path d="M89.5 37 Q94 35.5 98 37" stroke="#231917" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M106 37 Q110 35.5 114.5 37" stroke="#231917" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M96.5 54 Q102 58 107.5 54" stroke="#6B2E22" strokeWidth="1.8" strokeLinecap="round" fill="none" />

            {/* Hair Top */}
            <path
              d="M82 41 C83 25 94 21 102 21 C111 21 121 26 122 41 C116 32 108 30 102 32 C95 30 88 33 82 41 Z"
              fill={`url(#${uid}-hair)`}
            />
          </g>

          {/* Typing Arms */}
          <g className="skc-type-l">
            <path d="M79 84 C68 95 72 111 87 115" stroke={`url(#${uid}-sweater)`} strokeWidth="9.5" strokeLinecap="round" fill="none" />
            <circle cx="88" cy="115" r="4.5" fill={`url(#${uid}-skin)`} />
          </g>
          <g className="skc-type-r">
            <path d="M125 84 C136 95 132 111 117 115" stroke={`url(#${uid}-sweater)`} strokeWidth="9.5" strokeLinecap="round" fill="none" />
            <circle cx="116" cy="115" r="4.5" fill={`url(#${uid}-skin)`} />
          </g>
        </g>

        {/* Sleek Open Laptop in Foreground */}
        <polygon points="75,92 135,92 131,126 79,126" fill={`url(#${uid}-laptop)`} stroke="#78716C" strokeWidth="1" />
        <polygon points="80,96 130,96 127,122 83,122" fill={`url(#${uid}-glow)`} />
        <circle cx="105" cy="109" r="3.5" fill="#FFFFFF" fillOpacity="0.6" />
        <rect x="68" y="126" width="74" height="7" rx="3" fill="#78716C" />

        {/* Warm Study Mug on right */}
        <rect x="155" y="119" width="14" height="16" rx="3" fill="#FAF8F4" stroke="#A8A29E" strokeWidth="1.2" />
        <path d="M169 123 C174 123 174 131 169 131" stroke="#A8A29E" strokeWidth="2" fill="none" />
      </svg>
    </InteractiveCharacterStage>
  );
}

/**
 * 3. Campus Life: Two Students Chatting Cheerfully with Notebooks & Backpacks
 */
export function CampusChattingStudents({ className = '' }: { className?: string }) {
  const uid = useId().replace(/:/g, '');

  return (
    <InteractiveCharacterStage
      label="Animated students chatting on campus"
      greeting="Life at the 45-Acre Kuniamuthur Campus"
      className={className}
    >
      <svg
        viewBox="0 0 260 165"
        className="w-52 sm:w-60 h-auto overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`${uid}-skin-1`} cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#F2BA93" />
            <stop offset="100%" stopColor="#B8774E" />
          </radialGradient>
          <radialGradient id={`${uid}-skin-2`} cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#F9CBA8" />
            <stop offset="100%" stopColor="#C18159" />
          </radialGradient>
          <linearGradient id={`${uid}-hoodie`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9F1239" />
            <stop offset="100%" stopColor="#6D0E29" />
          </linearGradient>
          <linearGradient id={`${uid}-sage`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3F6212" />
            <stop offset="100%" stopColor="#1A2E05" />
          </linearGradient>
          <linearGradient id={`${uid}-hair`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B2924" />
            <stop offset="100%" stopColor="#120D0C" />
          </linearGradient>
        </defs>

        <ellipse cx="78" cy="154" rx="30" ry="5.5" fill="#1C1917" fillOpacity="0.1" />
        <ellipse cx="180" cy="154" rx="30" ry="5.5" fill="#1C1917" fillOpacity="0.1" />

        {/* Left Student in Burgundy Hoodie */}
        <g className="skc-float">
          <rect x="64" y="112" width="11" height="36" rx="5.5" fill="#292524" />
          <rect x="80" y="112" width="11" height="36" rx="5.5" fill="#292524" />
          <ellipse cx="70" cy="149" rx="8" ry="4.5" fill="#FAF8F4" />
          <ellipse cx="86" cy="149" rx="8" ry="4.5" fill="#FAF8F4" />

          <rect x="59" y="69" width="38" height="46" rx="13" fill={`url(#${uid}-hoodie)`} />
          <path d="M72 72 L84 72 L82 90 L74 90 Z" fill="#FAF8F4" opacity="0.2" />

          {/* Gesturing Hand while chatting */}
          <g className="skc-wave">
            <path d="M96 78 C108 82 115 74 118 66" stroke={`url(#${uid}-hoodie)`} strokeWidth="9" strokeLinecap="round" fill="none" />
            <circle cx="118" cy="64" r="4.8" fill={`url(#${uid}-skin-1)`} />
          </g>
          <path d="M59 78 C51 89 53 102 63 104" stroke={`url(#${uid}-hoodie)`} strokeWidth="9" strokeLinecap="round" fill="none" />
          <rect x="46" y="95" width="17" height="13" rx="2.5" fill="#1E3A8A" />

          <g className="skc-head-nod">
            <rect x="73" y="58" width="9" height="12" rx="4" fill={`url(#${uid}-skin-1)`} />
            <ellipse cx="78" cy="42" rx="19" ry="20" fill={`url(#${uid}-skin-1)`} />
            <g className="skc-blink">
              <ellipse cx="72" cy="42" rx="3.8" ry="4.3" fill="#FFFFFF" />
              <circle cx="73" cy="42.2" r="2.4" fill="#231917" />
              <circle cx="73.8" cy="41.2" r="0.9" fill="#FFFFFF" />
            </g>
            <g className="skc-blink">
              <ellipse cx="86" cy="42" rx="3.8" ry="4.3" fill="#FFFFFF" />
              <circle cx="87" cy="42.2" r="2.4" fill="#231917" />
              <circle cx="87.8" cy="41.2" r="0.9" fill="#FFFFFF" />
            </g>
            <path d="M72 51 Q79 56 86 51" stroke="#6B2E22" strokeWidth="1.9" strokeLinecap="round" fill="none" />
            <path d="M59 38 C60 22 72 17 82 18 C92 19 98 28 97 38 C91 29 81 28 73 30 C66 32 62 34 59 38 Z" fill={`url(#${uid}-hair)`} />
          </g>
        </g>

        {/* Subtle Floating Chat Rhythm Sparks */}
        <circle cx="126" cy="46" r="2.5" fill="#1E3A8A" className="skc-sparkle" />
        <circle cx="134" cy="40" r="3" fill="#B45309" className="skc-sparkle" />

        {/* Right Student in Olive/Sage Jacket */}
        <g className="skc-float-delayed">
          <rect x="167" y="112" width="11" height="36" rx="5.5" fill="#1E293B" />
          <rect x="183" y="112" width="11" height="36" rx="5.5" fill="#1E293B" />
          <ellipse cx="172" cy="149" rx="8" ry="4.5" fill="#FAF8F4" />
          <ellipse cx="188" cy="149" rx="8" ry="4.5" fill="#FAF8F4" />

          <rect x="162" y="70" width="37" height="46" rx="13" fill={`url(#${uid}-sage)`} />
          <path d="M174 71 L186 71 L185 114 L175 114 Z" fill="#FAF8F4" />

          {/* Arms holding sling notebook */}
          <path d="M162 79 C153 89 154 100 163 103" stroke={`url(#${uid}-sage)`} strokeWidth="9" strokeLinecap="round" fill="none" />
          <path d="M198 79 C206 89 204 102 195 104" stroke={`url(#${uid}-sage)`} strokeWidth="9" strokeLinecap="round" fill="none" />
          <circle cx="163" cy="103" r="4.5" fill={`url(#${uid}-skin-2)`} />
          <circle cx="195" cy="104" r="4.5" fill={`url(#${uid}-skin-2)`} />

          <g className="skc-head-nod">
            <path d="M161 36 C157 54 159 74 166 81 L195 81 C201 73 203 52 199 36 Z" fill={`url(#${uid}-hair)`} />
            <rect x="176" y="59" width="9" height="12" rx="4" fill={`url(#${uid}-skin-2)`} />
            <ellipse cx="180" cy="43" rx="18.5" ry="19.5" fill={`url(#${uid}-skin-2)`} />
            <g className="skc-blink-delayed">
              <ellipse cx="173" cy="43" rx="3.8" ry="4.3" fill="#FFFFFF" />
              <circle cx="172.3" cy="43.2" r="2.4" fill="#231917" />
              <circle cx="173" cy="42.2" r="0.9" fill="#FFFFFF" />
            </g>
            <g className="skc-blink-delayed">
              <ellipse cx="187" cy="43" rx="3.8" ry="4.3" fill="#FFFFFF" />
              <circle cx="186.3" cy="43.2" r="2.4" fill="#231917" />
              <circle cx="187" cy="42.2" r="0.9" fill="#FFFFFF" />
            </g>
            <path d="M173 52 Q180 57.5 187 52" stroke="#7F1D1D" strokeWidth="1.9" strokeLinecap="round" fill="none" />
            <path d="M161 39 C163 23 175 19 183 19 C192 20 199 28 199 39 C192 31 184 29 176 32 C169 34 165 36 161 39 Z" fill={`url(#${uid}-hair)`} />
          </g>
        </g>
      </svg>
    </InteractiveCharacterStage>
  );
}

/**
 * 4. Placements Section: Formal Placement Students carrying laptops, resumes & celebrating job offers
 */
export function PlacementFormalDuo({ className = '' }: { className?: string }) {
  const uid = useId().replace(/:/g, '');

  return (
    <InteractiveCharacterStage
      label="Animated placement students in formal attire celebrating job offers"
      greeting="96.4% Placed · 340+ Recruiting Partners!"
      className={className}
    >
      <svg
        viewBox="0 0 280 175"
        className="w-56 sm:w-64 lg:w-72 h-auto overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`${uid}-skin-m`} cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#F2BA93" />
            <stop offset="100%" stopColor="#B8774E" />
          </radialGradient>
          <radialGradient id={`${uid}-skin-f`} cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#F8C8A4" />
            <stop offset="100%" stopColor="#BF8058" />
          </radialGradient>
          <linearGradient id={`${uid}-suit`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id={`${uid}-blazer-f`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2D52B8" />
            <stop offset="100%" stopColor="#172554" />
          </linearGradient>
          <linearGradient id={`${uid}-hair`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B2924" />
            <stop offset="100%" stopColor="#120D0C" />
          </linearGradient>
        </defs>

        <ellipse cx="86" cy="164" rx="34" ry="6" fill="#1C1917" fillOpacity="0.11" />
        <ellipse cx="194" cy="164" rx="34" ry="6" fill="#1C1917" fillOpacity="0.11" />

        {/* Celebratory Sparkles */}
        <path d="M140 22 L143 29 L150 32 L143 35 L140 42 L137 35 L130 32 L137 29 Z" fill="#D97706" className="skc-sparkle" />
        <circle cx="52" cy="30" r="3" fill="#1E3A8A" className="skc-sparkle" />
        <circle cx="228" cy="28" r="3" fill="#B45309" className="skc-sparkle" />

        {/* === LEFT: Male Student in Charcoal Blazer & Tie holding Laptop + Offer Folder === */}
        <g className="skc-float">
          <rect x="72" y="115" width="12" height="38" rx="5" fill={`url(#${uid}-suit)`} />
          <rect x="89" y="115" width="12" height="38" rx="5" fill={`url(#${uid}-suit)`} />
          <ellipse cx="78" cy="154" rx="8.5" ry="4.5" fill="#1C1917" />
          <ellipse cx="95" cy="154" rx="8.5" ry="4.5" fill="#1C1917" />

          {/* Suit Jacket + White Shirt + Crimson Tie */}
          <rect x="66" y="70" width="41" height="49" rx="12" fill={`url(#${uid}-suit)`} />
          <polygon points="81,70 92,70 89,97 84,97" fill="#FFFFFF" />
          <polygon points="85,73 88,73 89,93 86.5,96 84,93" fill="#9F1239" />

          {/* Left Arm holding Sleek Laptop */}
          <path d="M67 78 C56 89 56 102 65 107" stroke={`url(#${uid}-suit)`} strokeWidth="9.5" strokeLinecap="round" fill="none" />
          <rect x="48" y="96" width="24" height="17" rx="2.5" fill="#CBD5E1" stroke="#64748B" strokeWidth="1" />
          <circle cx="60" cy="104.5" r="2" fill="#475569" />
          <circle cx="65" cy="107" r="4.5" fill={`url(#${uid}-skin-m)`} />

          {/* Right Arm Celebrating with Job Offer Letter */}
          <g className="skc-wave">
            <path d="M106 78 C116 68 122 57 121 44" stroke={`url(#${uid}-suit)`} strokeWidth="9.5" strokeLinecap="round" fill="none" />
            <rect x="115" y="25" width="16" height="20" rx="2" transform="rotate(10 123 35)" fill="#FFFFFF" stroke="#D97706" strokeWidth="1.2" />
            <line x1="119" y1="31" x2="127" y2="32" stroke="#1E3A8A" strokeWidth="1.5" />
            <line x1="119" y1="35" x2="126" y2="36" stroke="#78716C" strokeWidth="1.2" />
            <circle cx="121" cy="43" r="4.8" fill={`url(#${uid}-skin-m)`} />
          </g>

          {/* Head */}
          <g className="skc-head-nod">
            <rect x="82" y="59" width="9" height="12" rx="4" fill={`url(#${uid}-skin-m)`} />
            <ellipse cx="86.5" cy="43" rx="19.5" ry="20.5" fill={`url(#${uid}-skin-m)`} />
            <g className="skc-blink">
              <ellipse cx="79" cy="43" rx="4" ry="4.5" fill="#FFFFFF" />
              <circle cx="79.5" cy="43.3" r="2.5" fill="#1F1612" />
              <circle cx="80.3" cy="42.2" r="0.9" fill="#FFFFFF" />
            </g>
            <g className="skc-blink">
              <ellipse cx="94" cy="43" rx="4" ry="4.5" fill="#FFFFFF" />
              <circle cx="94.5" cy="43.3" r="2.5" fill="#1F1612" />
              <circle cx="95.3" cy="42.2" r="0.9" fill="#FFFFFF" />
            </g>
            <path d="M74.5 36.5 Q79 34.5 83.5 36.5" stroke="#231917" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            <path d="M89.5 36.5 Q94 34.5 98.5 36.5" stroke="#231917" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            <path d="M80 52 Q86.5 57.5 93 52" stroke="#6B2E22" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M67 39 C68 22 80 17 89 18 C100 19 106 28 106 39 C100 30 92 27 83 29 C75 31 71 34 67 39 Z" fill={`url(#${uid}-hair)`} />
          </g>
        </g>

        {/* === RIGHT: Female Placement Student in Indigo Blazer holding Resume Folio === */}
        <g className="skc-float-delayed">
          <rect x="181" y="115" width="11" height="38" rx="5" fill="#1E293B" />
          <rect x="197" y="115" width="11" height="38" rx="5" fill="#1E293B" />
          <ellipse cx="186" cy="154" rx="8" ry="4.5" fill="#1C1917" />
          <ellipse cx="202" cy="154" rx="8" ry="4.5" fill="#1C1917" />

          <rect x="176" y="71" width="37" height="48" rx="12" fill={`url(#${uid}-blazer-f)`} />
          <polygon points="189,71 200,71 198,99 191,99" fill="#FFFFFF" />

          {/* Left Celebrating Wave */}
          <g className="skc-wave">
            <path d="M177 79 C165 69 161 57 162 45" stroke={`url(#${uid}-blazer-f)`} strokeWidth="9" strokeLinecap="round" fill="none" />
            <circle cx="162" cy="43" r="4.8" fill={`url(#${uid}-skin-f)`} />
          </g>

          {/* Right Arm holding Resume Portfolio */}
          <path d="M212 79 C220 91 218 104 209 108" stroke={`url(#${uid}-blazer-f)`} strokeWidth="9" strokeLinecap="round" fill="none" />
          <rect x="199" y="98" width="21" height="26" rx="2.5" fill="#78350F" />
          <rect x="203" y="103" width="13" height="2" fill="#FDE68A" />
          <circle cx="209" cy="108" r="4.5" fill={`url(#${uid}-skin-f)`} />

          {/* Head */}
          <g className="skc-head-nod">
            <path d="M174 37 C169 54 171 75 178 82 L211 82 C217 73 219 52 214 37 Z" fill={`url(#${uid}-hair)`} />
            <rect x="190" y="60" width="9" height="12" rx="4" fill={`url(#${uid}-skin-f)`} />
            <ellipse cx="194.5" cy="44" rx="19" ry="20" fill={`url(#${uid}-skin-f)`} />
            <g className="skc-blink-delayed">
              <ellipse cx="187" cy="44" rx="3.9" ry="4.4" fill="#FFFFFF" />
              <circle cx="186.5" cy="44.2" r="2.5" fill="#1F1612" />
              <circle cx="187.3" cy="43.2" r="0.9" fill="#FFFFFF" />
            </g>
            <g className="skc-blink-delayed">
              <ellipse cx="202" cy="44" rx="3.9" ry="4.4" fill="#FFFFFF" />
              <circle cx="201.5" cy="44.2" r="2.5" fill="#1F1612" />
              <circle cx="202.3" cy="43.2" r="0.9" fill="#FFFFFF" />
            </g>
            <path d="M188 53 Q194.5 58.5 201 53" stroke="#7F1D1D" strokeWidth="1.9" strokeLinecap="round" fill="none" />
            <path d="M175 40 C176 23 188 19 196 19 C205 20 213 28 214 40 C207 32 198 30 190 33 C182 35 178 37 175 40 Z" fill={`url(#${uid}-hair)`} />
          </g>
        </g>
      </svg>
    </InteractiveCharacterStage>
  );
}

/**
 * 5. About Us / Heritage Section: Graduation Students wearing gowns, mortarboard caps & holding certificates
 */
export function GraduationCelebrationDuo({ className = '' }: { className?: string }) {
  const uid = useId().replace(/:/g, '');

  return (
    <InteractiveCharacterStage
      label="Animated graduating students wearing gowns and caps holding certificates"
      greeting="Class of 2026 Convocation Pride!"
      className={className}
    >
      <svg
        viewBox="0 0 265 180"
        className="w-56 sm:w-64 h-auto overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`${uid}-skin-1`} cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#F6C49F" />
            <stop offset="100%" stopColor="#B87A54" />
          </radialGradient>
          <radialGradient id={`${uid}-skin-2`} cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#F2BA93" />
            <stop offset="100%" stopColor="#B8774E" />
          </radialGradient>
          <linearGradient id={`${uid}-gown`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="55%" stopColor="#172554" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id={`${uid}-stole`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id={`${uid}-hair`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B2924" />
            <stop offset="100%" stopColor="#120D0C" />
          </linearGradient>
        </defs>

        <ellipse cx="82" cy="168" rx="34" ry="6" fill="#1C1917" fillOpacity="0.11" />
        <ellipse cx="182" cy="168" rx="34" ry="6" fill="#1C1917" fillOpacity="0.11" />

        {/* Gold Confetti Sparkles */}
        <path d="M132 18 L135 24 L141 27 L135 30 L132 36 L129 30 L123 27 L129 24 Z" fill="#D97706" className="skc-sparkle" />
        <circle cx="48" cy="24" r="2.8" fill="#1E3A8A" className="skc-sparkle" />
        <circle cx="215" cy="22" r="2.8" fill="#B45309" className="skc-sparkle" />

        {/* === LEFT: Female Graduate Holding Rolled Degree Certificate === */}
        <g className="skc-float">
          {/* Flowing Graduation Gown */}
          <path d="M62 76 L102 76 L111 157 L53 157 Z" fill={`url(#${uid}-gown)`} />
          {/* Gold Academic Stole */}
          <path d="M72 76 L79 76 L76 132 L68 132 Z" fill={`url(#${uid}-stole)`} />
          <path d="M85 76 L92 76 L96 132 L88 132 Z" fill={`url(#${uid}-stole)`} />
          <ellipse cx="72" cy="160" rx="7" ry="4" fill="#1C1917" />
          <ellipse cx="92" cy="160" rx="7" ry="4" fill="#1C1917" />

          {/* Arms holding rolled Diploma Certificate */}
          <path d="M64 82 C54 94 58 108 71 112" stroke={`url(#${uid}-gown)`} strokeWidth="10" strokeLinecap="round" fill="none" />
          <path d="M100 82 C108 94 103 108 91 112" stroke={`url(#${uid}-gown)`} strokeWidth="10" strokeLinecap="round" fill="none" />
          {/* Rolled Parchment Diploma + Crimson Ribbon */}
          <rect x="66" y="105" width="32" height="10" rx="4" transform="rotate(-8 82 110)" fill="#FAF8F4" stroke="#D6D3D1" strokeWidth="1" />
          <rect x="80" y="104.5" width="4" height="11" transform="rotate(-8 82 110)" fill="#9F1239" />
          <circle cx="71" cy="112" r="4.5" fill={`url(#${uid}-skin-1)`} />
          <circle cx="91" cy="112" r="4.5" fill={`url(#${uid}-skin-1)`} />

          {/* Head + Mortarboard Cap */}
          <g className="skc-head-nod">
            <path d="M61 42 C57 60 59 78 66 86 L98 86 C104 77 106 58 102 42 Z" fill={`url(#${uid}-hair)`} />
            <rect x="77" y="64" width="9" height="12" rx="4" fill={`url(#${uid}-skin-1)`} />
            <ellipse cx="82" cy="49" rx="18.5" ry="19.5" fill={`url(#${uid}-skin-1)`} />
            <g className="skc-blink">
              <ellipse cx="75" cy="49" rx="3.8" ry="4.3" fill="#FFFFFF" />
              <circle cx="75.3" cy="49.2" r="2.4" fill="#1F1612" />
              <circle cx="76" cy="48.2" r="0.9" fill="#FFFFFF" />
            </g>
            <g className="skc-blink">
              <ellipse cx="89" cy="49" rx="3.8" ry="4.3" fill="#FFFFFF" />
              <circle cx="89.3" cy="49.2" r="2.4" fill="#1F1612" />
              <circle cx="90" cy="48.2" r="0.9" fill="#FFFFFF" />
            </g>
            <path d="M75.5 58 Q82 63 88.5 58" stroke="#7F1D1D" strokeWidth="1.9" strokeLinecap="round" fill="none" />
            <path d="M63 45 C65 30 76 26 84 26 C92 27 99 34 100 45 C93 38 84 36 77 38 C70 40 66 42 63 45 Z" fill={`url(#${uid}-hair)`} />

            {/* Graduation Cap (Mortarboard) + Swaying Gold Tassel */}
            <rect x="66" y="25" width="32" height="9" rx="2" fill="#0F172A" />
            <polygon points="50,24 82,13 114,24 82,34" fill="#1E293B" stroke="#0F172A" strokeWidth="1" />
            <circle cx="82" cy="23" r="2.2" fill="#F59E0B" />
            <g className="skc-tassel">
              <path d="M82 23 L103 28 L103 44" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" fill="none" />
              <ellipse cx="103" cy="46" rx="2.5" ry="4" fill="#D97706" />
            </g>
          </g>
        </g>

        {/* === RIGHT: Male Graduate Celebrating with Raised Cap/Certificate === */}
        <g className="skc-float-delayed">
          <path d="M161 76 L203 76 L212 157 L152 157 Z" fill={`url(#${uid}-gown)`} />
          <path d="M171 76 L178 76 L175 132 L167 132 Z" fill={`url(#${uid}-stole)`} />
          <path d="M186 76 L193 76 L197 132 L189 132 Z" fill={`url(#${uid}-stole)`} />
          <ellipse cx="171" cy="160" rx="7" ry="4" fill="#1C1917" />
          <ellipse cx="193" cy="160" rx="7" ry="4" fill="#1C1917" />

          {/* Left Arm holding Certificate */}
          <path d="M163 82 C153 94 155 107 166 111" stroke={`url(#${uid}-gown)`} strokeWidth="10" strokeLinecap="round" fill="none" />
          <rect x="155" y="102" width="11" height="24" rx="4" transform="rotate(-24 160 114)" fill="#FAF8F4" stroke="#D6D3D1" strokeWidth="1" />
          <rect x="155" y="112" width="11" height="3.5" transform="rotate(-24 160 114)" fill="#9F1239" />
          <circle cx="166" cy="111" r="4.5" fill={`url(#${uid}-skin-2)`} />

          {/* Right Arm Celebrating Upwards */}
          <g className="skc-wave">
            <path d="M201 82 C214 70 221 56 220 42" stroke={`url(#${uid}-gown)`} strokeWidth="10" strokeLinecap="round" fill="none" />
            <circle cx="220" cy="40" r="4.8" fill={`url(#${uid}-skin-2)`} />
          </g>

          {/* Head + Mortarboard */}
          <g className="skc-head-nod">
            <rect x="177" y="64" width="9" height="12" rx="4" fill={`url(#${uid}-skin-2)`} />
            <ellipse cx="182" cy="49" rx="19" ry="20" fill={`url(#${uid}-skin-2)`} />
            <g className="skc-blink-delayed">
              <ellipse cx="175" cy="49" rx="3.9" ry="4.4" fill="#FFFFFF" />
              <circle cx="175.3" cy="49.2" r="2.4" fill="#1F1612" />
              <circle cx="176" cy="48.2" r="0.9" fill="#FFFFFF" />
            </g>
            <g className="skc-blink-delayed">
              <ellipse cx="189" cy="49" rx="3.9" ry="4.4" fill="#FFFFFF" />
              <circle cx="189.3" cy="49.2" r="2.4" fill="#1F1612" />
              <circle cx="190" cy="48.2" r="0.9" fill="#FFFFFF" />
            </g>
            <path d="M175.5 58 Q182 63.5 188.5 58" stroke="#6B2E22" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M163 45 C164 30 175 26 184 26 C194 27 200 35 200 45 C194 37 185 35 178 37 C170 39 166 42 163 45 Z" fill={`url(#${uid}-hair)`} />

            {/* Graduation Cap + Tassel */}
            <rect x="166" y="25" width="32" height="9" rx="2" fill="#0F172A" />
            <polygon points="150,24 182,13 214,24 182,34" fill="#1E293B" stroke="#0F172A" strokeWidth="1" />
            <circle cx="182" cy="23" r="2.2" fill="#F59E0B" />
            <g className="skc-tassel">
              <path d="M182 23 L161 28 L161 44" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" fill="none" />
              <ellipse cx="161" cy="46" rx="2.5" ry="4" fill="#D97706" />
            </g>
          </g>
        </g>
      </svg>
    </InteractiveCharacterStage>
  );
}

/**
 * 6. Contact Us / Admissions: Friendly Student Ambassador Waving with Backpack & ID Lanyard
 */
export function WelcomingGuideStudent({ className = '' }: { className?: string }) {
  const uid = useId().replace(/:/g, '');

  return (
    <InteractiveCharacterStage
      label="Animated student guide waving to welcome admissions visitors"
      greeting="Admissions Helpdesk · TNEA Code 2718"
      className={className}
    >
      <svg
        viewBox="0 0 180 165"
        className="w-40 sm:w-44 h-auto overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`${uid}-skin`} cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#F2BA93" />
            <stop offset="100%" stopColor="#B8774E" />
          </radialGradient>
          <linearGradient id={`${uid}-polo`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2D52B8" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id={`${uid}-chinos`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A8A29E" />
            <stop offset="100%" stopColor="#78716C" />
          </linearGradient>
          <linearGradient id={`${uid}-hair`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B2924" />
            <stop offset="100%" stopColor="#120D0C" />
          </linearGradient>
        </defs>

        <ellipse cx="88" cy="154" rx="34" ry="6" fill="#1C1917" fillOpacity="0.11" />

        <g className="skc-float">
          {/* Backpack behind */}
          <rect x="57" y="72" width="24" height="36" rx="9" fill="#44403C" />

          {/* Legs */}
          <rect x="74" y="114" width="12" height="35" rx="5.5" fill={`url(#${uid}-chinos)`} />
          <rect x="90" y="114" width="12" height="35" rx="5.5" fill={`url(#${uid}-chinos)`} />
          <ellipse cx="80" cy="150" rx="8.5" ry="4.5" fill="#FAF8F4" />
          <ellipse cx="96" cy="150" rx="8.5" ry="4.5" fill="#FAF8F4" />

          {/* Torso College Polo + Lanyard ID */}
          <rect x="68" y="70" width="40" height="48" rx="13" fill={`url(#${uid}-polo)`} />
          <path d="M81 71 L88 89 L95 71" stroke="#F59E0B" strokeWidth="2.2" fill="none" />
          <rect x="83" y="88" width="10" height="13" rx="2" fill="#FFFFFF" />
          <rect x="85" y="91" width="6" height="4" fill="#1E3A8A" />

          {/* Left Arm holding Welcome Brochure */}
          <path d="M68 78 C59 89 60 102 69 107" stroke={`url(#${uid}-polo)`} strokeWidth="9.5" strokeLinecap="round" fill="none" />
          <rect x="55" y="99" width="16" height="13" rx="2" fill="#FAF8F4" stroke="#B45309" strokeWidth="1" />
          <circle cx="69" cy="107" r="4.5" fill={`url(#${uid}-skin)`} />

          {/* Right Waving Arm */}
          <g className="skc-wave">
            <path d="M107 78 C120 68 126 55 125 42" stroke={`url(#${uid}-polo)`} strokeWidth="9.5" strokeLinecap="round" fill="none" />
            <circle cx="125" cy="40" r="5" fill={`url(#${uid}-skin)`} />
          </g>

          {/* Head */}
          <g className="skc-head-nod">
            <rect x="83" y="59" width="10" height="12" rx="4" fill={`url(#${uid}-skin)`} />
            <ellipse cx="88" cy="43" rx="19.5" ry="20.5" fill={`url(#${uid}-skin)`} />
            <g className="skc-blink">
              <ellipse cx="80.5" cy="43" rx="4" ry="4.5" fill="#FFFFFF" />
              <circle cx="81" cy="43.3" r="2.5" fill="#1F1612" />
              <circle cx="81.8" cy="42.2" r="0.9" fill="#FFFFFF" />
            </g>
            <g className="skc-blink">
              <ellipse cx="95.5" cy="43" rx="4" ry="4.5" fill="#FFFFFF" />
              <circle cx="96" cy="43.3" r="2.5" fill="#1F1612" />
              <circle cx="96.8" cy="42.2" r="0.9" fill="#FFFFFF" />
            </g>
            <path d="M81 52 Q88 57.5 95 52" stroke="#6B2E22" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M68 39 C69 22 81 17 90 18 C101 19 107 28 107 39 C101 30 93 27 84 29 C76 31 72 34 68 39 Z" fill={`url(#${uid}-hair)`} />
          </g>
        </g>
      </svg>
    </InteractiveCharacterStage>
  );
}
