document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;
    console.log(number);

    const xhr = new XMLHttpRequest();
    if(number < 1) {
        document.querySelector('.jokez').innerHTML = 'Select at least 1 joke';
    } else {
        xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

        xhr.onload = function() {
            if(this.status === 200) {
                const response = JSON.parse(this.responseText);
                
                let output = '';
                
                if(response.type === 'success') {
                    console.log(response.value);
                    response.value.forEach(function(joke) {
                        output += `<li>${joke.joke}</li>`;
                    }); 
                } else {
                    output += '<li>Mistakes were made</li>';
                }

                document.querySelector('.jokez').innerHTML = output;
            }
        }

        xhr.send();
    }

    e.preventDefault();
}