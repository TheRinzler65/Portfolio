import { useRef, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Mail, X } from "lucide-react";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
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
        (document.getElementById("contact_modal") as HTMLDialogElement).close();
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi :", error);
        alert("Une erreur est survenue lors de l'envoi.");
      });
  };

  return (
    <dialog id="contact_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-base-200">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            <X className="w-5 h-5" />
          </button>
        </form>

        <h3 className="font-bold text-lg text-accent text-center mb-4">
          Contactez-moi
        </h3>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Votre nom</span>
            </label>
            <input
              name="name"
              className="input input-bordered w-full focus:input-accent"
              required
              placeholder="John Doe"
              type="text"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Votre email</span>
            </label>
            <input
              name="email"
              className="input input-bordered w-full focus:input-accent"
              required
              placeholder="john@example.com"
              type="email"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Votre message</span>
            </label>
            <textarea
              name="message"
              rows={4}
              className="textarea textarea-bordered w-full focus:textarea-accent resize-none"
              required
              placeholder="Votre message..."
            />
          </div>
          <div className="modal-action">
            <button
              type="submit"
              className="btn btn-accent w-full text-white gap-2"
            >
              <Mail className="w-5 h-5" />
              Envoyer
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ContactForm;