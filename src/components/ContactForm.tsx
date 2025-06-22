import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Mail } from "lucide-react";

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                alert("Email envoyé avec succès !");
                formRef.current?.reset();
            })
            .catch((error) => {
                console.error("Erreur lors de l'envoi :", error);
                alert("Une erreur est survenue lors de l'envoi.");
            });
    };

    return (
        <div className="max-w-md w-full mx-auto p-6 bg-gray-600 rounded-lg shadow-md">
            <h2 className="text-3xl text-center text-accent font-bold mb-6">Contactez-moi</h2>
            <form ref={formRef} onSubmit={sendEmail}>
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2">Votre nom</label>
                    <input name="user_name" className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500" required placeholder="John Doe" type="text" />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2">Votre email</label>
                    <input name="user_email" className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500" required placeholder="john@example.com" type="email" />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2">Votre message</label>
                    <textarea name="message" rows={4} className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500" required placeholder="Tapez votre message ici..." />
                </div>
                <div>
                    <button type="submit" className="btn btn-accent md:w-fit text-white font-semibold px-4 py-2 rounded-lg focus:outline-white flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                        Envoyer le message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
