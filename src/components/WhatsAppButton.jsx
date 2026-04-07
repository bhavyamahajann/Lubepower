import "./WhatsAppButton.css";

const WHATSAPP_NUMBER = "919914708800";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi")}`;

const WhatsAppLogo = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" className="whatsapp-float__icon">
    <path
      fill="#25D366"
      d="M16 3C8.82 3 3 8.73 3 15.8c0 2.45.71 4.83 2.05 6.89L3.27 29l6.54-1.7A13.11 13.11 0 0 0 16 28.6c7.18 0 13-5.73 13-12.8S23.18 3 16 3Z"
    />
    <path
      fill="#FFF"
      d="M25.5 15.73c0 5.08-4.22 9.22-9.42 9.22-1.66 0-3.2-.42-4.56-1.22l-.32-.19-3.88 1 1.04-3.76-.21-.34a8.96 8.96 0 0 1-1.48-4.71c0-5.08 4.22-9.22 9.41-9.22 5.2 0 9.42 4.14 9.42 9.22Z"
    />
    <path
      fill="#25D366"
      d="M21.63 18.39c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.22-.66.08-.3-.15-1.25-.45-2.38-1.43-.88-.76-1.47-1.7-1.64-1.99-.18-.3-.02-.45.13-.6.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.62-.93-2.22-.25-.58-.5-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.34 5.24 4.54 3.12 1.2 3.12.8 3.68.75.55-.05 1.78-.73 2.02-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z"
    />
  </svg>
);

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <span className="whatsapp-float__label">Hi</span>
      <span className="whatsapp-float__button">
        <WhatsAppLogo />
      </span>
    </a>
  );
};

export default WhatsAppButton;
