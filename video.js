
let cart = JSON.parse(localStorage.getItem("video"));
console.log(cart);

function display(data){

    // document.querySelector("#bucket").src = `https://www.youtube.com/embed/${data}`;

    let video = document.createElement("iframe");
    video.src = `https://www.youtube.com/embed/${data}`;
    video.allow = "fullscreen";

    document.querySelector("#bucket").append(video);
   

}

display(cart)



