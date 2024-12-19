// Получаем элементы модального окна и кнопок
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const closeBtn = document.getElementsByClassName("close")[0];
const message = document.getElementById("but");
const alert = document.getElementById("top-alert");
const form = document.getElementById("add-form")

document.getElementById('submit').onclick = submitForm;

// Функция для открытия модального окна
function openModal(service) {
    modalTitle.textContent = `Вы выбрали:  ${service}`; // Устанавливаем заголовок
    modal.style.display = "block"; // Показываем модальное окно
}

// Функция для закрытия модального окна
closeBtn.onclick = function() {
    modal.style.display = "none"; // Скрываем модальное окно
}

// Закрытие модального окна при клике вне его
//window.onclick = function(event) {
//    if (event.target === modal) {
//        modal.style.display = "none"; // Скрываем модальное окно
//    }
//}

// Назначаем обработчики событий на кнопки
const buttons = document.querySelectorAll(".open-modal");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const service = button.getAttribute("data-service"); // Получаем название услуги
        openModal(service); // Открываем модальное окно с заголовком
    });
});

function alertWar(message){
    alert.textContent = message;
    alert.style.display = "block";
    alert.style.background = "#decf9e";
    alert.style.color = "#664d03";
        setTimeout(() => {
            alert.style.display = "none";
        }, 2000);
}

function alertInfo(message){
    alert.textContent = message;
    alert.style.display = "block";
    alert.style.background = "#77e6b4";
    alert.style.color = "#0f5132";
    setTimeout(() => {
        alert.style.display = "none";
    }, 2000);
    
}

function submitForm() {
    
    const formData = new FormData();
    const serviceСhoice = document.getElementById('modal-title').textContent;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    //const contry = document.getElementById('contry').options[index].text;
    const date = document.getElementById('date').value;
    const comment = document.getElementById('comment').value;    

    if (!name) {
        alertWar("Пожалуйста, укажите Ваше имя.");
        return;
    }
    if (!email) {
        alertWar("Пожалуйста, укажите Ваш email.");
        return;
    }
    if (!phone) {
        alertWar("Пожалуйста, укажите Ваш телефон.");
        return;
    }
    if (!date) {
        alertWar("Пожалуйста, укажите дату.");
        return;
    }

    //в!/^\+7-\d{3}-\d{3}-\d{2}-\d{2}$/.test(phone) || 
    if (!/^\d{11}$/.test(phone)) {
        alertWar("Некорректный телефон!");
        return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alertWar("Некорректный адрес E-mail!");
        return;
    }
    if (!check.checked){
        alertWar("Пожалуйста, установите флажок.");
        return;
    }

    formData.append('Услуга', serviceСhoice);
    formData.append('Имя', name);
    formData.append('email', email);
    formData.append('Телефон', phone);
    formData.append('Дата', date);
    formData.append('Комментарий', comment);

    formData.printData = function() {
        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }
    }

    formData.printData();

    alertInfo("Форма успешно отправлена.");
    console.log("Форма успешно отправлена.")
    modal.style.display = "none";


    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('date').value = '';
    document.getElementById('comment').value = '';
    document.getElementById('check').checked = false;
}