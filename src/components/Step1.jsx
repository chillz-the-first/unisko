import SectionStart from "./SectionStart.jsx";

const Step1 = ({step, form, change, next}) => {
    const barColor = 'from-[#0a1e3f]'
    const stepPerc = {
        1: {colored: 'from-25%', normal: 'to-25%'},
        2: {colored: 'from-50%', normal: 'to-50%'},
        3: {colored: 'from-75%', normal: 'to-75%'},
        4: {colored: 'from-75%', normal: 'to-100%'},
    }
    const stop = stepPerc[step] || {colored: 'from-0%', normal: 'to-0%'}

    return (
        <div className='space-y-4'>
            <div className="space-y-4">
                <SectionStart>STEP {step} OF 4</SectionStart>
                <div className={`w-full border-4 border-transparent bg-origin-border bg-gradient-to-r ${barColor} ${stop.colored} to-gray-200 ${stop.normal}`}/>
                <div className="grid grid-cols-4 items-center justify-between">
                    <div>
                        <p className="text-red text-[10px] tracking-kicker font-medium">CURRENT</p>
                        <p className="font-semibold text-navy">Parent</p>
                    </div>
                    <div>
                        <p className="text-muted text-[10px] tracking-kicker font-medium">UP NEXT</p>
                        <p className="text-muted">Applicant</p>
                    </div>
                    <div>
                        <p className="text-muted text-[10px] tracking-kicker font-medium">THEN</p>
                        <p className="text-muted">Documents</p>
                    </div>
                    <div>
                        <p className="text-muted text-[10px] tracking-kicker font-medium">LAST</p>
                        <p className="text-muted">Review</p>
                    </div>
                </div>
            </div>

            <div className='border border-navy/15'/>

            <div className="space-y-4">
                <h2 className="font-semibold font-serif text-navy text-4xl">Let's start with you.</h2>
                <p className="text-muted text-sm">The parent or guardian responsible for enrollment.</p>

                <form className='space-y-4'>
                    {/*Parent' info*/}
                    <div className="grid grid-cols-[1fr_2fr_1fr] gap-4">
                        <div>
                            <label htmlFor="title" className="text-navy text-sm font-semibold">Title</label>
                            <select name="title" id="title" value={form.title}
                                    className="text-sm border border-muted/50 rounded px-3 py-2 w-full
                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                                    onChange={change}
                            >
                                <option value='Mr.'>Mr.</option>
                                <option value='Mrs.'>Mrs.</option>
                                <option value='Miss'>Miss</option>
                                <option value='Dr.'>Dr.</option>
                                <option value='Prof.'>Prof.</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="surname" className="text-navy text-sm font-semibold">
                                Surname <span className="text-red">*</span>
                            </label>
                            <input type="text" id="surname" name="surname" value={form.surname}
                                   placeholder="Mokoena" onChange={change}
                                   className="text-sm border border-muted/50 rounded px-3 py-2 w-full
                                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"/>
                        </div>
                        <div>
                            <label htmlFor="initials" className="text-navy text-sm font-semibold">Initials</label>
                            <input type="text" id="initials" name="initials" value={form.initials}
                                   placeholder="T.M" onChange={change}
                                   className="text-sm border border-muted/50 rounded px-3 py-2 w-full
                                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"/>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="text-navy text-sm font-semibold">
                                First name <span className="text-red">*</span>
                            </label>
                            <input type="text" id="firstName" name="firstName" value={form.firstName}
                                   placeholder="Thabo" onChange={change}
                                   className="text-sm border border-muted/50 rounded px-3 py-2 w-full
                                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"/>
                        </div>
                        <div>
                            <label htmlFor="idNumber" className="text-navy text-sm font-semibold">
                                ID / Passport number <span className="text-red">*</span>
                            </label>
                            <input type="text" id="idNumber" name="idNumber" value={form.idNumber}
                                   placeholder="13 digit ID or passport" onChange={change}
                                   className="text-sm border border-muted/50 rounded px-3 py-2 w-full
                                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"/>
                        </div>
                    </div>

                    <div className='border border-navy/15'/>

                    {/*Residential info*/}
                    <p className="text-muted tracking-kicker font-medium mb-2">RESIDENTIAL ADDRESS</p>
                    <div>
                        <label htmlFor="address" className="text-navy text-sm font-semibold">
                            Street address <span className="text-red">*</span>
                        </label>
                        <input type="text" id="address" name="address" value={form.address}
                               placeholder="House number and street" onChange={change}
                               className="text-sm border border-muted/50 rounded px-3 py-2 w-full
                                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"/>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="town" className="text-navy text-sm font-semibold">Town</label>
                            <input type="text" id="town" name="town" value={form.town}
                                   placeholder="Town" onChange={change}
                                   className="text-sm border border-muted/50 rounded px-3 py-2 w-full
                                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"/>
                        </div>
                        <div>
                            <label htmlFor="city" className="text-navy text-sm font-semibold">
                                City <span className="text-red">*</span>
                            </label>
                            <input type="text" id="city" name="city" value={form.city}
                                   placeholder="City" onChange={change}
                                   className="text-sm border border-muted/50 rounded px-3 py-2 w-full
                                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"/>
                        </div>
                        <div>
                            <label htmlFor="cellPhone" className="text-navy text-sm font-semibold">
                                Cell phone <span className="text-red">*</span>
                            </label>
                            <input type="text" id="cellPhone" name="cellPhone" value={form.cellPhone}
                                   placeholder="081 234 5678" onChange={change}
                                   className="text-sm border border-muted/50 rounded px-3 py-2 w-full
                                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"/>
                        </div>
                    </div>
                    <p className="text-navy text-sm p-2 bg-cream">
                        <span className="bg-navy inline-flex items-center justify-center w-5 h-5 rounded-full text-white mr-2">i</span>
                        This is the parent or guardian's information. You'll add the student's detail in the next step.
                    </p>
                    <div className="flex justify-end">
                        <button type='button' className="bg-navy text-white py-2 px-4 rounded-full" onClick={next}>Next:Applicant</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Step1;