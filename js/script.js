const container = document.getElementById('listaUsuarios')

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        if (!response.ok) {
            throw new Error ('Error al obtener los datos de los usuarios')
        }
        return response.json()
    })
    .then ((data) => {
        data.forEach(({name, username, phone, email, id, company, address:{street, suite, city}}) => {
            const ageRandom = Math.floor(Math.random() * (60 - 18 + 1)) + 18;
            const userContainer = document.createElement('li')
            const image = `./assets/img/${id}.jpeg`;
            userContainer. innerHTML = `
            <div class="userImage">
                <div class="data">    
                    <p><strong>Nombre:</strong> ${name} </p>
                    <p><strong>Edad:</strong> ${ageRandom} </p>
                    <p><strong>Username:</strong> ${username} </p>
                    <p><strong>Teléfono:</strong> ${phone} </p>
                    <p><strong>Email:</strong> ${email} </p>
                </div>
                <div class="image">
                    <img src= "${image}" alt="El id de la imagen el ${id}">
                </div>
            </div>
            <p><strong>Compañía:</strong> ${company.name} </p>
            <p><strong>Dirección:</strong> ${street}, ${suite}, ${city} </p>
            `
            container.appendChild(userContainer);
        })
    })
    .catch ((error) => {
        console.error(error);
    });