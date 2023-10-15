const cart1 = document.querySelector('.cart_1');
const slider = document.getElementById('slider');
const nextButton = document.querySelector('.next');
const backButton = document.querySelector('.back');
const slideWidth = 259 + 37; // Обновленная ширина элемента li (259px + 37px от margin)
const slideHeight = 407; // Обновленная высота элемента li (407px)

let isAnimating = false;
let currentBackgroundIndex = 0;

const backgrounds = [
  'url(../../../static/main/img/Background_main.png)',
  'url(../../../static/main/img/Background_main_2.png)',
  'url(../../../static/main/img/Background_main_3.png)',
  'url(../../../static/main/img/Background_main_4.png)',
  'url(../../../static/main/img/Background_main_5.png)',
];

nextButton.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;

    // Обновление фона в блоке .cart_1
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    cart1.style.transition = 'background 0.5s ease-in-out';
    cart1.style.background = backgrounds[currentBackgroundIndex];

    // Обновление ссылки элемента .watch
    const newWatchLink = generateNewWatchLink(currentBackgroundIndex);
    const watchElement = document.querySelector('.watch');
    watchElement.setAttribute('href', newWatchLink);

    // Перемещение слайдов в блоке #slider
    const firstItem = slider.firstElementChild;
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${slideWidth}px)`;

    const transitionEndHandler = () => {
        slider.style.transition = 'none';
        slider.style.transform = 'translateX(0)';
        slider.appendChild(firstItem);
        isAnimating = false;
        slider.removeEventListener('transitionend', transitionEndHandler);
    };

    slider.addEventListener('transitionend', transitionEndHandler);
});

backButton.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;

    // Обновление фона в блоке .cart_1
    currentBackgroundIndex = (currentBackgroundIndex - 1 + backgrounds.length) % backgrounds.length;
    cart1.style.transition = 'background 0.5s ease-in-out';
    cart1.style.background = backgrounds[currentBackgroundIndex];

    // Обновление ссылки элемента .watch
    const newWatchLink = generateNewWatchLink(currentBackgroundIndex);
    const watchElement = document.querySelector('.watch');
    watchElement.setAttribute('href', newWatchLink);

    // Перемещение слайдов в блоке #slider
    slider.style.transition = 'none';
    slider.style.transform = `translateX(-${slideWidth}px)`;
    slider.insertBefore(slider.lastElementChild, slider.firstElementChild);

    requestAnimationFrame(() => {
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = 'translateX(0)';
    });

    const transitionEndHandler = () => {
        isAnimating = false;
        slider.removeEventListener('transitionend', transitionEndHandler);
    };

    slider.addEventListener('transitionend', transitionEndHandler);
});

function generateNewWatchLink(index) {
    const watchLinks = [
        "/watch/%D0%A1%D1%83%D0%B4%D0%B7%D1%83%D0%BC%D1%8D,%20%D0%B7%D0%B0%D0%BA%D1%80%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B0%D1%8F%20%D0%B4%D0%B2%D0%B5%D1%80%D0%B8/1/",
        "/watch/%D0%BA%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA,%20%D1%80%D0%B0%D1%81%D1%81%D0%B5%D0%BA%D0%B0%D1%8E%D1%89%D0%B8%D0%B9%20%D0%B4%D0%B5%D0%BC%D0%BE%D0%BD%D0%BE%D0%B2/1/",
        "/watch/%D0%A0%D0%B5%D0%B8%D0%BD%D0%BA%D0%B0%D1%80%D0%BD%D0%B0%D1%86%D0%B8%D1%8F%20%D0%B1%D0%B5%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%BE%D0%B3%D0%BE/1/",
        "/watch/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B1%D0%B5%D0%BD%D0%B7%D0%BE%D0%BF%D0%B8%D0%BB%D0%B0/1/",
        "/watch/%D0%9C%D0%B0%D1%81%D1%82%D0%B5%D1%80%D0%B0%20%D0%9C%D0%B5%D1%87%D0%B0%20%D0%9E%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD/1/"
    ];
    
    // Обновление ссылки
    const watchElement = document.querySelector('.watch');
    watchElement.setAttribute('href', watchLinks[index]);

    // Обновление текста в элементе .title
    const titleElement = document.querySelector('.title');
    const titleTexts = [
        "Suzume No Tojimari",
        "Kimetsu no Yaiba",
        "Mushoku Tensei",
        "Chainsaw Man",
        "Sword Art Online"
    ];
    titleElement.style.opacity = 0; // Скрываем текст перед обновлением
    setTimeout(() => {
        titleElement.textContent = titleTexts[index];
        titleElement.style.opacity = 1; // Плавно показываем текст
    }, 200);

    const subtitleElement = document.querySelector('.subtitle');
    const subtitleTexts = [
        "Школьница по имени Сузумэ жила обычной жизнью, пока не встретила очень загадочного парня. Этот парень закрывает некие двери, грозящие нашему миру страшными катаклизмами. Девушка решает помочь ему в его непростом деле, однако всё становится куда сложнее с появлением странного вида кота по имени Дайджин.",
        "С древних времён, люди боятся лесных демонов. Но есть легенда об убийце демонов, что уничтожает этих кровожадных существ. После смерти своего отца Танжиро пришлось самому заботиться о своей маме и братьях с сёстрами. Несмотря на трагедию, их жизнь казалась счастливой. Но в один день счастью приходит конец. Семья Танжиро убита, а единственна выжившая сестра Нэзуко превратилась в демона. В довершение трагедии появляется охотник на демонов Томиока Гию. Он уже собирался прикончить Нэзуко, когда к его удивлению, брат с сестрой встали на защиту друг друга. Увидев навыки Танжиро и странность ситуации, Гию решает отправить ребят к своему старому учителю. Так начинается жизнь Танжиро в качестве охотника на демонов. Он отправляется на поиски способа вылечить свою сестру, а также не забывает о мести убийце своей семьи.",
        "Жизнь безработного 34-летнего отаку заходит в тупик, и мужчина решает, что пора начать всё с чистого листа. Но вот незадача — его сбивает грузовик, и он попадает в магический мир! (снова. ничего нового. грузовик-сан) Бывший отаку перевоплощается в младенца под именем Ру́дэус Грэ́йрет, сохранив все воспоминания из прошлой жизни. Несмотря на все опасности и причуды нового мира, он воспылал намерением стать сильнейшим магом, который превзойдёт по силам даже самих богов!",
        "Мир, в котором родился Денджи, был совершенно ему не рад: его отец совершил самоубийство, оставив ему в наследство гору долгов перед Якудза, повсюду шастают демоны, которые только и жаждут утащить кого-нибудь в подворотню и сожрать. Единственным способом для юноши избавиться от долгов и зажить хотя бы обычной жизнью является убийство этих самых демонов. Но с одним из них Денджи удалось подружиться и заключить контракт. После смерти отца Денджи встретил маленького раненого демона Почиту. Отдав ему свою кровь, он исцелил его и взял с него обещание, согласно которому каждый из них обязуется помогать другому выживать в этом отвратном мире. Спонсор озвучки: kino.pub При регистрации по промокоду «anilibria» 5 дней бесплатного Pro-аккаунта!",
        "В 2022 году человечество совершило технологический прорыв. Мечты о полном погружении в игру наконец стали реальными. Многопользовательская игра Sword Art Online погружает игрока в красочный мир, полный существ и красот. Однако у этого мира есть и другая сторона. Тысячи игроков в одночасье оказываются запертыми в игре. Выход только один - пройти игру. И еще один маленький нюанс: возможности возродиться больше нет. Умираешь в игре - умираешь в реале."
    ];
    
    subtitleElement.style.opacity = 0; // Скрываем текст перед обновлением
    setTimeout(() => {
        subtitleElement.textContent = subtitleTexts[index];
        subtitleElement.style.opacity = 1; // Плавно показываем текст
    }, 200);

    const numberElement = document.querySelector('.number');
    const numberTexts = [
        "1",
        "2",
        "3",
        "4",
        "5"
    ];
    
    numberElement.style.opacity = 0; // Скрываем текст перед обновлением
    setTimeout(() => {
        numberElement.textContent = numberTexts[index];
        numberElement.style.opacity = 1; // Плавно показываем текст
    }, 200);

    return watchLinks[index];
}

