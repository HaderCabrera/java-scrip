fetch('http://localhost:3000/trainers', {
    method: 'POST',
    body: JSON.stringify({
        "id":"3",
        "nombres": "YUlkieth",
        "apellidos": "sad",
        "especialidad": "FUllstack"
    }),
    headers: {
        'Content-type': 'application/json; charset=UFT-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(error => console.error("Error!!!:" + error))

//CREAR NUEVO OBJETO