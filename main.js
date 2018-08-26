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

sidebar.home.addEventListener('click', function(){
    canvas.home.style.visibility = 'visible';
    canvas.reReg.style.visibility = 'hidden';
    canvas.chkStat.style.visibility = 'hidden';
    canvas.help.style.visibility = 'hidden';
});

sidebar.reReg.addEventListener('click', function(){
    canvas.home.style.visibility = 'hidden';
    canvas.reReg.style.visibility = 'visible';
    canvas.chkStat.style.visibility = 'hidden';
    canvas.help.style.visibility = 'hidden';
});

sidebar.chkStat.addEventListener('click', function(){
    canvas.home.style.visibility = 'hidden';
    canvas.reReg.style.visibility = 'hidden';
    canvas.chkStat.style.visibility = 'visible';
    canvas.help.style.visibility = 'hidden';
});

sidebar.help.addEventListener('click', function(){
    canvas.home.style.visibility = 'hidden';
    canvas.reReg.style.visibility = 'hidden';
    canvas.chkStat.style.visibility = 'hidden';
    canvas.help.style.visibility = 'visible';
});