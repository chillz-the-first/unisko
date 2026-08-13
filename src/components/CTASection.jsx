import {Link} from "react-router-dom";

const CTASection = ({headline, body, primaryLabel, primaryTo, secondaryLabel, secondaryTo}) => {
    return (
        <div className="py-16 px-10 bg-navy">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
                <div>
                    <h2 className="text-white text-4xl font-serif my-4 font-semibold">{headline}</h2>
                    <p className="text-white/75">{body}</p>
                </div>

                <div className="flex flex-col gap-4">
                    <Link to={primaryTo} className="text-white bg-red py-2 px-5 rounded-full text-center">{primaryLabel}</Link>
                    <Link to={secondaryTo} className="text-navy bg-white py-2 px-5 rounded-full text-center">{secondaryLabel}</Link>
                </div>
            </div>
        </div>
    );
}

export default CTASection;