window.addEventListener('load', function(){
    const main = document.getElementById('main');
    const range = document.getElementById('content-width');
    const currentWidth = document.getElementById('currentWidth');
    const screen = document.getElementById('screen');
    screen.innerHTML = window.innerWidth + "px";
    currentWidth.innerHTML = range.value + "px";

    function renderText(){
        main.innerHTML = "";

        let words = 20;
        for (; words <= 100 ; words += 5) {
            const message = "這一行有" + words + "個字";
            const count = words % 7 > 0 ? Math.floor(words / 7) + 1 : words / 7 ;
            let text = "";
            for (let i = 0 ; i <= count ; i ++) {
                text += message;
            }
            const element = document.createElement('div');
            element.innerHTML = text;
            element.className = "words"
            const wordsWidth = Math.floor(range.value / (words + 2));
            element.style.padding = "0 " + wordsWidth + "px 0 " + wordsWidth + "px";
            element.style.fontSize = wordsWidth + "px";
            main.appendChild(element);
            const div = document.createElement('div');
            div.innerHTML = "字體大小是 " + wordsWidth + "px";
            div.className = "fontSize";
            main.appendChild(div);
        }
    }

    range.addEventListener('change', function(){
        main.style.width = range.value + "px";
        currentWidth.innerHTML = range.value + "px";
        renderText();
    });

    renderText();
});