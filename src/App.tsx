import { useMemo, useState } from 'react';
import { ArrowRight, MapPin, Phone, Mail, Clock, Search, ChevronRight } from 'lucide-react';
import { Header } from './components/Header';
import { ResilientImage } from './components/ResilientImage';
import { ProgramModal } from './components/ProgramModal';
import { NoticeModal } from './components/NoticeModal';
import { AdmissionsForm } from './components/AdmissionsForm';
import {
  CampusDuoWalking,
  StudyingLaptopStudent,
  CampusChattingStudents,
  PlacementFormalDuo,
  GraduationCelebrationDuo,
  WelcomingGuideStudent,
} from './components/StudentCharacters';
import {
  ACADEMIC_PROGRAMS,
  ALUMNI_STORIES,
  AcademicProgram,
  CAMPUS_FACILITIES,
  CAMPUS_NOTICES,
  CampusNotice,
  HERO_IMAGE,
  PLACEMENT_STATS,
  ProgramLevel,
  RECRUITER_PARTNERS,
} from './data/collegeData';

type RecruiterSectorFilter = 'all' | 'software' | 'core' | 'consulting';
type NoticeFilter = 'all' | 'notice' | 'event';

export default function App() {
  const [programLevel, setProgramLevel] = useState<ProgramLevel>('all');
  const [programQuery, setProgramQuery] = useState('');
  const [selectedProgram, setSelectedProgram] = useState<AcademicProgram | null>(null);

  const [activeFacilityId, setActiveFacilityId] = useState<string>(CAMPUS_FACILITIES[0].id);
  const [sectorFilter, setSectorFilter] = useState<RecruiterSectorFilter>('all');

  const [noticeFilter, setNoticeFilter] = useState<NoticeFilter>('all');
  const [selectedNotice, setSelectedNotice] = useState<CampusNotice | null>(null);

  const [preselectedProgram, setPreselectedProgram] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireProgram = (programTitle: string) => {
    setPreselectedProgram(programTitle);
    scrollToSection('admissions');
  };

  const filteredPrograms = useMemo(() => {
    const q = programQuery.trim().toLowerCase();
    return ACADEMIC_PROGRAMS.filter((p) => {
      const matchesLevel = programLevel === 'all' || p.level === programLevel;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.degree.toLowerCase().includes(q) ||
        p.department.toLowerCase().includes(q);
      return matchesLevel && matchesQuery;
    });
  }, [programLevel, programQuery]);

  const activeFacility = useMemo(
    () => CAMPUS_FACILITIES.find((f) => f.id === activeFacilityId) ?? CAMPUS_FACILITIES[0],
    [activeFacilityId]
  );

  const filteredRecruiters = useMemo(() => {
    if (sectorFilter === 'all') return RECRUITER_PARTNERS;
    return RECRUITER_PARTNERS.filter((r) => r.sector === sectorFilter);
  }, [sectorFilter]);

  const filteredNotices = useMemo(() => {
    if (noticeFilter === 'all') return CAMPUS_NOTICES;
    return CAMPUS_NOTICES.filter((n) => n.type === noticeFilter);
  }, [noticeFilter]);

  return (
    <div id="top" className="min-h-screen bg-[#FAF8F4] text-[#1C1917]">
      <Header onNavigateToAdmissions={() => scrollToSection('admissions')} />

      <main>
        {/* Hero Section: Balanced 2-Column Institutional Split */}
        <section className="border-b border-stone-200 bg-[#FAF8F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-14 lg:pb-16">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              <div className="lg:col-span-6 flex flex-col justify-between py-2">
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-stone-500 mb-4">
                    Kuniamuthur, Coimbatore · Autonomous Institution
                  </p>
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.12] tracking-tight text-[#1C1917] text-balance">
                    Engineering Rigour at the Foothills of the Western Ghats
                  </h1>
                  <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
                    Sri Krishna College of Engineering and Technology combines Anna University autonomous curricula, 18 industry-embedded laboratories, and a 96.4% placement record across computing, electronics, and core manufacturing.
                  </p>
                  <div className="mt-6 flex justify-center sm:justify-start">
                    <CampusDuoWalking />
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => scrollToSection('programs')}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#a712a0] rounded-md hover:bg-[#172554] transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]"
                  >
                    Explore Academic Programs
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('campus')}
                    className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-[#1C1917] hover:text-[#1E3A8A] underline-offset-4 hover:underline transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Tour Kuniamuthur Campus
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <figure className="h-full flex flex-col">
                  <div className="relative flex-1 min-h-[280px] sm:min-h-[360px] rounded-lg overflow-hidden border border-stone-200 bg-[#EBE6DF]">
                    <ResilientImage
                      src={HERO_IMAGE}
                      alt="Sri Krishna College of Engineering and Technology academic blocks in Kuniamuthur, Coimbatore with the Western Ghats behind"
                      className="w-full h-full lg:h-full object-cover"
                      fallbackTitle="Sri Krishna College · Kuniamuthur Campus"
                    />
                  </div>
                  <figcaption className="mt-2.5 text-xs font-serif italic text-stone-500">
                    Academic Quadrangle and Western Ghats backdrop, Sugunapuram East, Coimbatore – 641008.
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Full-Width 4-Column Institutional Operational & Accreditation Ribbon */}
            <dl className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200 rounded-lg overflow-hidden">
              <div className="bg-[#F3EFE8] px-5 py-4">
                <dt className="text-xs text-stone-500">TNEA Counselling Code</dt>
                <dd className="font-mono text-lg font-medium text-[#1C1917] mt-1 tabular-nums">
                  2718
                </dd>
              </div>
              <div className="bg-[#F3EFE8] px-5 py-4">
                <dt className="text-xs text-stone-500">Accreditation Standing</dt>
                <dd className="text-base font-semibold text-[#1C1917] mt-1">
                  NAAC ‘A’ Grade · NBA
                </dd>
              </div>
              <div className="bg-[#F3EFE8] px-5 py-4">
                <dt className="text-xs text-stone-500">University Affiliation</dt>
                <dd className="text-base font-semibold text-[#1C1917] mt-1">
                  Anna University · Autonomous
                </dd>
              </div>
              <div className="bg-[#F3EFE8] px-5 py-4">
                <dt className="text-xs text-stone-500">Admissions Desk Hours</dt>
                <dd className="text-base font-semibold text-[#1C1917] mt-1 tabular-nums">
                  Mon–Sat · 09:00–17:00
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Section 1: Academic Schools & Degree Explorer */}
        <section id="programs" className="py-16 lg:py-20 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-stone-200">
              <div className="flex flex-col sm:flex-row sm:items-end gap-6 max-w-3xl">
                <div className="max-w-xl">
                  <p className="text-xs font-medium tracking-widest uppercase text-stone-500 mb-2">
                    Academic Catalog · 2026–27
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1917] text-balance">
                    Schools of Engineering, Computing &amp; Management
                  </h2>
                  <p className="mt-3 text-base text-stone-600 leading-relaxed">
                    Select any degree program to inspect syllabus highlights, industry laboratories, and entry pathways.
                  </p>
                </div>
                <div className="shrink-0 self-center sm:self-end">
                  <StudyingLaptopStudent />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div
                  role="tablist"
                  aria-label="Filter programs by degree level"
                  className="inline-flex items-center p-1 bg-[#EBE6DF] rounded-md"
                >
                  {(
                    [
                      { key: 'all', label: 'All Programs' },
                      { key: 'ug', label: 'Undergraduate' },
                      { key: 'pg', label: 'Postgraduate' },
                      { key: 'phd', label: 'Doctoral' },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      role="tab"
                      aria-selected={programLevel === tab.key}
                      onClick={() => setProgramLevel(tab.key)}
                      className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                        programLevel === tab.key
                          ? 'bg-white text-[#1C1917] shadow-xs'
                          : 'text-stone-600 hover:text-[#1C1917]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="search"
                    value={programQuery}
                    onChange={(e) => setProgramQuery(e.target.value)}
                    placeholder="Filter departments..."
                    aria-label="Filter academic programs"
                    className="w-full sm:w-52 pl-9 pr-3 py-2 text-sm bg-white border border-stone-300 rounded-md text-[#1C1917] placeholder:text-stone-400 focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
              </div>
            </div>

            {filteredPrograms.length === 0 ? (
              <div className="py-12 text-center border border-stone-200 rounded-lg bg-white mt-8">
                <p className="text-base font-medium text-[#1C1917]">
                  No programs matched “{programQuery}”.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setProgramLevel('all');
                    setProgramQuery('');
                  }}
                  className="mt-3 text-sm font-medium text-[#1E3A8A] hover:underline cursor-pointer"
                >
                  Reset program filters
                </button>
              </div>
            ) : (
              <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPrograms.map((program) => (
                  <button
                    key={program.id}
                    type="button"
                    onClick={() => setSelectedProgram(program)}
                    className="group text-left bg-white border border-stone-200 rounded-lg p-6 flex flex-col justify-between hover:border-[#1E3A8A]/60 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1E3A8A]"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs text-stone-500 tabular-nums">
                        <span className="font-mono text-[#1E3A8A] font-medium">{program.code}</span>
                        <span aria-hidden="true">·</span>
                        <span>{program.duration}</span>
                        <span aria-hidden="true">·</span>
                        <span>{program.intake}</span>
                      </div>

                      <h3 className="mt-3 font-serif text-xl font-semibold text-[#1C1917] group-hover:text-[#1E3A8A] transition-colors">
                        {program.degree} {program.title}
                      </h3>

                      <p className="mt-2.5 text-sm text-stone-600 leading-relaxed line-clamp-3">
                        {program.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                      <span>
                        {program.department} · {program.accreditation}
                      </span>
                      <span className="inline-flex items-center gap-1 font-medium text-[#1E3A8A] whitespace-nowrap shrink-0">
                        Syllabus
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Campus Infrastructure & Centres of Excellence */}
        <section id="campus" className="py-16 lg:py-20 bg-[#F3EFE8] border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="max-w-2xl">
                <p className="text-xs font-medium tracking-widest uppercase text-stone-500 mb-2">
                  Kuniamuthur Campus · 45 Acres
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1917] text-balance">
                  Scholarly Spaces &amp; Industry Laboratories
                </h2>
              </div>
              <div className="shrink-0 self-center md:self-end">
                <CampusChattingStudents />
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Interactive Facility Selector Rail */}
              <div className="lg:col-span-5 space-y-3">
                {CAMPUS_FACILITIES.map((facility) => {
                  const isActive = facility.id === activeFacility.id;
                  return (
                    <button
                      key={facility.id}
                      type="button"
                      onClick={() => setActiveFacilityId(facility.id)}
                      aria-pressed={isActive}
                      className={`w-full text-left p-5 rounded-lg border transition-colors duration-150 cursor-pointer ${
                        isActive
                          ? 'bg-white border-[#1E3A8A]'
                          : 'bg-[#FAF8F4]/70 border-stone-200 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-stone-500 tabular-nums">
                          {facility.index}.
                        </span>
                        <div>
                          <h3 className="font-serif text-xl font-semibold text-[#1C1917]">
                            {facility.name}
                          </h3>
                          <p className="text-xs text-stone-500 mt-1">{facility.subtitle}</p>
                        </div>
                      </div>
                      {isActive && (
                        <div className="mt-4 pt-4 border-t border-stone-100">
                          <p className="text-sm text-stone-600 leading-relaxed">
                            {facility.description}
                          </p>
                          <dl className="mt-4 grid grid-cols-3 gap-3">
                            {facility.specs.map((spec) => (
                              <div key={spec.label}>
                                <dt className="text-[11px] text-stone-500">{spec.label}</dt>
                                <dd className="text-sm font-semibold text-[#1C1917] tabular-nums mt-0.5">
                                  {spec.value}
                                </dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Editorial Facility Figure */}
              <div className="lg:col-span-7">
                <figure className="bg-white border border-stone-200 rounded-lg p-4 sm:p-5">
                  <div className="aspect-[4/3] w-full rounded overflow-hidden bg-[#EBE6DF]">
                    <ResilientImage
                      src={activeFacility.image}
                      alt={activeFacility.figureCaption}
                      className="w-full h-full object-cover"
                      fallbackTitle={activeFacility.name}
                    />
                  </div>
                  <figcaption className="mt-3 text-xs font-serif italic text-stone-600">
                    {activeFacility.figureCaption}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Placements & Industry Outcomes (Claim-to-Proof Adjacency) */}
        <section id="placements" className="py-16 lg:py-20 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-xs font-medium tracking-widest uppercase text-stone-500 mb-2">
                  Career &amp; Placement Cell
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1917] text-balance">
                  Verified Placement Outcomes &amp; Recruiting Partners
                </h2>
                <p className="mt-3 text-base text-stone-600 leading-relaxed">
                  Dedicated pre-placement engineering clinics, industry internships from Semester VI, and direct campus drives across software, semiconductor, and core manufacturing sectors.
                </p>
              </div>
              <div className="shrink-0 self-center md:self-end">
                <PlacementFormalDuo />
              </div>
            </div>

            {/* Quantitative Proof Row */}
            <dl className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-stone-200">
              {PLACEMENT_STATS.map((stat) => (
                <div key={stat.label} className="bg-white border border-stone-200 rounded-lg p-6">
                  <dt className="text-xs font-medium text-stone-500">{stat.label}</dt>
                  <dd className="font-serif text-3xl sm:text-4xl font-semibold text-[#1E3A8A] mt-2 tabular-nums">
                    {stat.value}
                  </dd>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">{stat.context}</p>
                </div>
              ))}
            </dl>

            {/* Filterable Recruiting Directory */}
            <div className="mt-12">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h3 className="font-serif text-2xl font-semibold text-[#1C1917]">
                  Select Campus Recruiters
                </h3>
                <div
                  role="tablist"
                  aria-label="Filter recruiters by sector"
                  className="inline-flex items-center p-1 bg-[#EBE6DF] rounded-md self-start"
                >
                  {(
                    [
                      { key: 'all', label: 'All Sectors' },
                      { key: 'software', label: 'Software & Cloud' },
                      { key: 'core', label: 'Core Engineering' },
                      { key: 'consulting', label: 'Consulting' },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      role="tab"
                      aria-selected={sectorFilter === tab.key}
                      onClick={() => setSectorFilter(tab.key)}
                      className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        sectorFilter === tab.key
                          ? 'bg-white text-[#1C1917] shadow-xs'
                          : 'text-stone-600 hover:text-[#1C1917]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="overflow-x-auto bg-white border border-stone-200 rounded-lg">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-[#F3EFE8] text-xs font-medium text-stone-600">
                      <th className="py-3.5 px-5">Organization</th>
                      <th className="py-3.5 px-5">Primary Roles Offered</th>
                      <th className="py-3.5 px-5 text-right">Annual CTC Band</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {filteredRecruiters.map((partner) => (
                      <tr key={partner.name} className="hover:bg-[#FAF8F4] transition-colors">
                        <td className="py-3.5 px-5 font-medium text-[#1C1917]">{partner.name}</td>
                        <td className="py-3.5 px-5 text-stone-600">{partner.roles}</td>
                        <td className="py-3.5 px-5 text-right font-mono text-xs sm:text-sm text-[#1C1917] tabular-nums whitespace-nowrap">
                          {partner.packageRange}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Attributable Graduate Outcomes */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {ALUMNI_STORIES.map((story) => (
                <blockquote
                  key={story.name}
                  className="bg-white border border-stone-200 rounded-lg p-6 flex flex-col justify-between"
                >
                  <p className="text-sm text-stone-700 leading-relaxed">“{story.outcome}”</p>
                  <footer className="mt-5 pt-4 border-t border-stone-100">
                    <p className="font-serif text-base font-semibold text-[#1C1917]">{story.name}</p>
                    <p className="text-xs text-stone-500 mt-0.5">
                      {story.role} · {story.company}
                    </p>
                    <p className="text-xs text-stone-400 mt-0.5 tabular-nums">{story.batch}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Research, Patents & Institutional Heritage (Asymmetric 70/30 Editorial Grid) */}
        <section id="research" className="py-16 lg:py-20 bg-[#F3EFE8] border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
              <div className="lg:col-span-8">
                <p className="text-xs font-medium tracking-widest uppercase text-stone-500 mb-2">
                  Research &amp; Coimbatore Heritage
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1917] text-balance">
                  Rooted in Coimbatore’s Industrial &amp; Academic Tradition
                </h2>

                <div className="mt-6 space-y-5 text-base text-stone-700 leading-[1.8] max-w-prose">
                  <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-semibold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#1E3A8A]">
                    Established under the Sri Krishna Institutions trust in 1998, Sri Krishna College of Engineering and Technology sits along Palakkad Main Road in Kuniamuthur—at the crossroads of Coimbatore’s precision engineering corridor and Tamil Nadu’s higher education heartland.
                  </p>
                  <p>
                    Granted Autonomous status by the University Grants Commission and Anna University in 2011, the institution continuously revises its Choice Based Credit System syllabus every two years with boards of studies comprising senior architects from Bosch, TCS, Zoho, and faculty from IIT Madras and NIT Tiruchirappalli.
                  </p>
                  <p>
                    Through the Centre for Sponsored Research and the VKS Innovation &amp; Incubation Hub, faculty and undergraduate scholars have published over 1,900 peer-reviewed papers and filed 310+ patents in clean energy micro-grids, precision pumps, biomedical imaging, and low-power VLSI design.
                  </p>
                </div>
              </div>

              <aside className="lg:col-span-4 space-y-6 lg:pt-10">
                <div className="bg-white border border-stone-200 rounded-lg p-6">
                  <h3 className="font-serif text-lg font-semibold text-[#1C1917] pb-3 border-b border-stone-200">
                    Institutional Milestones
                  </h3>
                  <dl className="divide-y divide-stone-200 text-sm">
                    <div className="py-3 flex justify-between gap-4">
                      <dt className="font-mono text-stone-500 tabular-nums">1998</dt>
                      <dd className="text-right text-[#1C1917]">Founded in Kuniamuthur, Coimbatore</dd>
                    </div>
                    <div className="py-3 flex justify-between gap-4">
                      <dt className="font-mono text-stone-500 tabular-nums">2011</dt>
                      <dd className="text-right text-[#1C1917]">UGC &amp; Anna University Autonomy</dd>
                    </div>
                    <div className="py-3 flex justify-between gap-4">
                      <dt className="font-mono text-stone-500 tabular-nums">2016</dt>
                      <dd className="text-right text-[#1C1917]">NBA Tier-1 &amp; NAAC ‘A’ Grade</dd>
                    </div>
                    <div className="py-3 flex justify-between gap-4">
                      <dt className="font-mono text-stone-500 tabular-nums">2026</dt>
                      <dd className="text-right text-[#1C1917]">310+ Patents &amp; 18 Industry Labs</dd>
                    </div>
                  </dl>
                </div>

                <div className="flex justify-center pt-2">
                  <GraduationCelebrationDuo />
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Section 5: Campus Notices & Upcoming Events */}
        <section id="notices" className="py-16 lg:py-20 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-stone-200">
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-stone-500 mb-2">
                  Circulars &amp; Calendar
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1917]">
                  Campus Notices &amp; Events
                </h2>
              </div>

              <div
                role="tablist"
                aria-label="Filter notices and events"
                className="inline-flex items-center p-1 bg-[#EBE6DF] rounded-md self-start"
              >
                {(
                  [
                    { key: 'all', label: 'All Updates' },
                    { key: 'notice', label: 'Academic Notices' },
                    { key: 'event', label: 'Events' },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={noticeFilter === tab.key}
                    onClick={() => setNoticeFilter(tab.key)}
                    className={`px-3.5 py-2 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      noticeFilter === tab.key
                        ? 'bg-white text-[#1C1917] shadow-xs'
                        : 'text-stone-600 hover:text-[#1C1917]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="divide-y divide-stone-200">
              {filteredNotices.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedNotice(item)}
                  className="w-full text-left py-6 px-2 -mx-2 rounded-md hover:bg-stone-100/70 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="space-y-1.5 max-w-3xl">
                    <div className="flex items-center gap-2 text-xs text-stone-500 tabular-nums">
                      <span className="font-medium text-[#1E3A8A]">{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{item.date}</span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-[#1C1917] group-hover:text-[#1E3A8A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-stone-600">{item.summary}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1E3A8A] whitespace-nowrap shrink-0">
                    Read Circular
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Admissions 2026 & Campus Visit Inquiry */}
        <section id="admissions" className="py-16 lg:py-20 bg-[#F3EFE8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-stone-500 mb-2">
                    Admissions 2026–27
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1917] text-balance">
                    Begin Your Application or Schedule a Campus Visit
                  </h2>
                  <p className="mt-3 text-base text-stone-600 leading-relaxed">
                    Whether applying via Tamil Nadu Engineering Admissions (TNEA Code 2718), Management Quota, or TANCET, our Kuniamuthur admissions office provides transparent fee and scholarship guidance.
                  </p>
                </div>

                <div className="pt-6 border-t border-stone-300 space-y-4 text-sm text-stone-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#1E3A8A] shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-[#1C1917]">Kuniamuthur Main Campus</p>
                      <p className="text-stone-600 mt-0.5">
                        Sugunapuram East, Palakkad Main Road, Kuniamuthur, Coimbatore – 641008, Tamil Nadu
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#1E3A8A] shrink-0" />
                    <span className="tabular-nums">+91 422 267 8001 · Admissions Helpline</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#1E3A8A] shrink-0" />
                    <span>admissions@srikrishnacbe.edu.in</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#1E3A8A] shrink-0" />
                    <span className="tabular-nums">Monday – Saturday · 09:00 AM to 05:00 PM</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-center sm:justify-start">
                  <WelcomingGuideStudent />
                </div>
              </div>

              <div className="lg:col-span-7">
                <AdmissionsForm preselectedProgram={preselectedProgram} />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Institutional Footer */}
      <footer className="bg-[#1C1917] text-stone-300 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-stone-800">
            <div className="lg:col-span-2">
              <p className="font-serif text-xl font-semibold text-white">
                Sri Krishna College of Engineering and Technology
              </p>
              <p className="mt-2.5 text-sm text-stone-400 max-w-md leading-relaxed">
                An Autonomous Institution affiliated to Anna University, Chennai · Approved by AICTE · Accredited by NAAC with ‘A’ Grade · Kuniamuthur, Coimbatore – 641008.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
                Navigation
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#programs" className="hover:text-white transition-colors">
                    Academic Programs
                  </a>
                </li>
                <li>
                  <a href="#campus" className="hover:text-white transition-colors">
                    Kuniamuthur Campus
                  </a>
                </li>
                <li>
                  <a href="#placements" className="hover:text-white transition-colors">
                    Placements &amp; Recruiters
                  </a>
                </li>
                <li>
                  <a href="#research" className="hover:text-white transition-colors">
                    Research &amp; Heritage
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
                Admissions Office
              </h3>
              <ul className="space-y-2 text-sm text-stone-400">
                <li className="tabular-nums">TNEA Code: 2718</li>
                <li className="tabular-nums">+91 422 267 8001</li>
                <li>Kuniamuthur, Coimbatore – 641008</li>
                <li>
                  <a href="#admissions" className="text-stone-200 hover:text-white underline underline-offset-4">
                    Request Callback
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-500">
            <p>© {new Date().getFullYear()} Sri Krishna College, Coimbatore. All rights reserved.</p>
            <p>Autonomous Institution · Coimbatore, Tamil Nadu</p>
          </div>
        </div>
      </footer>

      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onInquire={handleInquireProgram}
      />

      <NoticeModal
        notice={selectedNotice}
        onClose={() => setSelectedNotice(null)}
      />
    </div>
  );
}
