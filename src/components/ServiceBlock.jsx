import SectionStart from "./SectionStart.jsx";
import {Link} from "react-router-dom";

const ServiceBlock = ({kicker, title, price, duration, body, features, variant, secondBtn = true, featureGrid = false}) => {
    const styles = {
        'navy': {
            'container': '',
            'title': 'font-serif text-white text-4xl font-semibold',
            'body': 'text-white/75',
            'primaryBtn': 'bg-red text-white py-2 px-6 rounded-full text-center',
            'secondaryBtn': 'bg-transparent text-white text-center py-2 px-6 border border-white rounded-full',
        },
        'white': {
            'container': 'bg-white',
            'title': 'font-serif text-navy text-3xl font-semibold',
            'body': 'text-body',
            'primaryBtn': 'bg-navy text-white py-2 px-6 rounded-full text-center',
            'secondaryBtn': 'bg-transparent text-navy text-center py-2 px-6 border border-navy rounded-full',
        },
        'white-sm': {
            'container': 'bg-white p-8',
            'title': 'font-serif text-navy text-2xl font-semibold',
            'body': 'text-body',
            'primaryBtn': 'bg-navy text-white py-2 px-6 rounded-full text-center',
            'secondaryBtn': 'bg-transparent text-navy text-center py-2 px-6 border border-navy rounded-full',
        },
    };

    const style = styles[variant];

    return (
        <div className={`space-y-4 ${style.container}`}>
            <SectionStart>{kicker}</SectionStart>
            <h2 className={style.title}>{title}</h2>
            <p className={`text-sm ${style.body}`}>
                <span className='text-red font-semibold text-xl'>{price}</span>/{duration}
            </p>
            <p className={style.body}>{body}</p>

            <div className={featureGrid ? "grid grid-cols-2" : ""}>
                {features.map((feature) => (
                    <p className={style.body} key={feature}>✓ {feature}</p>
                ))}
            </div>

            <div className="flex gap-4 my-2">
                <Link to='/enroll' className={style.primaryBtn}>Enroll</Link>
                {secondBtn && (<Link to='/contact' className={style.secondaryBtn}>Learn more →</Link>)}
            </div>
        </div>
    );
}

export default ServiceBlock;