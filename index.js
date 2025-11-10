const elForm = document.querySelector(".register");
const elSearch = document.querySelector(".register__search");
const elInputUser = document.querySelectorAll(".register__box-input")[0];
const elInputPassword = document.querySelectorAll(".register__box-input")[1];
const elButton = document.querySelector(".register__button");
const elText = document.querySelectorAll(".register__input-text");
const elIcons = document.querySelectorAll(".register__password-icons");
const elSearchIcon = document.querySelector(".register__icon");
let sendRegis = 0;
// console.log(elIcons);

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    (!elInputUser.value.trim() || !elInputPassword.value.trim()) &&
    sendRegis == 0
  ) {
    if (
      !elInputUser.value.trim() &&
      !elInputPassword.value.trim() &&
      sendRegis == 0
    ) {
      elText[0].style.cssText = `
      color: rgba(255, 255, 255, 0.61);
      font-weight: 500;
      animation: warning 0.5s ease-in-out 1;
      font-family: 'Open Sans';
      `;

      elText[1].style.cssText = `
      color: rgba(243, 243, 243, 0.61);
      font-weight: 500;
      animation: warning 0.5s ease-in-out 1;
      font-family: 'Open Sans';`;

      elInputUser.style.cssText = `
      border: 1px solid rgba(255, 81, 81, 0.61);
      font-family: 'Open Sans';`;

      elInputPassword.style.cssText = `
      border: 1px solid rgba(255, 81, 81, 0.61);
      font-family: 'Open Sans';`;
    }

    if (!elInputUser.value.trim() && sendRegis == 0) {
      elText[0].style.cssText = `
      color: rgba(243, 243, 243, 0.61);
      font-weight: 500;
      animation: warning 0.5s ease-in-out 1;
      font-family: 'Open Sans';`;
      elInputUser.style.cssText = `
      border: 1px solid rgba(255, 81, 81, 0.61);
      font-family: 'Open Sans';`;
    } else {
      sendRegis = 1;
    }

    if (!elInputPassword.value.trim() && sendRegis == 0) {
      elText[1].style.cssText = `
      color: rgba(243, 243, 243, 0.61);
      font-weight: 500;
      animation: warning 0.5s ease-in-out 1;
      font-family: 'Open Sans';`;

      elInputPassword.style.cssText = `
      border: 1px solid rgba(255, 81, 81, 0.61);
      font-family: 'Open Sans';`;
    } else {
      sendRegis = 1;
    }
  } else {
    sendRegis = 1;
    elButton.textContent = "Authenticated";
    elButton.style.cssText = `
      background-color: rgb(19, 68, 15);
    font-family: 'Open Sans';
    `;
  }
});

window.addEventListener("keydown", (kEvent) => {
  if (kEvent.key == "Enter") {
    kEvent.preventDefault();
    if (
      (!elInputUser.value.trim() || !elInputPassword.value.trim()) &&
      sendRegis == 0
    ) {
      if (!elInputUser.value.trim() && !elInputPassword.value.trim()) {
        elText[0].style.cssText = `
          color: rgba(243, 243, 243, 0.61);
          font-weight: 500;
          animation: warning 0.5s ease-in-out 1;
          font-family: 'Open Sans';`;
        elText[1].style.cssText = `
            color: rgba(243, 243, 243, 0.61);
            font-weight: 500;
            animation: warning 0.5s ease-in-out 1;
            font-family: 'Open Sans';`;

        elInputUser.style.cssText = `
          border: 1px solid rgba(255, 81, 81, 0.61);
          font-family: 'Open Sans';`;

        elInputPassword.style.cssText = `
          border: 1px solid rgba(255, 81, 81, 0.61);
          font-family: 'Open Sans';`;
      }

      if (!elInputUser.value.trim() && sendRegis == 0) {
        elText[0].style.cssText = `
          color: rgba(243, 243, 243, 0.61);
          font-weight: 500;
          animation: warning 0.5s ease-in-out 1;
          font-family: 'Open Sans';`;

        elInputUser.style.cssText = `
          border: 1px solid rgba(255, 81, 81, 0.61);
          font-family: 'Open Sans';`;
      }

      if (!elInputPassword.value.trim() && sendRegis == 0) {
        elText[1].style.cssText = `
          color: rgba(243, 243, 243, 0.61);
          font-weight: 500;
          animation: warning 0.5s ease-in-out 1;
          font-family: 'Open Sans';`;

        elInputPassword.style.cssText = `
          border: 1px solid rgba(255, 81, 81, 0.61);
          font-family: 'Open Sans';`;
      }
    }

    if (sendRegis == 1) {
      const worldWide = elSearch.value.trim();
      if (!worldWide) {
        alert("Please write your site");
      } else window.location.href = `https://${worldWide}`;
    }
  }

  if (elInputUser.value.trim()) {
    elInputUser.style.cssText = `
    border: 1px solid rgb(21, 21, 21);
    font-family: 'Open Sans';`;
  }

  if (elInputPassword.value.trim()) {
    elInputPassword.style.cssText = `
    border: 1px solid rgb(21, 21, 21);
    font-family: 'Open Sans';`;
  }

  if (
    (elInputUser.value.trim().length == 1 || !elInputUser.value.trim()) &&
    sendRegis == 0
  ) {
    elInputUser.style.cssText = `
    border: 1px solid rgba(255, 81, 81, 0.61);
    font-family: 'Open Sans';`;
  }

  if (
    (elInputPassword.value.trim().length == 1 ||
      !elInputPassword.value.trim()) &&
    sendRegis == 0
  ) {
    elInputPassword.style.cssText = `
    border: 1px solid rgba(255, 81, 81, 0.61);
    font-family: 'Open Sans';`;
  }
});

elSearchIcon.addEventListener("click", (e) => {
  if (sendRegis == 1) {
    const worldWide = elSearch.value.trim();
    if (!worldWide) {
      alert("Please write your site");
    } else window.open(`https://www.${worldWide}.com`, "_blank");
  }
});

elIcons[0].addEventListener("click", (e) => {
  elIcons[0].style.cssText = `
    display: none;
  `;
  elIcons[1].style.cssText = `
    display: block;
  `;

  elInputPassword.type = "password";
});

elIcons[1].addEventListener("click", (e) => {
  elIcons[1].style.cssText = `
    display: none;
  `;
  elIcons[0].style.cssText = `
    display: block;
  `;
  elInputPassword.type = "text";
});
