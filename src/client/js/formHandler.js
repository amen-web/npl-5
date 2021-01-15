function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
  Client.checkForName(formText);

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    });
    let request_Body = {Text: formText};

    fetch('/testing', {
        method: 'POST',
        body: JSON.stringify(request_Body),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.polarity
        console.log(res);
        alert(dataText);
    })
    
}

export { handleSubmit };
