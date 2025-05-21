const btnDarkMode = document.getElementById('btn-dark-mode')

btnDarkMode.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode')
    document.body.classList.toggle('light-mode')
})