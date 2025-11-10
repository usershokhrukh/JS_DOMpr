const elForm = document.querySelector('.register');
const elSearch = document.querySelector('.register__search');
const elInputUser = document.querySelectorAll('.register__box-input')[0];
const elInputPassword = document.querySelectorAll('.register__box-input')[1];
const elButton = document.querySelector('.register__button');
const elText = document.querySelectorAll('.register__input-text');
const elIcons = document.querySelectorAll('.register__password-icons');
let sendRegis = 0;
// console.log(elIcons);



elForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!elInputUser.value.trim() || !elInputPassword.value.trim()) {
    if (!elInputUser.value.trim() && !elInputPassword.value.trim()) {
      elText[0].style.cssText = `
      color: rgba(255, 255, 255, 0.61);
      font-weight: 500;
      animation: warning 0.5s ease-in-out 1;`;

      elText[1].style.cssText = `
      color: rgba(243, 243, 243, 0.61);
      font-weight: 500;
      animation: warning 0.5s ease-in-out 1;`;

      elInputUser.style.cssText = `
      border: 1px solid rgba(255, 81, 81, 0.61);`;

      elInputPassword.style.cssText = `
      border: 1px solid rgba(255, 81, 81, 0.61);`;
    }

    if (!elInputUser.value.trim()) {
      elText[0].style.cssText = `
      color: rgba(243, 243, 243, 0.61);
      font-weight: 500;
      animation: warning 0.5s ease-in-out 1;`;
      elInputUser.style.cssText = `
      border: 1px solid rgba(255, 81, 81, 0.61);`;
    }

    if (!elInputPassword.value.trim()) {
      elText[1].style.cssText = `
      color: rgba(243, 243, 243, 0.61);
      font-weight: 500;
      animation: warning 0.5s ease-in-out 1;`;

      elInputPassword.style.cssText = `
      border: 1px solid rgba(255, 81, 81, 0.61);`;
    }
  }
} )



window.addEventListener('keydown', (kEvent) => {
  if(kEvent.key == 'Enter') {
      kEvent.preventDefault();
      if (!elInputUser.value.trim() || !elInputPassword.value.trim()) {
        if (!elInputUser.value.trim() && !elInputPassword.value.trim()) {
          elText[0].style.cssText = `
          color: rgba(243, 243, 243, 0.61);
          font-weight: 500;
          animation: warning 0.5s ease-in-out 1;`;
          elText[1].style.cssText = `
            color: rgba(243, 243, 243, 0.61);
            font-weight: 500;
            animation: warning 0.5s ease-in-out 1;`;  
          
          elInputUser.style.cssText = `
          border: 1px solid rgba(255, 81, 81, 0.61);`;

          elInputPassword.style.cssText = `
          border: 1px solid rgba(255, 81, 81, 0.61);`;
        }

        if (!elInputUser.value.trim()) {
          elText[0].style.cssText = `
          color: rgba(243, 243, 243, 0.61);
          font-weight: 500;
          animation: warning 0.5s ease-in-out 1;`;

          elInputUser.style.cssText = `
          border: 1px solid rgba(255, 81, 81, 0.61);`;
        }

        if (!elInputPassword.value.trim()) {
          elText[1].style.cssText = `
          color: rgba(243, 243, 243, 0.61);
          font-weight: 500;
          animation: warning 0.5s ease-in-out 1;`;

          elInputPassword.style.cssText = `
          border: 1px solid rgba(255, 81, 81, 0.61);`;
        }
      }
  }

  if(elInputUser.value.trim()) {
    elInputUser.style.cssText = `
    border: 1px solid rgb(21, 21, 21);`;
  }

  if(elInputPassword.value.trim()) {
    elInputPassword.style.cssText = `
    border: 1px solid rgb(21, 21, 21);`;
  }

  if(elInputUser.value.trim().length == 1 || !elInputUser.value.trim()) {
    elInputUser.style.cssText = `
    border: 1px solid rgba(255, 81, 81, 0.61);`;    
  }

  if(elInputPassword.value.trim().length == 1 || !elInputPassword.value.trim()) {
    elInputPassword.style.cssText = `
    border: 1px solid rgba(255, 81, 81, 0.61);`;    
  }


})

