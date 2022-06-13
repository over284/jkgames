/*------------SCROLL-SAVE----------------------------------------------------------*/

let cords = ['scrollX','scrollY'];
// Перед закрытием записываем в локалсторадж window.scrollX и window.scrollY как scrollX и scrollY
window.addEventListener('unload', e => cords.forEach(cord => localStorage[cord] = window[cord]));
// Прокручиваем страницу к scrollX и scrollY из localStorage (либо 0,0 если там еще ничего нет)
window.scroll(...cords.map(cord => localStorage[cord]));

/*------------FIRST-BLOCK-----------------------------------------------------------*/

var i=0;

function oneOne() {

var image = document.getElementById("oneOne");
                
var imgs = ['/img/songer/rihanna.jpg','/img/mainblock/backgroundgames.jpg'];
i++;
i %= imgs.length;
image.src = imgs[i];
}

function twoOne() {

var image = document.getElementById("twoOne");
            
var imgs = ['/img/songer/arianagrande.jpg','/img/mainblock/backgroundgames.jpg'];
i++;
i %= imgs.length;
image.src = imgs[i];
}

function threeOne() {

    var image = document.getElementById("threeOne");
                        
    var imgs = ['/img/songer/dualipa.jpg','/img/mainblock/backgroundgames.jpg'];
    i++;
    i %= imgs.length;
    image.src = imgs[i];
    }

function fourthOne() {

var image = document.getElementById("fourthOne");
                    
var imgs = ['/img/songer/kizaru.jpg','/img/mainblock/backgroundgames.jpg'];
i++;
i %= imgs.length;
image.src = imgs[i];
}

function fiveOne() {

    var image = document.getElementById("fiveOne");
                        
    var imgs = ['/img/songer/egorkreed.jpg','/img/mainblock/backgroundgames.jpg'];
    i++;
    i %= imgs.length;
    image.src = imgs[i];
    }

function sixOne() {

var image = document.getElementById("sixOne");
                            
var imgs = ['/img/songer/eldjey.jpg','/img/mainblock/backgroundgames.jpg'];
i++;
i %= imgs.length;
image.src = imgs[i];
}

function sevenOne() {

var image = document.getElementById("sevenOne");
                                
var imgs = ['/img/songer/klavakoka.jpg','/img/mainblock/backgroundgames.jpg'];
i++;
i %= imgs.length;
image.src = imgs[i];
}
function eithOne() {

    var image = document.getElementById("eithOne");
                        
    var imgs = ['/img/songer/feduk.jpg','/img/mainblock/backgroundgames.jpg'];
    i++;
    i %= imgs.length;
    image.src = imgs[i];
    }

/*------------SECOND-BLOCK-----------------------------------------------------------*/

function oneTwo() {

    var image = document.getElementById("oneTwo");
                    
    var imgs = ['/img/songer/mileycyrus.jpg','/img/mainblock/backgroundgames.jpg'];
    i++;
    i %= imgs.length;
    image.src = imgs[i];
    }
    
    function twoTwo() {
    
    var image = document.getElementById("twoTwo");
                
    var imgs = ['/img/songer/selenagomez.jpg','/img/mainblock/backgroundgames.jpg'];
    i++;
    i %= imgs.length;
    image.src = imgs[i];
    }
    
    function threeTwo() {
    
        var image = document.getElementById("threeTwo");
                            
        var imgs = ['/img/songer/maxcorzh.jpg','/img/mainblock/backgroundgames.jpg'];
        i++;
        i %= imgs.length;
        image.src = imgs[i];
        }
    
    function fourthTwo() {
    
    var image = document.getElementById("fourthTwo");
                        
    var imgs = ['/img/songer/kattyperry.jpg','/img/mainblock/backgroundgames.jpg'];
    i++;
    i %= imgs.length;
    image.src = imgs[i];
    }
    
    function fiveTwo() {
    
        var image = document.getElementById("fiveTwo");
                            
        var imgs = ['/img/songer/billieeilish.jpg','/img/mainblock/backgroundgames.jpg'];
        i++;
        i %= imgs.length;
        image.src = imgs[i];
        }
    
    function sixTwo() {
    
    var image = document.getElementById("sixTwo");
                                
    var imgs = ['/img/songer/travisscott.jpg','/img/mainblock/backgroundgames.jpg'];
    i++;
    i %= imgs.length;
    image.src = imgs[i];
    }
    
    function sevenTwo() {
    
    var image = document.getElementById("sevenTwo");
                                    
    var imgs = ['/img/songer/lilnas.jpg','/img/mainblock/backgroundgames.jpg'];
    i++;
    i %= imgs.length;
    image.src = imgs[i];
    }
    function eithTwo() {
    
        var image = document.getElementById("eithTwo");
                            
        var imgs = ['/img/songer/xxxtentacion.jpg','/img/mainblock/backgroundgames.jpg'];
        i++;
        i %= imgs.length;
        image.src = imgs[i];
        }

/*------------THIRD-BLOCK-----------------------------------------------------------*/

function oneThree() {

    var image = document.getElementById("oneThree");
                    
    var imgs = ['/img/songer/lilpeep.jpg','/img/mainblock/backgroundgames.jpg'];
    i++;
    i %= imgs.length;
    image.src = imgs[i];
    }
    
    function twoThree() {
    
    var image = document.getElementById("twoThree");
                
    var imgs = ['/img/songer/justinbieber.jpg','/img/mainblock/backgroundgames.jpg'];
    i++;
    i %= imgs.length;
    image.src = imgs[i];
    }
    
    function threeThree() {
    
        var image = document.getElementById("threeThree");
                            
        var imgs = ['/img/songer/postmalone.jpg','/img/mainblock/backgroundgames.jpg'];
        i++;
        i %= imgs.length;
        image.src = imgs[i];
        }
    
    function fourthThree() {
    
    var image = document.getElementById("fourthThree");
                        
    var imgs = ['/img/songer/dora.jpg','/img/mainblock/backgroundgames.jpg'];
    i++;
    i %= imgs.length;
    image.src = imgs[i];
    }
    
    function fiveThree() {
    
        var image = document.getElementById("fiveThree");
                            
        var imgs = ['/img/songer/oxxxymiron.jpg','/img/mainblock/backgroundgames.jpg'];
        i++;
        i %= imgs.length;
        image.src = imgs[i];
        }
    
    function sixThree() {
    
    var image = document.getElementById("sixThree");
                                
    var imgs = ['/img/songer/juicewrld.jpg','/img/mainblock/backgroundgames.jpg'];
    i++;
    i %= imgs.length;
    image.src = imgs[i];
    }
    
    function sevenThree() {
    
    var image = document.getElementById("sevenThree");
                                    
    var imgs = ['/img/songer/face.jpg','/img/mainblock/backgroundgames.jpg'];
    i++;
    i %= imgs.length;
    image.src = imgs[i];
    }
    function eithThree() {
    
        var image = document.getElementById("eithThree");
                            
        var imgs = ['/img/songer/drake.jpg','/img/mainblock/backgroundgames.jpg'];
        i++;
        i %= imgs.length;
        image.src = imgs[i];
        }

/*-----------SELECTED-PIC------------------------------------------------------------------------ */

/*-- для элементов, которые будут перетаскиваться */
function dragStart(e) {
e.dataTransfer.setData("text/plain",e.target.id);
}
 
// для поля перетаскивания -->
function dragEnter(e) {
e.preventDefault();
return true;
}
 
function dragOver(e) {
e.preventDefault();
}

function dragDrop(e) {
    let data = e.dataTransfer.getData("text/plain");
    e.preventDefault();
    let myElement = document.getElementById(data);
    let myNewElement = document.createElement('img');
    myNewElement.src = myElement.src;
    e.target.appendChild(myNewElement);
    }