document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const openModal = document.querySelector('.test');
    const closeModal = document.querySelector('.modal_close');

    if (modal && openModal && closeModal) {
        openModal.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
        });

        closeModal.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('active');
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    } else {
        console.error('Un ou plusieurs éléments nécessaires sont manquants dans le DOM.');
    }
});
