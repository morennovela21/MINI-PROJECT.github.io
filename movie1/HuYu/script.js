//sign In 
const modal = document.querySelector('.modal')
const loginBtn = document.querySelector('.login-btn')
const closeBtn = document.querySelector('.close')
const aSignIn = document.querySelector('.a_signIn')
// register
const modal_r = document.querySelector('.modal_register')
const closeBtn_r = document.querySelector('.close_register')
const aRegister = document.querySelector('.a_register')

loginBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

aRegister.addEventListener('click', openModalR)
closeBtn_r.addEventListener('click', closeModalR)
window.addEventListener('click', outsideClickR)

aSignIn.addEventListener('click', openModal)


function openModal() {
  modal.style.display = 'block'
  modal_r.style.display = 'none'
}

function closeModal() {
  modal.style.display = 'none'
}

function outsideClick(e) {
  if (e.target == modal) {
    closeModal()
  }
}

function openModalR() {
  modal_r.style.display = 'block'
  modal.style.display = 'none'
}

function closeModalR() {
  modal_r.style.display = 'none'
}

function outsideClickR(e) {
    if (e.target == modal_r) {
      closeModalR()
    }
  }

const eyeSign = document.querySelector("#eye_sign");
const eyePass = document.querySelector("#eye_pass");
const eyeCpass = document.querySelector("#eye_cpass");

const passwordSign = document.querySelector("#passwordSign");
const password = document.querySelector("#password");
const passwordConReg = document.querySelector("#passwordConReg");

eyeSign.addEventListener("click", () => {
    const type = passwordSign.getAttribute("type");
    if (type == "text") {
        passwordSign.setAttribute("type", "password");
      eyeSign.className = "fa fa-eye-slash";
    } else {
        passwordSign.setAttribute("type", "text");
      eyeSign.className = "fa fa-eye";
    }
  });

eyePass.addEventListener("click", () => {
    const type = password.getAttribute("type");
    if (type == "text") {
        password.setAttribute("type", "password");
      eyePass.className = "fa fa-eye-slash";
    } else {
        password.setAttribute("type", "text");
      eyePass.className = "fa fa-eye";
    }
  });

eyeCpass.addEventListener("click", () => {
    const type = passwordConReg.getAttribute("type");
    if (type == "text") {
        passwordConReg.setAttribute("type", "password");
      eyeCpass.className = "fa fa-eye-slash";
    } else {
        passwordConReg.setAttribute("type", "text");
      eyeCpass.className = "fa fa-eye";
    }
  });
