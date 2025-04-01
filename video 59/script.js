function createCard(title, cName, views,monthsOld, duration, thumbnail){
    let viewsStr
    if(views<1000000){
        viewsStr=views/1000+"k";
    }
    else if(views>1000000){
     viewsStr=views/1000000+"M";
    }else{
        viewsStr=views/1000+"k";
    }
    let html=`<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewsStr} views . ${monthsOld} months ago</p>
            </div>
        </div>`
        document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML + html
}