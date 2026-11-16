import { useEffect } from 'react';
import { X } from 'lucide-react';
import { CampusNotice } from '../data/collegeData';

interface NoticeModalProps {
  notice: CampusNotice | null;
  onClose: () => void;
}

export function NoticeModal({ notice, onClose }: NoticeModalProps) {
  useEffect(() => {
    if (!notice) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [notice, onClose]);

  if (!notice) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="notice-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#FAF8F4] border border-stone-300 rounded-lg shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-5 border-b border-stone-200 bg-[#F3EFE8] flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-stone-600 tabular-nums mb-1.5">
              <span>{notice.category}</span>
              <span aria-hidden="true">·</span>
              <span>{notice.date}</span>
            </div>
            <h3
              id="notice-modal-title"
              className="font-serif text-xl font-semibold text-[#1C1917] text-balance"
            >
              {notice.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close announcement"
            className="w-10 h-10 inline-flex items-center justify-center rounded-md text-stone-600 hover:text-[#1C1917] hover:bg-stone-200/70 transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">{notice.details}</p>
          <div className="pt-3 border-t border-stone-200 text-xs font-mono text-stone-600">
            {notice.venueOrRef}
          </div>
        </div>

        <div className="px-6 py-4 border-t border-stone-200 bg-[#F3EFE8] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-[#1C1917] bg-white border border-stone-300 rounded-md hover:bg-stone-100 transition-colors cursor-pointer"
          >
            Close Notice
          </button>
        </div>
      </div>
    </div>
  );
}
