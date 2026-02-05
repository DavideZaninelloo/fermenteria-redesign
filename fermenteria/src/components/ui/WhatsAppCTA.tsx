import { MessageCircle } from 'lucide-react';

const WhatsAppCTA = () => {
  return (
    <a
      href="https://wa.me/393273180556" // Placeholder number, update later if needed
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppCTA;
