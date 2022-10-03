let feedbacks = []
function addFeedback(){
    let rating = document.getElementById('ratings').value;
    let text = document.getElementById('feedback').value;
    if(rating >= 0 && rating <= 5) {
        let feedback = {
            ratings : rating,
            text: text,
        }
        feedbacks.push(feedback)
    }
    
    console.log(feedbacks)
}

function ratings5(){
    let div = document.getElementById('feedbackContainer');
    div.innerHTML = '';
   let filter5 =  feedbacks.filter((x)=>{
        return x.ratings == 5;
    })
    
    

    filter5.map((x)=>{
        let feedback = document.createElement('div');
        let text = document.createElement('p');
        text.innerHTML = x.text;
        feedback.classList.add('feedbacks');
        div.appendChild(feedback);
        feedback.appendChild(text)
    })

    

}
function ratings4(){
    let div = document.getElementById('feedbackContainer');
    div.innerHTML = '';
   let filter4 =  feedbacks.filter((x)=>{
        return x.ratings == 4;
    })
    
    

    filter4.map((x)=>{
        let feedback = document.createElement('div');
        let text = document.createElement('p');
        text.innerHTML = x.text;
        feedback.classList.add('feedbacks');
        div.appendChild(feedback);
        feedback.appendChild(text)
    })

    

}
