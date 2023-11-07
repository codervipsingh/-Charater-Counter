const inputArea = document.getElementById('inputArea')
inputArea.addEventListener('keyup', (e)=>{
    const maxLength = 50;

    const userInput = e.target.value;

    const totalCha = userInput.length;

    const remainCha = maxLength-totalCha;

    const totalChaSpan = document.getElementById('total');
    totalChaSpan.innerText = totalCha;

    const remainingChaSpan = document.getElementById('remaining');
    remainingChaSpan.innerText = remainCha;

    

})