function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const submit = document.querySelector(".btn-submit");
const confirmBtn = document.querySelector(".confirm-btn");
const modalConfirm = document.querySelector(".ModalConfirm");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

//DOM Element Close button
const closeBtn = document.querySelector(".close");

// Close modal event
closeBtn.addEventListener("click", closeModal);

// Close modal action
function closeModal(){
  modalbg.style.display = "none";
  console.log("close click");
}

//close confirm modal event
confirmBtn.addEventListener("click", closeConfirm);

//close confirm modal action
function closeConfirm(){
  console.log("modal confirm close function")
  modalConfirm.style.display = "none";
}

//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

//DOM Elements validation
const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const birth = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const loc = document.getElementById('location');
const condition = document.getElementById('checkbox1');

//DOM Elements Erorr
const firstError = document.getElementById('firstError');
const lastError = document.getElementById('lastError');
const emailError = document.getElementById('emailError');
const birthError = document.getElementById('birthError');
const quantityError = document.getElementById('quantityError');
const locError = document.getElementById('locError');
const conditionError = document.getElementById('conditionError');


//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
form.addEventListener('submit', (e) => {
  e.preventDefault();
})

function validate(){

  let firstOk;
  let lastOk;
  let mailOk;
  let birthOk;
  let quantityOk;
  let locOk;
  let conditionOk;

  // Testing lirstname content
  if(first.value<2 || first.value == Number){
    firstError.style.display="block";
    firstError.innerHTML = "Ecrivez un prénom de plus de 2 lettres";
    firstError.style.color="red";
    firstError.style.fontSize="14px";
  }else{
    firstError.style.display="none";
    firstOk=true;
  }

  // Testing lastname content
  if(last.value<2 || last.value == Number){
    lastError.style.display="block";
    lastError.innerHTML = "Ecrivez un prénom de plus de 2 lettres";
    lastError.style.color="red";
    lastError.style.fontSize="14px";
  }else{
    lastError.style.display="none";
    lastOk=true;
  }

  //checking mail format
  const mailformat = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
  if(!(mailformat.test(email.value))){
    emailError.style.display="block";
    emailError.innerHTML = "Merci d'entrer un Email valide";
    emailError.style.color="red";
    emailError.style.fontSize="14px";
  }else{
    emailError.style.display="none";
    mailOk=true;
  }
//checking BirthDate Format
  const birthformat = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
  if(!(birthformat.test(birth.value))){
    birthError.style.display="block";
    birthError.innerHTML = "Merci d'entrer une date de naissance valide";
    birthError.style.color="red";
    birthError.style.fontSize="14px";
  }else{
    birthError.style.display="none";
    birthOk=true;
  }
  //checking quantity
  if((quantity.value=="" && !(quantity.value == Number))){
    quantityError.style.display="block";
    quantityError.innerHTML = "Merci d'entrer un nombre de tournois";
    quantityError.style.color="red";
    quantityError.style.fontSize="14px";
  }else{
    quantityError.style.display="none";
    quantityOk=true;
  }

  // On test les boutons radio et sauvegarde le bouton coché
  const formulaire = document.forms['reserve']
  const radios = formulaire.elements['location'];
  var value="";
  for (var i = 0; i < radios.length; i++){
    if((radios[i].type === 'radio' && radios[i].checked)) {
      value = radios[i].value;
      console.log(value);
    }
  }
  //vérification si un bouton radio a été coché
  if(value == ""){
    locError.style.display="block";
    locError.innerHTML = "Merci de cocher une ville";
    locError.style.color="red";
    locError.style.fontSize="14px";
  }else{
    locError.style.display="none";
    locOk=true;
  }
  if(!condition.checked){
    conditionError.style.display="block";
    conditionError.innerHTML = "Vous devez accepter les termes et conditions.";
    conditionError.style.color="red";
    conditionError.style.fontSize="14px";
  }else{
    conditionError.style.display="none";
    conditionOk=true;
  }
  console.log("firstOk =" + firstOk);
  console.log("lastOk =" + lastOk);
  console.log("mailOk =" + mailOk);
  console.log("quantityOk =" + quantityOk);
  console.log("locOk =" + locOk);
  console.log("conditionOk =" + conditionOk);

  //Checking if everything is ok
  if(firstOk == true && lastOk == true && mailOk == true && birthOk == true && quantityOk == true && locOk == true && conditionOk == true){
    modalbg.style.display = "none";
    //Open Confirm Modal
    modalConfirm.style.display = "block";
  }
}