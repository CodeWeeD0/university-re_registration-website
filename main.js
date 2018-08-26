document.querySelector('#menu__items-home').addEventListener('click',function(){
    document.querySelectorAll('.canvas__element').style.visibility = 'hidden';
    document.querySelector('#home').style.visibility = 'visible';
});

document.querySelector('#menu__items-reReg').addEventListener('click',function(){
    document.styleSheets[0].canvas__element.visibility = 'hidden';
    document.querySelector('#reReg').style.visibility = 'visible';
});

document.querySelector('#menu__items-chkStat').addEventListener('click',function(){
    document.querySelectorAll('.canvas__element').style.visibility = 'hidden';
    document.querySelector('#chkStat').style.visibility = 'visible';
});

document.querySelector('#menu__items-help').addEventListener('click',function(){
    document.querySelectorAll('.canvas__element').style.visibility = 'hidden';
    document.querySelector('#help').style.visibility = 'visible';
});