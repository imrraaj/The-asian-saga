window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

const menubtn = document.getElementById('menubtn');
menubtn.addEventListener('click', () => {
    const navigation = document.getElementById('navigation');
    navigation.classList.toggle('responsive');
});

function remove() {
    const navigation = document.getElementById('navigation');
    if (navigation.className == 'navigation font-text responsive') {
        navigation.classList.toggle('responsive');
    }
}




