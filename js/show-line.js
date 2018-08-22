function renderView() {
    const main = document.getElementById('main');
    const range = document.getElementById('content-width');
    range.setAttribute('value', window.innerWidth);

    const currentWidth = document.getElementById('currentWidth');
    currentWidth.innerHTML = range.value + "px";
    const screenWidth = document.getElementById('screenWidth');
    screenWidth.innerHTML = window.innerWidth + "px";
    const screenHeight = document.getElementById('screenHeight');
    screenHeight.innerHTML = window.innerHeight + "px";

    const test = document.getElementById('test');
    const showDefaultFontSize = document.getElementById('defaultFontSize');
    const defaultFontSize = test.offsetWidth / 7
    showDefaultFontSize.innerHTML = defaultFontSize + "px";

    function renderText(){
        main.innerHTML = "";

        let wordsInALine = Math.floor(range.value / (defaultFontSize + 2)) + 1;
        const message = "這一行有" + wordsInALine + "個字";

        const info = document.createElement('div');
        info.innerHTML = message;
        info.className = "fontSize";
        main.appendChild(info);

        let defaultMessage = "";
        const count = wordsInALine % 7 > 0 ? Math.floor(wordsInALine / 7) + 1 : wordsInALine / 7 ;
        for (let i = 0 ; i < count ; i++ ) {
            defaultMessage += message;
        }
        const defaultElement = document.createElement('div');
        defaultElement.className = "words";
        defaultElement.innerHTML = defaultMessage;
        defaultElement.style.padding = "0 1rem 0 1rem";
        main.appendChild(defaultElement);

        let words = 20;
        for (; words <= 110 ; words += 5) {
            const wordsWidth = Math.floor(range.value / (words + 2));
            const div = document.createElement('div');
            div.innerHTML = "字體大小是 " + wordsWidth + "px";
            div.className = "fontSize";
            main.appendChild(div);

            const message = "這一行有" + words + "個字";
            const count = words % 7 > 0 ? Math.floor(words / 7) + 1 : words / 7 ;
            let text = "";
            for (let i = 0 ; i <= count ; i ++) {
                text += message;
            }
            const element = document.createElement('div');
            element.innerHTML = text;
            element.className = "words"
            element.style.padding = "0 " + wordsWidth + "px 0 " + wordsWidth + "px";
            element.style.fontSize = wordsWidth + "px";
            main.appendChild(element);
            
        }
    }

    range.addEventListener('change', function(){
        main.style.width = range.value + "px";
        currentWidth.innerHTML = range.value + "px";
        renderText();
    });

    renderText();
}

window.addEventListener('load', renderView);
window.addEventListener('orientationchange', renderView);