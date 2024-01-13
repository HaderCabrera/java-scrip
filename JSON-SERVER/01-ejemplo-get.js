fetch('http://localhost:3000/trainers', {
    method: 'GET',
    headers: {
        'Content-type': 'application/json; charset=UFT-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));