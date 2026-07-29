const ChannelCard = ({kicker, title, body, status, number, email, cta, ctaTo, variant}) => {
    const styles = {
        'featured': {
            'container': 'p-8 border-t-4 border-t-red',
            'kicker': 'text-[10px] tracking-kicker font-medium text-red',
            'header': 'font-serif text-navy text-3xl font-semibold',
            'body': 'text-body',
            'status': 'text-muted text-sm',
            'cta': 'bg-red text-white px-4 py-2 rounded-full w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red',
        },
        'std': {
            'container': 'py-8 px-6',
            'kicker': 'text-[10px] tracking-kicker font-medium text-muted',
            'header': 'font-serif text-navy text-2xl font-semibold',
            'body': 'text-muted text-xs',
            'num': 'font-serif text-navy text-xl font-semibold',
            'mail': 'font-serif text-navy font-semibold',
            'cta': 'bg-transparent text-navy px-4 py-2 rounded-full w-fit border border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy',
        },
    };
    const style = styles[variant];
    return (
        <div className={`bg-white flex flex-col justify-between space-y-4 rounded-md ${style.container}`}>
            <div className="space-y-2">
                <p className={style.kicker}>{kicker}</p>
                <h2 className={style.header}>{title}</h2>
                <p className={style.body}>{body}</p>
                {status && (<p className={style.status}>{status}</p>)}
                {number && (<p className={style.num}>{number}</p>)}
                {email && (<p className={style.mail}>{email}</p>)}
            </div>

            <a href={ctaTo} className={style.cta}>{cta}</a>
        </div>
    );
}

export default ChannelCard;