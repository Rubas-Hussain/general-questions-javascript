const btn = document.querySelector('.btnCont');
const quesCont = document.querySelector('.quesCont');



let isShowDetails = false;

btn.addEventListener('click', () => {
    if (isShowDetails == false) {
        btn.innerHTML = '-';
        isShowDetails = true;
        console.log(isShowDetails, '====> if');
        quesCont.style.height = '200px';
        if (!quesCont.querySelector('.divider')) {
            const divider = document.createElement('div');
            divider.classList.add('divider');
            quesCont.appendChild(divider);
        }
        if (!quesCont.querySelector('.detailsCont')) {
            const detailsCont = document.createElement('div');
            detailsCont.classList.add('detailsCont');
            detailsCont.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sequi autem commodi iure ullam officia quos sapiente asperiores rem fugiat tempore ducimus eos mollitia nobis ut quisquam esse, voluptatibus delectus!';
            quesCont.appendChild(detailsCont);
        }

    } else {
        btn.innerHTML = '+';
        isShowDetails = false;
        quesCont.style.height = '70px';
        const detailsCont = quesCont.querySelector('.detailsCont');
        const divider = quesCont.querySelector('.divider');
        if (detailsCont) {
            quesCont.removeChild(detailsCont);
        }
        if (divider) {
            quesCont.removeChild(divider);
        }
    }
});

