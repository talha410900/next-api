

const urbnupsCss = `
#urbnups-moments-widget {
    max-width: 1200px;
    margin: 30px auto;
    padding: 0 20px;
    width: 100%; 
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
    grid-gap: 1em;
    font-family: 'Poppins', sans-serif !important;
  }

.urbnups_moment {
    width: 315px;
    text-align: left;
    font-family: 'Poppins', sans-serif !important;

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
    font-family: 'Poppins', sans-serif !important;

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
    font-family: 'Poppins', sans-serif !important;


}

.urbnups_moment_creator a div {
    align-items: center;
    display: flex;
    font-family: 'Poppins', sans-serif !important;

}

.urbnups_moment_creator a div span {
    padding-left: 10px
}

.urbnups_moment_title {
    font-size: 14px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif !important;

}

.urbnups_moment_description {
    font-size: 11px;
    font-weight: 300;
    font-family: 'Poppins', sans-serif !important;

}

.urbnups_moment_favourite {
    position: absolute;
    margin-left: 265px;
    margin-top: -25px;
    font-family: 'Poppins', sans-serif !important;

}

.urbnups_moment_favourite img {
    width: 40px;
    height: 40px;
    object-fit: contain;
}

.lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #000;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #000 transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .spinner{
    height:100px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
  }
`

async function getData(id) {
    let data = await fetch(`https://next-api-psi-roan.vercel.app/api/moments?widgetId=${id}`)
    return data.json();
}


window.addEventListener('DOMContentLoaded', async (event) => {

    const spinner = document.createElement("div")
    spinner.setAttribute('class', 'spinner')

    spinner.innerHTML = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>'

    document.getElementsByTagName("body")[0].insertAdjacentElement("afterend", spinner)

    var styleNode = document.createElement('style');
    styleNode.type = "text/css";
    if (!!(window.attachEvent && !window.opera)) {
        styleNode.styleSheet.cssText = urbnupsCss;
    } else {
        var styleText = document.createTextNode(urbnupsCss);
        styleNode.appendChild(styleText);
    }
    document.getElementsByTagName('head')[0].appendChild(styleNode);


    let getEle = document.getElementsByTagName("urbnups-moments-widget");
    getEle = getEle[0];

    const widgetId = getEle.getAttribute("widget-id")

    const main = document.createElement("div")
    main.setAttribute("id", 'urbnups-moments-widget');

    const arry = await getData(widgetId);




    if (arry) {



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


        var googleApi = document.createElement('googleApi');
        googleApi.type = 'text/css';
        document.head.appendChild(googleApi);
        googleApi.href = "https://fonts.googleapis.com";

        var preconnect = document.createElement('link');
        document.head.appendChild(preconnect);
        preconnect.href = "https://fonts.gstatic.com";
        preconnect.rel = 'stylesheet'
        preconnect.origin = 'true'

        var preconnect = document.createElement('link');
        document.head.appendChild(preconnect);
        preconnect.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap";
        preconnect.rel = 'stylesheet'

        getEle.insertAdjacentElement("afterend", main);
        getEle.remove()

        spinner.remove()
    } else {
        spinner.remove()

    }


});