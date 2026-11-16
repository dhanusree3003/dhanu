import { useEffect } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import { AcademicProgram } from '../data/collegeData';

interface ProgramModalProps {
  program: AcademicProgram | null;
  onClose: () => void;
  onInquire: (programTitle: string) => void;
}

export function ProgramModal({ program, onClose, onInquire }: ProgramModalProps) {
  useEffect(() => {
    if (!program) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [program, onClose]);

  if (!program) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="program-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#FAF8F4] border border-stone-300 rounded-lg shadow-xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-5 border-b border-stone-200 flex items-start justify-between gap-4 bg-[#F3EFE8]">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600 font-mono tabular-nums mb-1.5">
              <span>{program.code}</span>
              <span aria-hidden="true">·</span>
              <span>{program.department}</span>
              <span aria-hidden="true">·</span>
              <span>{program.accreditation}</span>
            </div>
            <h3
              id="program-modal-title"
              className="font-serif text-2xl font-semibold text-[#1C1917] text-balance"
            >
              {program.degree} {program.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close program details"
            className="w-10 h-10 inline-flex items-center justify-center rounded-md text-stone-600 hover:text-[#1C1917] hover:bg-stone-200/70 transition-colors shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1E3A8A]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          <dl className="grid grid-cols-3 gap-4 pb-5 border-b border-stone-200">
            <div>
              <dt className="text-xs text-stone-500">Duration</dt>
              <dd className="text-sm font-semibold text-[#1C1917] mt-0.5 tabular-nums">
                {program.duration}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-stone-500">Annual Intake</dt>
              <dd className="text-sm font-semibold text-[#1C1917] mt-0.5 tabular-nums">
                {program.intake}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-stone-500">Recognition</dt>
              <dd className="text-sm font-semibold text-[#1C1917] mt-0.5">
                {program.accreditation}
              </dd>
            </div>
          </dl>

          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-stone-500 mb-2">
              Academic Overview
            </h4>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">{program.summary}</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-stone-500 mb-2.5">
              Curriculum Highlights
            </h4>
            <ul className="space-y-2">
              {program.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-stone-700">
                  <Check className="w-4 h-4 text-[#1E3A8A] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 pt-2 border-t border-stone-200">
            <div>
              <h4 className="text-xs font-semibold tracking-wider uppercase text-stone-500 mb-2">
                Dedicated Laboratories
              </h4>
              <ul className="space-y-1 text-sm text-stone-700">
                {program.labs.map((lab) => (
                  <li key={lab}>{lab}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold tracking-wider uppercase text-stone-500 mb-2">
                Admission Eligibility
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed">{program.eligibility}</p>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-stone-200 bg-[#F3EFE8] flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-stone-600">
            Autonomous Syllabus · Choice Based Credit System (CBCS)
          </span>
          <button
            type="button"
            onClick={() => {
              const title = `${program.degree} ${program.title}`;
              onClose();
              onInquire(title);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#1E3A8A] rounded-md hover:bg-[#172554] transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Inquire for This Program
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
