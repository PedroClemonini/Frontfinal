const button1 = document.querySelector('#btn1_p1')
const button2 = document.querySelector("#btn1_p2")
const button3 = document.querySelector("#btn1_p3")
const button4 = document.querySelector("#btn1_p4")
const btn_img1 = document.querySelector("#img1")
const btn_img2 = document.querySelector("#img2")
const btn_img3 = document.querySelector("#img3")
const btn_img4 = document.querySelector("#img4")
const modal1 = document.querySelector('#info-port1')
const modal2 = document.querySelector('#info-port2')
const modal3 = document.querySelector('#info-port3')
const modal4 = document.querySelector('#info-port4')
const modal_img1 = document.querySelector('#pop_img1')
const modal_img2 = document.querySelector('#pop_img2')
const modal_img3 = document.querySelector('#pop_img3')
const modal_img4 = document.querySelector('#pop_img4')
const buttonClose1 = document.querySelector('#d_close1')
const buttonClose2 = document.querySelector('#d_close2')
const buttonClose3 = document.querySelector('#d_close3')
const buttonClose4 = document.querySelector('#d_close4')
const buttonClose5 = document.querySelector('#d_close5')
const buttonClose6 = document.querySelector('#d_close6')
const buttonClose7 = document.querySelector('#d_close7')
const buttonClose8 = document.querySelector('#d_close8')
const zoom1 = document.querySelector('.zooming1')
const zoomed1 = document.querySelector('.zoomed1')
const zoom2 = document.querySelector('.zooming2')
const zoomed2 = document.querySelector('.zoomed2')
const zoom3 = document.querySelector('.zooming3')
const zoomed3 = document.querySelector('.zoomed3')
const zoom4 = document.querySelector('.zooming4')
const zoomed4 = document.querySelector('.zoomed4')

zoom1.addEventListener("mousemove", (e) =>{
    const x = e.clientX - e.target.offsetLeft;
    
    const y = e.clientY - e.target.offsetTop;

    console.log(x, y);

    zoomed1.style.transformOrigin = `${x}px ${y}px`;
    zoomed1.style.transform = "scale(1.4)"
})

zoom1.addEventListener("mouseleave", (e) =>{

    zoomed1.style.transformOrigin = "center center";
    zoomed1.style.transform = "scale(1)"
})


zoom2.addEventListener("mousemove", (e) =>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x, y);

    zoomed2.style.transformOrigin = `${x}px ${y}px`;
    zoomed2.style.transform = "scale(1.4)"
})

zoom2.addEventListener("mouseleave", (e) =>{

    zoomed2.style.transformOrigin = "center center";
    zoomed2.style.transform = "scale(1)"
})

zoom3.addEventListener("mousemove", (e) =>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x, y);

    zoomed3.style.transformOrigin = `${x}px ${y}px`;
    zoomed3.style.transform = "scale(1.4)"
})

zoom3.addEventListener("mouseleave", (e) =>{

    zoomed3.style.transformOrigin = "center center";
    zoomed3.style.transform = "scale(1)"
})

zoom4.addEventListener("mousemove", (e) =>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x, y);

    zoomed4.style.transformOrigin = `${x}px ${y}px`;
    zoomed4.style.transform = "scale(1.4)"
})

zoom4.addEventListener("mouseleave", (e) =>{

    zoomed4.style.transformOrigin = "center center";
    zoomed4.style.transform = "scale(1)"
})




button1.onclick = function(){
    modal1.showModal()
}
button2.onclick = function(){
    modal2.showModal()
}
button3.onclick = function(){
    modal3.showModal()
}
button4.onclick = function(){
    modal4.showModal()
}

btn_img1.onclick = function(){
    modal_img1.showModal()
}
btn_img2.onclick = function(){
    modal_img2.showModal()
}
btn_img3.onclick = function(){
    modal_img3.showModal()
}
btn_img4.onclick = function(){
    modal_img4.showModal()
}


buttonClose1.onclick = function(){
    modal1.close()
}
buttonClose2.onclick = function(){
    modal2.close()
}
buttonClose3.onclick = function(){
    modal3.close()
}
buttonClose4.onclick = function(){
    modal4.close()
}
buttonClose5.onclick = function(){
    modal_img1.close()
}
buttonClose6.onclick = function(){
    modal_img2.close()
}
buttonClose7.onclick = function(){
    modal_img3.close()
}
buttonClose8.onclick = function(){
    modal_img4.close()
}




let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
nextImage();
}, 10000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}



