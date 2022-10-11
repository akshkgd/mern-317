let randomAuthors = []
function fetchRandomQuote() {
    
    randomAuthors = []
    fetch("https://type.fit/api/quotes")
        
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log()
            let random = Math.floor(Math.random()* data.length);
            document.getElementById('random-quote').innerHTML =  (data[random].text);
            randomAuthors.push((data[random].author))
            randomAuthors.push((data[random - 3].author))
            randomAuthors.push((data[random - 9].author))
            

            //render authors value
            let authorContainer = document.getElementById('author-container');
            authorContainer.innerHTML = ''
            randomAuthors.map((x)=>{
                if(x != null){
                    let author = document.createElement('div');
                    author.classList.add('author');
                    author.innerHTML = x;
                    authorContainer.appendChild(author)
                }
                
            })
        });


}

fetchRandomQuote()
