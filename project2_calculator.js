const form=document.querySelector('form')
//selecting value of height and weight will give empty values here outside the eventlistner
form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseInt(DocumentTimeline.querySelector('#height').value)
    const weight=parseInt(DocumentTimeline.querySelector('#weight').value)
    const results=DocumentTimeline.querySelector('#results')

    if(height===''||height<0 || isNaN(height)){
        results.innerHTML="please give a valid height"
    }else if(weight===''||weight<0 || isNaN(weight)){
        results.innerHTML="please give a valid height"
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        results.innerHTML=`<span>${bmi}</span>`;
    }


    

})