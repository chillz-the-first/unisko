const Step4 = ({form, setStep, change, back}) => {
    return (
        <div className="space-y-8 py-10">
            <div className="space-y-2">
                <h2 className="font-serif font-semibold text-navy text-4xl">Review and confirm</h2>
                <p className="text-muted text-sm">Check everything reads right, then accept the terms and submit.</p>
            </div>

            <div className="border border-navy/15 rounded-md">
                <div className="bg-cream py-2 px-4 flex justify-between items-center">
                    <p className="text-sm tracking-kicker text-muted">PARENT / GUARDIAN</p>
                    <button onClick={() => {setStep(1)}}
                        className="bg-transparent text-navy font-semibold text-sm underline decoration-{#0a1e3f26} underline-offset-2"
                    >Edit</button>
                </div>
                <div className="flex justify-between gap-4 py-2 px-4">
                    <p className="text-muted">Name</p>
                    <p className="text-body">
                        {form.title + ' ' + form.firstName + ' ' + form.surname + ' (' + form.initials + ')'}
                    </p>
                </div>
                {/*<div className="border border-navy/15"/>*/}
                <div className="flex justify-between gap-4 py-2 px-4">
                    <p className="text-muted">ID / Passport</p>
                    <p className="text-body">{form.idNumber}</p>
                </div>
                <div className="flex justify-between gap-4 py-2 px-4">
                    <p className="text-muted">Address</p>
                    <p className="text-body">{form.address + "," + form.town + ',' + form.city}</p>
                </div>
                <div className="flex justify-between gap-4 py-2 px-4">
                    <p className="text-muted">Cell phone</p>
                    <p className="text-body">{form.cellPhone}</p>
                </div>
            </div>

            <div className="border border-navy/15 rounded-md">
                <div className="bg-cream py-2 px-4 flex justify-between items-center">
                    <p className="text-sm tracking-kicker text-muted">APPLICANT</p>
                    <button onClick={() => {setStep(2)}}
                            className="bg-transparent text-navy font-semibold text-sm underline decoration-{#0a1e3f26} underline-offset-2"
                    >Edit</button>
                </div>
                <div className="flex justify-between gap-4 py-2 px-4">
                    <p className="text-muted">Name</p>
                    <p className="text-body">
                        {form.studentFirstName + ' ' + form.studentSurname + ' (' + form.studentInitials + ')'}
                    </p>
                </div>
                <div className="flex justify-between gap-4 py-2 px-4">
                    <p className="text-muted">Gender · Citizen</p>
                    <p className="text-body">{form.gender + ' · ' + form.isSouthAfrican}</p>
                </div>
                <div className="flex justify-between gap-4 py-2 px-4">
                    <p className="text-muted">Home language</p>
                    <p className="text-body">{form.homeLanguage}</p>
                </div>
                <div className="flex justify-between gap-4 py-2 px-4">
                    <p className="text-muted">School · Grade</p>
                    <p className="text-body">{form.schoolName + ' · ' + form.grade}</p>
                </div>
            </div>

            <div className="border border-navy/15 rounded-md">
                <div className="bg-cream py-2 px-4 flex justify-between items-center">
                    <p className="text-sm tracking-kicker text-muted">DOCUMENTS TO BRING</p>
                    <button onClick={() => {setStep(3)}}
                            className="bg-transparent text-navy font-semibold text-sm underline decoration-{#0a1e3f26} underline-offset-2"
                    >Edit</button>
                </div>
                <div className="py-2 px-4 space-y-2">
                    <p className="text-body">{
                        form.isSouthAfrican === 'Yes' ? "Parent's proof of South African ID" :
                            "Parent's proof of passport"
                    }</p>
                    <p className="text-body">Student's proof of ID</p>
                    <p className="text-body">Proof of registration payment</p>
                </div>
            </div>

            <div className="border border-navy/15 rounded-md p-4 space-y-2">
                <p className="text-red tracking-kicker text-sm">TERMS AND CONDITIONS</p>
                <p className="text-muted text-sm">
                    The R150 registration fee is non-refundable for new students. Monthly fees are due before the 10th
                    of each month to avoid exclusion. The December fee covers January and must be paid to avoid
                    deregistration. A zero-tolerance policy applies to bullying, and damage to property is repaid
                    by the client. These terms are governed by South African law.
                </p>
            </div>

            <form className="flex items-center gap-4">
                <input type="checkbox" id='terms' name='agreeTerms' checked={form.agreeTerms} onChange={change}
                    className='border border-navy rounded w-8 h-8 focus-visible:outline-none
                        focus-visible:ring-2 focus-visible:ring-navy'/>
                <label htmlFor='terms' className="text-navy">
                    I have read and accept the terms and conditions <span className="text-red">*</span>
                </label>
            </form>

            <div className="border border-navy/15"/>

            <div className="flex justify-between items-center gap-4">
                <button onClick={back} className="bg-transparent text-navy border border-navy rounded-full py-2 px-4">
                    ← Back
                </button>
                <button className="bg-red text-white rounded-full py-2 px-4">Submit enrollment →</button>
            </div>
        </div>
    );
}

export default Step4;