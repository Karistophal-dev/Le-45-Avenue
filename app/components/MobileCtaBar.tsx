export default function MobileCtaBar() {
  return (
    <div className="mobile-cta-bar">
      <a
        href="tel:0232342370"
        className="mobile-cta-btn mobile-cta-phone"
      >
        Appeler
      </a>
      <a
        href="https://speedeats.fr/restaurants/38-pacy-palace"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-cta-btn mobile-cta-order"
      >
        Commander en ligne
      </a>
    </div>
  );
}
