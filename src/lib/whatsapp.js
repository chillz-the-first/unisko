export const WHATSAPP_NUMBER = "27618117116";

export const getWhatsAppUrl = (message = "") => {
    if (!message) return `https://wa.me/${WHATSAPP_NUMBER}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};