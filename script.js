const input = document.getElementById('pass');
const toggle = document.querySelector('.toggle');
const login = document.getElementById('login');
const signup = document.getElementById('signup');
const tosignup = document.getElementById('tosignup');
const tologin = document.getElementById('tologin');
const signupbtn = document.querySelector('#signupbtn');
const loginbtn = document.querySelector('#submite');


tologin.addEventListener('click', ()=>{
    let isclicked = false;
    if(isclicked){
        login.style.display = 'none';
        signup.style.display = 'flex';
    }else{
        login.style.display = 'block';
        signup.style.display = 'none';
    } isclicked = !isclicked;
})
tosignup.addEventListener('click', ()=>{
    let isclicked = false;
    if(isclicked){
        login.style.display = 'block'
        signup.style.display = 'none'
    }else{
        login.style.display = 'none'
        signup.style.display = 'block'
    } isclicked = !isclicked
})

//for password hide/show
try{
    toggle.addEventListener('click',()=>{
    const span = document.querySelector('span');
    const Lshow = document.getElementById('show');
    const Lhide = document.getElementById('hide');

    if(input.type === 'password'){
        input.type = 'text';
        span.textContent = 'Hide Password';
        Lshow.style.display = 'block';
        Lhide.style.display = 'none';
    }else{
        input.type = 'password';
        span.textContent = 'Show Password';
        Lshow.style.display = 'none';
        Lhide.style.display = 'block';
    } 
})
}catch(error){console.log(error)}

const Spass = document.querySelector('.pass');
Spass.addEventListener('click', ()=>{
    const show = document.querySelector('.show');
    const hide = document.querySelector('.hide');
    const Sinput = document.querySelector('.PP');

    if(Sinput.type === 'password'){
        Sinput.type = 'text';
        show.style.display = 'block';
        hide.style.display = 'none';
    }else{
        Sinput.type = 'password';
        show.style.display = 'none';
        hide.style.display = 'block';
    } 
})

const Sconfirm = document.querySelector('.confirm');
Sconfirm.addEventListener('click', ()=>{
    const SCshow = document.getElementById('Cshow');
    const SChide = document.getElementById('Chide');
    const SCinput = document.querySelector('.PC');

    if(SCinput.type === 'password'){
        SCinput.type = 'text';
        SChide.style.display = 'none'
        SCshow.style.display = 'block'
    }else{
        SCinput.type = 'password';
        SCshow.style.display = 'none';
        SChide.style.display = 'block'
    } 
})

//For password Validation
const SVinput = document.querySelector('.PP');
const SCinput = document.querySelector('.PC');
const UCLC = document.querySelector('.UCLC');
const UCLW = document.querySelector('.UCLW');
const SC = document.querySelector('.SC');
const SW = document.querySelector('.SW');
const BCC = document.querySelector('.BCC');
const BCW = document.querySelector('.BCW');

SVinput.addEventListener('keyup', ()=>{

    let val = SVinput.value;
    let hasupper = /[A-Z]/.test(val);
    let hassymbol = /[!@#$%^&*()<>|]/.test(val);
    let islongenough = val.length >= 8;

    if(hasupper){
        UCLC.style.display = 'block';
        UCLW.style.display = 'none';
    }else{
        UCLC.style.display = 'none';
        UCLW.style.display = 'block';
    }
    if(hassymbol){
        SC.style.display = 'block';
        SW.style.display = 'none';
    }else{
        SC.style.display = 'none';
        SW.style.display = 'block';
    }
    if(islongenough){
        BCC.style.display = 'block';
        BCW.style.display = 'none';
    }else{
        BCC.style.display = 'none';
        BCW.style.display = 'block';
    }
    if(hasupper && hassymbol && islongenough){
        signupbtn.disabled = false;
        signupbtn.style.opacity = '1';
    }else{
        signupbtn.disabled = true;
        signupbtn.style.opacity = '0.5';
    }
})

const localstorageemail = document.getElementById('loacalstorageemail');
const FNM = document.getElementById('FNM');
const lemail = document.getElementById('email');
const lpass = document.getElementById('pass');

signupbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    localStorage.setItem('Password', SVinput.value);
    localStorage.setItem('Email', localstorageemail.value);
    localStorage.setItem('User_Name', FNM.value);
})
const form = document.getElementById('form-group');

form.addEventListener('submit', (e)=>{
    let emailconfirmed = lemail.value === localStorage.getItem('User_Name') || localStorage.getItem('Email');
    let passconfirmed = lpass.value === localStorage.getItem('Password');
    e.preventDefault();

    if(emailconfirmed){
        lemail.style.border = '2px solid green';
    }else{lemail.style.border = '2px solid red';}

    if(passconfirmed){
        lpass.style.border = '2px solid green';
    }else{lpass.style.border = '2px solid red';}

    if(emailconfirmed && passconfirmed){
        window.location.href = "dashboard.html";
    }else{
        alert('account not found')
        lemail.style.border = '2px solid red';
        lpass.style.border = '2px solid red'
    }
})

const formconfirm = document.getElementById('Form-submit');
signupbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    let passconfirmed = SVinput.value === SCinput.value;
    let isclicked = true;

    if(passconfirmed){
        SVinput.style.border = '2px solid green';
        SCinput.style.border = '2px solid green';
    }else{
        SVinput.style.border = '2px solid red';
        SCinput.style.border = '2px solid red';
    }
    if(isclicked && passconfirmed){
        login.style.display = 'block'
        signup.style.display = 'none'
    }else{
        login.style.display = 'none'
        signup.style.display = 'block'
    }isclicked = !isclicked
})