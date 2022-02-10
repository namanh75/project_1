document.querySelector('.block form h6').onclick = function () {
    var register = document.querySelector('.register');
    Object.assign(register.style, {
        display: 'block',
    })
    let id = null;
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 0.1);
    function frame() {
        if (pos == 50) {
            clearInterval(id);
        } else {
            pos++;
            register.style.top = pos + "px";
        }
    }
}

document.querySelector('.register h3').onclick = function () {
    var register = document.querySelector('.register');
    Object.assign(register.style, {
        display: 'none',
    })
}

//ajax register
$(".register form").submit(function (e) {
    e.preventDefault();
    $(".register form input").keyup(function (ev) {
        if(ev[i].target.val()==''){

        }
    })
    $.ajax({
        type: "post",
        url: '/register',
        data: $(this).serializeArray(),
    })
});
setTimeout(function () {
    document.querySelector('.register form button').onclick = function () {
        var register = document.querySelector('.register');
        Object.assign(register.style, {
            display: 'none',
            delayTransition: 'all 2s',
        })
        alert("Đăng ký thành công")
    }
}, 1000)

//login
document.querySelector('.block form button').onclick = function (e) {
    h4 = document.querySelector('.block h4')
    Object.assign(h4.style, {
        display: 'inline-block'
    })
}

