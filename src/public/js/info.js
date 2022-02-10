document.querySelector('.dif i').onclick = function (e) {
    var image = document.querySelector('.dif img')
    var h3e = document.querySelector('.dif > h3')
    var report = document.querySelector('.report')
    var reporth3 = document.querySelector('.report h3')
    var logout = document.querySelector('.logout')
    Object.assign(image.style, {
        display: 'none',
    })
    Object.assign(h3e.style, {
        display: 'none',
    })
    Object.assign(report.style, {
        display: 'block',
    })
    Object.assign(logout.style, {
        display: 'none',
    })
    //appear
    let id = null;
    let pos = 100;
    clearInterval(id);
    id = setInterval(frame, 0.1);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos--;
            report.style.top = pos + "px";
        }
    }
}


document.querySelector('.report h3').onclick =function(e){
    var image = document.querySelector('.dif img')
    var h3e = document.querySelector('.dif > h3')
    var report = document.querySelector('.report')
    var logout = document.querySelector('.logout')
    Object.assign(image.style, {
        display: 'block',
    })
    Object.assign(h3e.style, {
        display: 'block',
    })
    Object.assign(report.style, {
        display: 'none',
    })
    Object.assign(logout.style, {
        display: 'block',
    })

    let id = null;
    let pos = -50;
    clearInterval(id)
    var opacity=0
    id = setInterval(frame, 8);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos++;
            opacity=opacity+1/50;
            image.style.marginLeft = pos + "px";
            image.style.opacity = opacity;
            h3e.style.marginLeft = pos + 25 + "px";
            logout.style.marginLeft = pos + 90 + "px";
        }
    }
}
$(".detail form").submit(function(event){
    event.preventDefault()
    $.ajax({
        type: "POST",
        url: "/info?_method=PUT",
        data: $(this).serialize(),
        success:function(e){
            alert("cập nhật tài khoản thành công")
        }
    })
})