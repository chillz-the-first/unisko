import EnrollWizard from "../components/EnrollWizard.jsx";
import SectionStart from "../components/SectionStart.jsx";

const Enroll = () => {
    return (
        <div>
            {/*Intro section*/}
            <section className="bg-white py-16 px-10">
                <div className="max-w-6xl mx-auto space-y-2">
                    <SectionStart>ENROLLMENT FORM</SectionStart>
                    <h1 className="font-serif font-semibold text-6xl text-navy">Join Unisko</h1>
                    <p className="text-muted">43 Oil Avenue, Freedom Park · 061 811 7116 · Unisko.co@gmail.com</p>
                </div>
            </section>
            <EnrollWizard/>
        </div>
    );
};

export default Enroll;