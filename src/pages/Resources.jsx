import SectionStart from "../components/SectionStart.jsx";



const Resources = () => {
    return (
        <div>
            {/*Intro section*/}
            <section className="bg-white py-16 px-10">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-2">
                        <SectionStart>LEARN AT YOUR OWN PACE</SectionStart>
                        <h1 className="font-serif font-semibold text-navy text-4xl md:text-5xl lg:text-6xl">
                            Courses and study packs
                        </h1>
                        <p className="text-body">
                            Recorded lessons and printable material your child can work through at home, at their own pace.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Resources;