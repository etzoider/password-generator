const MAX_PASSWORD_LENGTH = 12;
const MIN_PASSWORD_LENGTH = 6

function scrambleString(string) {
    let chars = string.split('');
    
    for (let i = chars.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = chars[i];
      chars[i] = chars[j];
      chars[j] = temp;
    }
    
    let result = chars.join('');
    
    return result;
}

function uglifyString(string) {
    let result = '';
    
    for (let i = 0; i < string.length; i++) {
      let char = string.charAt(i);
      
      // Randomly determine whether to convert the character to uppercase or lowercase
      if (Math.random() < 0.5) {
        char = char.toUpperCase();
      } else {
        char = char.toLowerCase();
      }
      
      result += char;
    }
    
    return result;
}

const chooseRandomNumber = (range) => { //range is non-inclusive. func(10) will return from 0 to 9 because math.floor
    return Math.floor(Math.random() * (range))
}


function password_generator(availableChars, charAmount) {
    if (typeof charAmount != 'number') {
        return (`"${charAmount}" is not a valid amount. Please, insert a numeric value.`)
    } 
    
    //troquei o IF else por só um return no IF(a validacao no começo da função serve pra impedir que 
    //ela continue no caso de um input inválido, logo por motivos de melhorar a legibilidade
    //é desnecessário o else)


    let password = []
    let randomIndex;
    let randomChar;

    for (let i=0;i<charAmount;i++) {

      randomIndex = chooseRandomNumber(availableChars.length);
      randomChar = availableChars[randomIndex];
      password.push(randomChar)

    }
    
    password = scrambleString(uglifyString(password.join('')));

    displayPassword(password);

    
}

const handleCheckboxClick = (e) => {
    e.stopPropagation();
    const clickedBox = e.target;
    const isChecked = clickedBox.classList.contains('checked');
    
    (isChecked) ? clickedBox.classList.remove('checked') : clickedBox.classList.add('checked');
    
}
const displayPassword = (password) => {
  pwDisplay.value = password;

  
}


const handleSubmit = () => {
  
    const availableChars = [];
    const charTypes = {
      'symbols':  ['!', '@', '#', '$', '%', '&', '*'],
        'letters': ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
       'numbers': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    };


    [...checkboxes].forEach( box => {
        if (!box.classList.contains('checked')) return
        
        availableChars.push(...charTypes[box.id]);

    })

    if (availableChars.length == 0) {displayPassword("Choose parameters"); return;}

    const charAmount = chooseRandomNumber(MAX_PASSWORD_LENGTH);
    password_generator(availableChars, (charAmount > MIN_PASSWORD_LENGTH) ? charAmount : MIN_PASSWORD_LENGTH);
}


const hidePassword = () => {

}

const showPassword = () => {

}

const toggleEye = () => {
  const isOpen = eyeOfSauron.classList.contains('open');
  
  if (isOpen) {
    eyeOfSauron.classList.remove('open');
    eyeOfSauron.classList.add('closed');
    
    eyeOfSauron.src = 'assets/closedEye.svg'

    pwDisplay.type = 'password';
    return
  }
  
  eyeOfSauron.classList.remove('closed');
  eyeOfSauron.classList.add('open');
  
  eyeOfSauron.src = 'assets/openEye.svg'
  pwDisplay.type = 'text';

  
}

const pwDisplay = document.querySelector('.password');
const checkboxes = document.querySelector('.checkbox-wrapper').querySelectorAll('div');
const submitBtn = document.querySelector(".submit-btn");
const eyeOfSauron = document.querySelector('.eyeOfSauron');


eyeOfSauron.addEventListener('click', () => toggleEye());
submitBtn.addEventListener('click', () => handleSubmit());
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', (e) => handleCheckboxClick(e))
})
