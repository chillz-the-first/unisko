import Tile from "../Tile.jsx";
import Icon from "../../lib/Icon.jsx";
import Button from "../Button.jsx";
import {getWhatsAppUrl} from "../../lib/whatsapp.js";

const EmptyList = () => {
    return (
        <Tile className="flex items-center justify-center" tone="cream">
            <div className="text-center mx-auto space-y-4 py-8 md:py-10">
                <Icon name="empty" className="w-9 h-9 text-muted mx-auto" strokeWidth={1.5} />
                <h2 className="text-navy text-title font-semibold">Nothing scheduled right now.</h2>
                <p className="text-muted max-w-[40ch] mx-auto">
                    New events are posted here first. Message us on WhatsApp to hear when the next one opens.
                </p>
                <Button href={getWhatsAppUrl("Hello Unisko, please let me know when you have a new event planned.")}
                        variant="ink" external={true}
                >
                    Notify me on WhatsApp
                </Button>
            </div>
        </Tile>
    );
};

export default EmptyList;