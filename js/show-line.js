const fullWidth = window.innerWidth;

window.addEventListener('load', function(){
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
        const wordsWidth = Math.floor(fullWidth / (words + 2));
        element.style.padding = "0 " + wordsWidth + "px 0 " + wordsWidth + "px";
        element.style.fontSize = wordsWidth + "px";
        document.documentElement.appendChild(element);
        const div = document.createElement('div');
        div.innerHTML = "字體大小是 " + wordsWidth + "px";
        div.className = "fontSize";
        document.documentElement.appendChild(div);
    }
});