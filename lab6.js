const radio = document.getElementsByName('prim');

function testRadio(){
    console.log (this.value);
}

const rama = document.querySelector('.rama');
const one = document.getElementById('one');
const activeImg = rama.querySelector('#activeImg');

one.onclick = function () {
    const figure = rama.querySelector('input[name="prim"]:checked').value;
    activeImg.src = `${figure}.jpg`
    alert(`Поздравляю, вы выбрали ${figure}.`)
}



// function checkRadio(){
//     var mimg=document.createElement("img");
//     mimg.setAttribute('src', 'круг.jpg');
//     var mimg2=document.createElement("img");
//     mimg2.setAttribute('src', 'квадрат.jpg');
//     var mimg3=document.createElement("img");
//     mimg3.setAttribute('src', 'сердце.jpg');
//
//     var printBlock = document.getElementById("printBlock");
//     var m = document.getElementsByName('prim');
//     for( var i=0; i<m.length; i++){
//         if ( m[0].checked ) {
//             alert( m[0].value );
//             printBlock.appendChild(mimg);
//             break;
//         }
//         else if ( m[1].checked ) {
//             alert( m[1].value );
//             printBlock.appendChild(mimg2);
//             break;
//         }
//         else if ( m[2].checked ) {
//             alert( m[2].value );
//             printBlock.appendChild(mimg3);
//             break;
//         }
//     }
// }



var radio2 = document.getElementsByName('prim2');

for (var i=0; i<radio2.length; i++) {
    radio[i].onchange = testRadio2;
}

function testRadio2(){
    console.log (this.value);
}

document.getElementById('one2').onclick = checkRadio2;

function checkRadio2(){
    var printBlock = document.getElementById("printBlock");
    var m2 = document.getElementsByName('prim2');
    for( var i=0; i<m2.length; i++){
        if ( m2[0].checked ) {
            var elems = document.getElementsByTagName('img');
            for(var i=0; i<elems.length; i++) elems[i].style.width='40px';
            break;
        }
        else if ( m2[1].checked ) {
            var elems = document.getElementsByTagName('img');
            for(var i=0; i<elems.length; i++) elems[i].style.width='100px';
            break;
        }
        else if ( m2[2].checked ) {
            var elems = document.getElementsByTagName('img');
            for(var i=0; i<elems.length; i++) elems[i].style.width='200px';
            break;
        }

    }
}


var radio3 = document.getElementsByName('prim3');

for (var i=0; i<radio3.length; i++) {
    radio[i].onchange = testRadio3;
}

function testRadio3(){
    console.log (this.value);
}

document.getElementById('one3').onclick = checkRadio3;

function checkRadio3(){
    var printBlock = document.getElementById("printBlock");
    var m3 = document.getElementsByName('prim3');
    for( var i=0; i<m3.length; i++){
        if ( m3[0].checked ) {
            var elems = document.getElementsByTagName('img');
            for(var i=0; i<elems.length; i++) {
                elems[i].style.left = '0'
                elems[i].style.transform = 'translateX(0)';
            }
            break;
        }
        else if ( m3[1].checked ) {
            var elems = document.getElementsByTagName('img');
            for(var i=0; i<elems.length; i++) {
                elems[i].style.left = '50%'
                elems[i].style.transform = 'translateX(-50%)';
            }
            break;
        }
        else if ( m3[2].checked ) {
            var elems = document.getElementsByTagName('img');
            for(var i=0; i<elems.length; i++) {
                elems[i].style.left = '100%'
                elems[i].style.transform = 'translateX(-100%)';
            }
            break;
        }

    }
}


const getAge = form => {
    let date = form.date.value;

    let age = ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
    form.res.value = age;
}
