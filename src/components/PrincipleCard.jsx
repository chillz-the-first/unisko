const PrincipleCard = ({number, title, body, variant}) => {
    const styles = {
        'navy': {
            'wrapper': 'bg-navy rounded p-10 flex flex-col justify-between min-h-[220px] space-y-4',
            'number': 'text-6xl text-white/30 font-semibold font-serif',
            'title': 'text-3xl text-white font-serif font-semibold',
            'body': 'text-white/75',
        },
        'cream': {
            'wrapper': 'bg-cream rounded p-8 flex flex-col justify-between min-h-[180px] space-y-4',
            'number': 'text-4xl text-navy/25 font-semibold font-serif',
            'title': 'text-2xl text-navy font-serif font-semibold',
            'body': 'text-body',
        },
        'red': {
            'wrapper': 'bg-white rounded p-8 flex flex-col justify-between min-h-[180px] space-y-4 border-2 border-red',
            'number': 'text-5xl text-red/30 font-semibold font-serif',
            'title': 'text-2xl text-red font-serif font-semibold',
            'body': 'text-body',
        },
    }

    const style = styles[variant]

    return (
        <div className={style.wrapper}>
            <div className={style.number}>{number}</div>
            <div className='space-y-2'>
                <div className={style.title}>{title}</div>
                <div className={style.body}>{body}</div>
            </div>
        </div>
    );
}

export default PrincipleCard;