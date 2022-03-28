
const searchVideos = async ()=>{

    try{
        let input = document.querySelector("#search").value;

        let res = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&key=AIzaSyAKM_yITupdSMRoehHichd0EK1mPB4TD9A&maxResults=20`
        );

        let data = await res.json();

        console.log('data:', data.items)

        let videos = data.items;

        appendVideos(videos);

    
    }

    catch(err){
        console.log('err:', err)
    }

}

const appendVideos = (data) =>{

    document.querySelector("#container").innerHTML= "";

    data.forEach(({snippet: {title,thumbnails:{medium:{url}}}, id: {videoId}})=>{

        let div = document.createElement("div");

        let name = document.createElement("h4");
        name.innerText = title;

        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        // // iframe.height = "100%";
        // iframe.width = "100%";
        // iframe.allow = "fullscreen";

        let img = document.createElement("img");
        img.src = url;
        img.addEventListener("click",function(){
            playVideo(videoId);
            window.location.href="video.html";
        })

        div.append(img,name);

        document.querySelector("#container").append(div);



    })

}

let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=trending&key=AIzaSyAKM_yITupdSMRoehHichd0EK1mPB4TD9A&maxResults=20`;

async function products(){

    try{
        let res = await fetch(url);
        let data = await res.json();

        console.log('data:', data.items)

        let products = data.items;
        appendVideos(products)


    }
    catch(err){
        console.log('err:', err)
    }

}

products();

function playVideo(elem){
    localStorage.setItem("video",JSON.stringify(elem));
}







