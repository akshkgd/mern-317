let randomAuthors = []
// function fetchRandomQuote() {

//     randomAuthors = []
//     fetch("https://type.fit/api/quotes")

//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log()
//             let random = Math.floor(Math.random() * data.length);
//             document.getElementById('random-quote').innerHTML = (data[random].text);
//             randomAuthors.push((data[random].author))
//             randomAuthors.push((data[random - 3].author))
//             randomAuthors.push((data[random - 9].author))


//             //render authors value
//             let authorContainer = document.getElementById('author-container');
//             authorContainer.innerHTML = ''
//             randomAuthors.map((x) => {
//                 if (x != null) {
//                     let author = document.createElement('div');
//                     author.classList.add('author');
//                     author.addEventListener('click', renderRequestedQuotes)
//                     author.innerHTML = x;
//                     authorContainer.appendChild(author)
//                 }

//             })
//         });


// }

function renderRandomAuthors(){
    randomAuthors = []
    fetch("https://type.fit/api/quotes")

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log()
            let random = Math.floor(Math.random() * data.length);
            randomAuthors.push((data[random].author))
            randomAuthors.push((data[random - 3].author))
            randomAuthors.push((data[random - 9].author))


            //render authors value
            
            let authorContainer = document.getElementById('author-container');
            let test = Math.random()
            authorContainer.innerHTML = '';
            randomAuthors.map((x) => {
                if (x != null) {
                    let author = document.createElement('div');
                    author.classList.add('author');
                    author.addEventListener('click', renderRequestedQuotes)
                    author.innerHTML = x;
                    authorContainer.appendChild(author)
                }

            })
        });


}

renderRandomAuthors()
// fetchRandomQuote()
//e ->event // 
function renderRequestedQuotes(e) {
    let requestedAuthor = e.target.innerHTML;
    document.getElementById('author-name').innerHTML = requestedAuthor;
    let quotesContianer = document.getElementById('requestedQuotesContainer')
    quotesContianer.innerHTML = ''
    
    renderRandomAuthors();

    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let requestedQuotes = data.filter((x)=>{
                return x.author == requestedAuthor;
            }).map((x)=>{
                let div = document.createElement('div');
                div.classList.add('quote');
                div.innerHTML = x.text;
                quotesContianer.appendChild(div);
            })
            console.log(requestedQuotes);
            
        });
}