//export дефолтный, не дефолтный, вместе --- дз  поменять дизайн
function aftor() {
    const modal = document.querySelector(".modal-auth")

    const buttAuth = document.querySelector('.button-auth')
    buttAuth.addEventListener('click', showInfo)

    function showInfo(e) {
        modal.classList.add('is-open');
    }

    const btnClose = document.querySelector(".close-auth")
    btnClose.addEventListener("click", closeModal);

    modal.addEventListener("click", e => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    })

    function closeModal(e) {
        modal.classList.remove('is-open');
        err.innerHTML = "";
        inpLogin.style.borderColor = "gray";
        pass.style.borderColor = "gray";
        inpLogin.value = '';
        pass.value = '';
    }

    document.addEventListener("keydown", e => {
        if (e.code === "Escape") {
            modal.classList.remove('is-open');
        }
    })

    const inpLogin = document.querySelector("#login")
    const pass = document.querySelector("#password")
    const buttLog = document.querySelector('.button-login')
    const userName = document.querySelector('.user-name')

    const buttOut = document.querySelector('.button-out')
    //const buttAuth=document.querySelector('.button-auth')
    const buttCart = document.querySelector('.button-cart')
    //button-cart
    buttLog.addEventListener('click', log)
    buttOut.addEventListener('click', outLog)
    //modal-title
    // const user = {
    //     userLogin: 'qwerty',
    //     userPassword: 123456
    // };
    // localStorage.setItem('users', JSON.stringify(user));
    const logInfo = JSON.parse(localStorage.getItem('users'));


    const zagLog = document.querySelector('#password')

    let err = document.createElement('p');
    err.style = "color: red; text-align:center;";

    function log(e) {
        e.preventDefault();
        const user = {
            userLogin: 'qwerty',
            userPassword: 123456
        };
        localStorage.setItem('users', JSON.stringify(user));
        const logInfo = JSON.parse(localStorage.getItem('users'));
        if (check(inpLogin.value, pass.value, logInfo.userLogin, logInfo.userPassword)) {

            buttAuth.style.display = 'none';
            buttOut.classList.add('is-open');
            buttCart.classList.add('is-open');
            userName.classList.add('is-open');
            userName.textContent = user.userLogin;

            closeModal();
        }
        else {
            inpLogin.style.borderColor = "red";
            pass.style.borderColor = "red";
            err.textContent = "Неверно введены логин или пароль";
            zagLog.after(err)
        }

    }

    function check(usNam, usPass, locUsNal, locUsPass) {
        if (usNam.trim().length > 0 && usPass.trim().length > 0) {
            if (usNam == locUsNal && usPass == locUsPass) {
                return true
            }
            else return false
        }
        else return false
    }
    function outLog() {
        buttAuth.style.display = 'flex';
        buttOut.classList.remove('is-open');
        buttCart.classList.remove('is-open');
        userName.classList.remove('is-open');
        localStorage.removeItem('users');
    }
    if (logInfo) {
        userName.textContent = logInfo.userLogin;
        buttAuth.style.display = 'none';
        buttOut.classList.add('is-open');
        buttCart.classList.add('is-open');
        userName.classList.add('is-open');
    }
}

export { aftor }
