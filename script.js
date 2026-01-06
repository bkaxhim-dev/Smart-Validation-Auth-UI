const submite = document.getElementById('submite');
const input = document.getElementById('pass')
const toggle = document.querySelector('.toggle');

//for password validation
input.addEventListener('keyup', ()=>{
    isactive = true;
    const error = document.querySelector('error');

    if(!/[A-Z]/.test(input.value) || !/[@#$%^&*()|<>]/.test(input.value)){
        error.textContent = 'Weak';
        error.style.color = 'red';
        input.style.border = '2px solid red'
        error.style.display = 'flex'
        submite.disabled = true;
        submite.style.opacity = 0.5;
    }else if(input.value.length < 8){
        error.textContent = 'Midium';
        error.style.color = 'orange';
        error.style.display = 'flex'
        input.style.border = '2px solid orange';
        submite.disabled = true;
        submite.style.opacity = 0.5;
    }else{
        error.textContent = 'Strong';
        error.style.color = 'green';
        error.style.display = 'flex'
        input.style.border = '2px solid green';
        submite.disabled = false;
        submite.style.opacity = 1;
    } 
})

//for password hide/show
try{
    toggle.addEventListener('click',()=>{
    const span = document.querySelector('span');
    const show = document.getElementById('show');
    const hide = document.getElementById('hide');

    if(input.type === 'password'){
        input.type = 'text';
        span.textContent = 'Hide Password';
        show.style.display = 'block';
        hide.style.display = 'none';
    }else{
        input.type = 'password';
        span.textContent = 'Show Password';
        show.style.display = 'none';
        hide.style.display = 'block';
    } 
})
}catch(error){console.log(error)}