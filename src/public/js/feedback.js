document.querySelector('.system').onmouseover = function (e) {
    var h4e = document.querySelector('.system h4')
    Object.assign(h4e.style, {
        opacity: '1',
        transition: 'opacity 0.7s 0.4s'
    })
}
document.querySelector('.system').onmouseout = function (e) {
    var h4e = document.querySelector('.system h4')
    Object.assign(h4e.style, {
        opacity: '0',
        transition: 'opacity 0.5s'
    })
}
document.querySelector('.service').onmouseover = function (e) {
    var h4e = document.querySelector('.service h4')
    Object.assign(h4e.style, {
        opacity: '1',
        transition: 'opacity 0.7s 0.4s'
    })
}
document.querySelector('.service').onmouseout = function (e) {
    var h4e = document.querySelector('.service h4')
    Object.assign(h4e.style, {
        opacity: '0',
        transition: 'opacity 0.7s'
    })
}

//form
var blocks = document.querySelectorAll('.block-btn')
for (var i = 0; i < blocks.length; i++) {
    blocks[i].onclick = function (e) {
        var formfb = document.querySelector('.form')
        Object.assign(formfb.style, {
            display: 'block',
        })
        let id = null;
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 0.1);
        function frame() {
            if (pos == 100) {
                clearInterval(id);
            } else {
                pos++;
                formfb.style.top = pos + "px";
            }
        }
    }
}

var buttons = document.querySelectorAll('.form button')
// for (var i = 0; i < blocks.length; i++) {
//     buttons[i].onclick = function (e) {
//         if(e.target.innerHTML == 'Feedback'){
//             alert('Feedback thành công')
//         }
//     }
// }

