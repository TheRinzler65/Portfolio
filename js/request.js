(function() {
    emailjs.init("roQC_VmZz_8Qj02xL");
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_wci7zod', 'template_ogbleyg', this)
            .then(() => {
                alert("Email envoyé avec succès !");
            })
            .catch((error) => {
                console.error("Le mail n'a pas été envoyé...", error);
                alert("Une erreur est survenue lors de l'envoi de l'email.");
            });
    });
};