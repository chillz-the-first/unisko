const WHATSAPP_NUMBER = "27618117116";

export const getWhatsAppUrl = (message = "", number= WHATSAPP_NUMBER) => {
    if (!message) return `https://wa.me/${number}`;
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};