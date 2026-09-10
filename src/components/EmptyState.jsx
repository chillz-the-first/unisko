const EmptyState = () => {
    return (
        <div>
            <div className="flex flex-col items-center gap-4 rounded-md border border-navy/20 p-5">
                <h3 className="font-serif font-semibold text-2xl md:text-3xl lg:text-4xl">
                    Nothing scheduled right now
                </h3>
                <p className="text-muted">
                    New events are posted here first. Message us on WhatsApp to be told when the next one opens.
                </p>
                <a href="https://wa.me/27618117116?text=Hi%20Unisko%2C%20I'm%20interested%20in%20Unisko%20Events"
                   className="bg-transparent text-navy text-center rounded-full px-4 py-2 border border-navy
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy">
                    Notify me on WhatsApp
                </a>
            </div>
        </div>
    );
}

export default EmptyState;