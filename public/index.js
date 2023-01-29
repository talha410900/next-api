

const css = `
#urbnups-moments-widget {
    max-width: 1200px;
    margin: 30px auto;
    padding: 0 20px;
    width: 100%; 
    display: grid;
    /* Define Auto Row size */
    grid-auto-rows: 400px; 
    /*Define our columns */
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
    grid-gap: 1em;
  }

.urbnups_moment {
    width: 315px;
    text-align: left;
}

.urbnups_moment_image img {
    width: 315px;
    height: 315px;
    border-radius: 8px 8px 8px 8px;
}

.urbnups_moment_creator {
    position: absolute;
    margin-left: 10px;
    margin-top: 10px;

}

.urbnups_moment_creator img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 35px 35px 35px 35px;
}

.urbnups_moment_creator a {
    color: white;
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;


}

.urbnups_moment_creator a div {
    align-items: center;
    display: flex
}

.urbnups_moment_creator a div span {
    padding-left: 10px
}

.urbnups_moment_title {
    font-size: 14px;
    font-weight: 600;


}

.urbnups_moment_description {
    font-size: 11px;
    font-weight: 300;
}

.urbnups_moment_favourite {
    position: absolute;
    margin-left: 265px;
    margin-top: -25px
}

.urbnups_moment_favourite img {
    width: 40px;
    height: 40px;
    object-fit: contain;
}`

async function getData() {
    let data = await fetch("http://localhost:3002/api/moments")
    return data.json();
}

window.addEventListener('DOMContentLoaded', async (event) => {

    const arry = await getData()

    let getEle = document.getElementsByTagName("urbnups-moments-widget");
    getEle = getEle[0];

    // console.log(getEle.getAttribute("widget-id"))

    const main = document.createElement("div")
    main.setAttribute("id", 'urbnups-moments-widget');


    for (let i = 0; i < arry.length; i++) {
        const data = arry[i];
        var html = `
   
        <div class="urbnups_moment_creator">
            <a href=${data.deeplink} target='_blank'>
            <div>
            <img  src="${data.userPreviewImage}" >
            <span> ${data.displayName}</span>
            </div>
            </a>
        </div>
         <div class="urbnups_moment_image">
         <a href=${data.deeplink} target='_blank'>
         <img src=${data.previewImage} width=315px />
         </a>
         </div>
         <div class="urbnups_moment_favourite">
         <img src="https://urbnups.com/wp-content/uploads/2022/10/bucketlisticon.png">
         </div>
         <div class="urbnups_moment_title">
         <span>${data.name}</span>
         </div>
        <div class="urbnups_moment_description">
         <span>${data.description_snippet}</span>
         </div>
    `;

        const newdiv = document.createElement('div');
        newdiv.setAttribute('class', "urbnups_moment");
        newdiv.innerHTML = html
        main.appendChild(newdiv)

    }

    var styleNode = document.createElement('style');
    styleNode.type = "text/css";
    if (!!(window.attachEvent && !window.opera)) {
        styleNode.styleSheet.cssText = css;
    } else {
        var styleText = document.createTextNode(css);
        styleNode.appendChild(styleText);
    }
    document.getElementsByTagName('head')[0].appendChild(styleNode);



    getEle.insertAdjacentElement("afterend", main);
    getEle.remove()

});