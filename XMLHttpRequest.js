document.querySelector('#button').addEventListener('click', loadData);

function loadData() {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open('GET', 'data.txt', true);

    // console.log('READYSTATE', xhr.readyState); // 1: server connection established

    // Optional - Used for spinners/loaders
    xhr.onprogress = function() {
        console.log('READYSTATE', xhr.readyState); // 3: processing request
    }

    xhr.onload = function() {
        console.log('READYSTATE', xhr.readyState); // 4: request finished and response is ready
        if(this.status === 200) {
            console.log(this.responseText);
            document.querySelector('#output').innerHTML = `
            <h1>${this.responseText}</h1>
            `;
        }
    }
    
    // NOT USED
    // xhr.onreadystatechange = function() {
    //     console.log('READYSTATE', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.send();

    // readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    // HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not found"
}