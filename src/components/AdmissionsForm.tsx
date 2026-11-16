import { useEffect, useState, FormEvent } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../data/collegeData';

interface AdmissionsFormProps {
  preselectedProgram: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  program?: string;
}

interface SubmittedReceipt {
  referenceId: string;
  fullName: string;
  email: string;
  phone: string;
  program: string;
  entryMode: string;
  visitCampus: boolean;
  submittedAt: string;
}

export function AdmissionsForm({ preselectedProgram }: AdmissionsFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [program, setProgram] = useState(
    preselectedProgram || `${ACADEMIC_PROGRAMS[0].degree} ${ACADEMIC_PROGRAMS[0].title}`
  );
  const [entryMode, setEntryMode] = useState('TNEA State Counselling');
  const [visitCampus, setVisitCampus] = useState(true);
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [receipt, setReceipt] = useState<SubmittedReceipt | null>(null);

  useEffect(() => {
    if (preselectedProgram) {
      setProgram(preselectedProgram);
      setReceipt(null);
    }
  }, [preselectedProgram]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter the applicant’s full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10 || digitsOnly.length > 12) {
      nextErrors.phone = 'Enter a valid 10-digit Indian mobile number.';
    }
    if (!program) {
      nextErrors.program = 'Select a degree program.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const randomCode = Math.floor(100000 + Math.random() * 900000);
    setReceipt({
      referenceId: `SKC-2026-${randomCode}`,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      program,
      entryMode,
      visitCampus,
      submittedAt: new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
    });
  };

  if (receipt) {
    return (
      <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8">
        <div className="flex items-start gap-3 pb-5 border-b border-stone-200">
          <CheckCircle2 className="w-6 h-6 text-[#14532D] shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-mono text-[#14532D] uppercase tracking-wider">
              Inquiry Registered
            </p>
            <h3 className="font-serif text-2xl font-semibold text-[#1C1917] mt-1">
              Admissions Counselling Slip
            </h3>
            <p className="text-sm text-stone-600 mt-1">
              Our Admissions Cell at Kuniamuthur Campus will contact you within one working day with fee structure and scholarship eligibility details.
            </p>
          </div>
        </div>

        <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-4 py-6 text-sm border-b border-stone-200">
          <div>
            <dt className="text-xs text-stone-500">Reference Number</dt>
            <dd className="font-mono font-medium text-[#1C1917] mt-0.5 tabular-nums">
              {receipt.referenceId}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-stone-500">Date Recorded</dt>
            <dd className="font-medium text-[#1C1917] mt-0.5 tabular-nums">
              {receipt.submittedAt}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-stone-500">Applicant Name</dt>
            <dd className="font-medium text-[#1C1917] mt-0.5">{receipt.fullName}</dd>
          </div>
          <div>
            <dt className="text-xs text-stone-500">Contact</dt>
            <dd className="font-medium text-[#1C1917] mt-0.5 tabular-nums">
              {receipt.phone} · {receipt.email}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-stone-500">Program Selected</dt>
            <dd className="font-medium text-[#1C1917] mt-0.5">{receipt.program}</dd>
          </div>
          <div>
            <dt className="text-xs text-stone-500">Admission Pathway</dt>
            <dd className="font-medium text-[#1C1917] mt-0.5">
              {receipt.entryMode}
              {receipt.visitCampus ? ' · Campus Visit Requested' : ''}
            </dd>
          </div>
        </dl>

        <div className="pt-5 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            TNEA Counselling Code: <span className="font-mono text-[#1C1917]">2718</span>
          </p>
          <button
            type="button"
            onClick={() => {
              setReceipt(null);
              setFullName('');
              setEmail('');
              setPhone('');
              setNotes('');
            }}
            className="px-4 py-2 text-sm font-medium text-[#1E3A8A] border border-[#1E3A8A]/30 rounded-md hover:bg-[#1E3A8A]/5 transition-colors cursor-pointer"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="applicant-name" className="block text-sm font-medium text-[#1C1917] mb-1.5">
            Applicant Full Name
          </label>
          <input
            id="applicant-name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g., Dharun Karthikeyan"
            className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-stone-300 rounded-md text-[#1C1917] placeholder:text-stone-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs text-[#9A3412] flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="applicant-phone" className="block text-sm font-medium text-[#1C1917] mb-1.5">
            Mobile Number
          </label>
          <input
            id="applicant-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98422 00000"
            className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-stone-300 rounded-md text-[#1C1917] placeholder:text-stone-400 tabular-nums focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-[#9A3412] flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="applicant-email" className="block text-sm font-medium text-[#1C1917] mb-1.5">
            Email Address
          </label>
          <input
            id="applicant-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="applicant@example.com"
            className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-stone-300 rounded-md text-[#1C1917] placeholder:text-stone-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-[#9A3412] flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="admission-mode" className="block text-sm font-medium text-[#1C1917] mb-1.5">
            Admission Pathway
          </label>
          <select
            id="admission-mode"
            value={entryMode}
            onChange={(e) => setEntryMode(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-stone-300 rounded-md text-[#1C1917] focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
          >
            <option value="TNEA State Counselling">TNEA State Counselling</option>
            <option value="Management / Consortium Quota">Management / Consortium Quota</option>
            <option value="Lateral Entry (Diploma)">Lateral Entry (Diploma)</option>
            <option value="TANCET / GATE (PG)">TANCET / GATE (Postgraduate)</option>
            <option value="Ph.D. Research Fellowship">Ph.D. Research Fellowship</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="program-select" className="block text-sm font-medium text-[#1C1917] mb-1.5">
          Program of Interest
        </label>
        <select
          id="program-select"
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-stone-300 rounded-md text-[#1C1917] focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
        >
          {ACADEMIC_PROGRAMS.map((p) => {
            const fullTitle = `${p.degree} ${p.title}`;
            return (
              <option key={p.id} value={fullTitle}>
                {fullTitle} ({p.duration})
              </option>
            );
          })}
        </select>
        {errors.program && (
          <p className="mt-1.5 text-xs text-[#9A3412]">{errors.program}</p>
        )}
      </div>

      <div>
        <label htmlFor="applicant-notes" className="block text-sm font-medium text-[#1C1917] mb-1.5">
          Questions or Hostel Requirement (Optional)
        </label>
        <textarea
          id="applicant-notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Specify if you would like hostel information, scholarship details, or a department faculty meeting."
          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-stone-300 rounded-md text-[#1C1917] placeholder:text-stone-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <label className="inline-flex items-center gap-2.5 text-sm text-stone-700 cursor-pointer">
          <input
            type="checkbox"
            checked={visitCampus}
            onChange={(e) => setVisitCampus(e.target.checked)}
            className="w-4 h-4 rounded border-stone-300 text-[#1E3A8A] focus:ring-[#1E3A8A]"
          />
          <span>Request a guided tour of Kuniamuthur Campus</span>
        </label>

        <button
          type="submit"
          className="px-6 py-3 text-sm font-medium text-white bg-[#1E3A8A] rounded-md hover:bg-[#172554] transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]"
        >
          Request Admissions Callback
        </button>
      </div>
    </form>
  );
}
