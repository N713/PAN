const link = document.body.querySelector('.achievements a');

const setScroll = () => {
    link.addEventListener('click', (evt) => {
        evt.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

export { setScroll }
