const Step3 = ({form, change, next, back}) => {
    return (
        <div className="space-y-8 py-10">
            <div className="space-y-2">
                <h2 className="text-navy font-semibold font-serif text-4xl">Documents to bring</h2>
                <p className="text-body">
                    Please bring these to your first session so we can complete registration. <br/>
                    Tick each one to confirm you understand.
                </p>
            </div>

            <form className="space-y-4">
                <div className='flex gap-x-6 items-center pb-4 border-b-2 border-b-navy/15'>
                    <input type="checkbox" id='parentID' name="ackParentId" checked={form.ackParentId} onChange={change}
                        className='border border-navy rounded w-11 h-11 focus-visible:outline-none
                        focus-visible:ring-2 focus-visible:ring-navy'
                    />
                    <div>
                        <label htmlFor="parentID" className="text-navy">Parent proof of ID</label>
                        <p className="text-muted">{
                            form.isSouthAfrican === 'Yes' ? "A copy of the parent's or guardian's South African ID." :
                                "A copy of the parent's or guardian's passport."
                        }</p>
                    </div>
                </div>

                <div className="flex items-center gap-x-6 pb-4 border-b-2 border-b-navy/15">
                    <input type="checkbox" id='studentID' name="ackStudentId" checked={form.ackStudentId} onChange={change}
                           className='border border-navy rounded w-11 h-11 focus-visible:outline-none
                            focus-visible:ring-2 focus-visible:ring-navy'
                    />
                    <div>
                        <label htmlFor="studentID" className="text-navy">Student proof of ID</label>
                        <p className="text-muted">The learner's ID document, or a birth certificate if under 16.</p>
                    </div>
                </div>

                <div className="flex items-center gap-x-6 pb-4 border-b-2 border-b-navy/15">
                    <input type='checkbox' id='regFee' name="ackRegFee" checked={form.ackRegFee} onChange={change}
                        className='border border-navy rounded w-11 h-11 focus-visible:outline-none
                        focus-visible:ring-2 focus-visible:ring-navy'
                    />
                    <div>
                        <label htmlFor="regFee" className="text-navy">Proof of the R150 registration fee</label>
                        <p className="text-muted">A payment reference or receipt for the once-off registration fee.</p>
                    </div>
                </div>

                <p className="text-sm text-navy p-2 bg-cream border-l-4 border-l-red">
                    You do not upload anything here. You bring the documents to your child's first session,
                    and we handle them in person.
                </p>

                {/*<div className="border border-navy/15"/>*/}

                <div className="flex items-center justify-between">
                    <button type='button' onClick={back} className="bg-transparent text-navy py-2 px-4 rounded-full border border-navy">
                        ← Back
                    </button>
                    <button type='button' onClick={next} className="bg-navy text-white py-2 px-4 rounded-full">
                        Next: Review →
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Step3;