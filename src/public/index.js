
function init() {
  const boton = document.getElementById("boton");
  boton.addEventListener("click", () => {
    let persona = {
      genero: "Masculino",
      fechaNacimiento: "2004/02/19",
      domicilio: "Calle falsa 717",
      documento: 45623462,
      apellido: "Palmucci",
      nombre: "Bruno Andres",
      cuil: 51513,
      email: "jeje"
  };
    fetch("http://localhost:3000/persona", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(persona)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        document.body.innerHTML = data;
      }).then(console.log("Funciono creo"))
      .catch((error) => {
        console.error("Error sending producto:", error);
      });
  });
}

init();
