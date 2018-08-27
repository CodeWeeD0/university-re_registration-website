//DOM objects
var sidebar = {
    home : document.getElementById('menu__items-home'),
    reReg : document.getElementById('menu__items-reReg'),
    chkStat : document.getElementById('menu__items-chkStat'),
    help : document.getElementById('menu__items-help')
};

var canvas = {
    home : document.getElementById('home'),
    reReg : document.getElementById('reReg'),
    chkStat : document.getElementById('chkStat'),
    help : document.getElementById('help')
};

//Logic for the sidebar
sidebar.home.addEventListener('click', function(){
    canvas.home.style.display = 'block';
    canvas.reReg.style.display = 'none';
    canvas.chkStat.style.display = 'none';
    canvas.help.style.display = 'none';
});

sidebar.reReg.addEventListener('click', function(){
    canvas.home.style.display = 'none';
    canvas.reReg.style.display = 'block';
    canvas.chkStat.style.display = 'none';
    canvas.help.style.display = 'none';
});

sidebar.chkStat.addEventListener('click', function(){
    canvas.home.style.display = 'none';
    canvas.reReg.style.display = 'none';
    canvas.chkStat.style.display = 'block';
    canvas.help.style.display = 'none';
});

sidebar.help.addEventListener('click', function(){
    canvas.home.style.display = 'none';
    canvas.reReg.style.display = 'none';
    canvas.chkStat.style.display = 'none';
    canvas.help.style.display = 'block';
});