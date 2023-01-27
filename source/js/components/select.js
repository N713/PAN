const selectName = document.body.querySelector('.select p');
const selectValues = document.body.querySelector('.select ul');
const realSelect = document.body.querySelector('select');

const setSelect = () => {
    selectName.addEventListener('click', () => {
        selectName.classList.toggle('opened');
    });

    selectValues.addEventListener('click', (evt) => {
        selectName.textContent = evt.target.textContent;
        realSelect.value = evt.target.textContent;
        selectName.classList.remove('opened');
    });
};

export { setSelect }
