fetch('http://localhost:3000/trainers/3', {
    method: 'PATCH',
    body: JSON.stringify({
        "edad" : 15
    }),
    headers: {
        'Content-type': 'application/json; charset=UFT-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(error => console.error("Error!!!:" + error))

//AGREGA A LO QUE YA ESTA