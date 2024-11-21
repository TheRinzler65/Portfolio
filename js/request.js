(function() {
    emailjs.init("roQC_VmZz_8Qj02xL");
})();
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm('service_wci7zod', 'template_ogbleyg', this)
          .then(() => {
              console.log('Mail envoyé avec succès!');
          }, (error) => {
              console.log("Le mail n'a pas été envoyé...", error);
          });
  });
}