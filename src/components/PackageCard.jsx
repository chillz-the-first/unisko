import {Link} from "react-router-dom";

const PackageCard = ({packages}) => {
    const styles = [
        {
            container: "border border-navy/15 rounded-2xl",
            btn: "bg-transparent text-navy border border-navy"
        },
        {
            container: "border-2 border-red rounded-2xl",
            btn: "bg-red text-white "
        },
    ]

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {packages.map(item => {
                const style = item.featured ? styles[1] : styles[0];

                return (
                    <div key={item.name} className={`bg-white ${style.container}`}>
                        {item.featured &&
                            <p className=" rounded-t-xl bg-red text-white text-center py-1 font-semibold text-sm">MOST POPULAR</p>}
                        <div className="flex flex-col justify-between space-y-4 py-6 px-4">
                            <div className="flex justify-between items-center">
                                <h3 className="font-serif text-navy font-semibold text-xl">{item.name}</h3>
                                {item.tag && <p className="bg-cream rounded-full text-center px-4 py-1">{item.tag}</p>}
                            </div>

                            <div className="space-y-2">
                                <p className="font-serif font-semibold text-navy text-3xl">
                                    {item.price}
                                    <span className="font-normal text-base text-muted">/mo</span>
                                </p>
                                <p className="text-xs text-muted">Billed monthly. Cancel with 30 days notice.</p>
                            </div>

                            <a href={`https://wa.me/27618117116?text=${item.msg}`}
                               className={`font-semibold text-center py-2 rounded-full ${style.btn}`} to="/contact"
                            >Ask about {item.name.split(" ")[1]}</a>

                            <div className="space-y-2">
                                {item.inherits && <p className="font-semibold text-navy">{item.inherits}</p>}
                                {item.features.map((feature, index) => (
                                    <p key={index} className="text-navy my-2">
                                        <span className="text-red">✓</span> {feature}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default PackageCard;