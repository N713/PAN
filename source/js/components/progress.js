const fakeProgressValue = document.body.querySelector('.progress__value');
const button = document.body.querySelector('.progress__button button');

const progressParagraphs = document.body.querySelectorAll('.progress__text p');
const progressMore = document.body.querySelector('.progress__text span');

const setValue = (value) => {
    fakeProgressValue.textContent = `${value}%`;
    fakeProgressValue.style.width = `${value}%`;
    document.body.querySelector('progress').value = value;
    document.body.querySelector('progress').textContent = `${value}%`;
}

const setProgress = () => {
    button.addEventListener('click', (evt) => {
        evt.preventDefault();
        const splittedString = evt.target.textContent.split(' ');
        const splittedValue = parseInt(fakeProgressValue.textContent.split(' ')[0]);

        if (splittedString[0] === '-') {
            splittedString.forEach(value => {
                if (parseInt(value, 10)) {
                    const sum = splittedValue - parseInt(value, 10);

                    if (sum <= 0) {
                        setValue(0);
                    } else {
                        setValue(sum);
                    }
                }
            });
        } else {
            splittedString.forEach(value => {
                if (parseInt(value, 10)) {
                    const sum = parseInt(value, 10) + splittedValue;

                    if (sum >= 100) {
                        setValue(100);
                    } else {
                        setValue(sum);
                    }
                }
            });
        }
    });

    progressParagraphs.forEach((p, i) => {
        if (i > 0) {
            p.classList.add('none');
        }
    });

    progressMore.addEventListener('click', () => {
        progressParagraphs.forEach((p) => {
            p.classList.remove('none');
        });

        progressMore.classList.add('none');
    });
}

export { setProgress }
