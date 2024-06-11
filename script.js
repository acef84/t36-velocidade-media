function calcularVelocidade() {
    var km = parseFloat(document.getElementById("distance").value);
    var horas = parseFloat(document.getElementById("time").value);

    if (!isNaN(km) && !isNaN(horas)) {
        var velocidade = km / horas;
        document.getElementById("resultado").innerHTML = "A velocidade média é " + velocidade.toFixed(2) + " KM/H.";
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos para distância e tempo.";
    }
}



//document.getElementById("productForm").addEventListener("submit", function(event) {
    //event.preventDefault();

    //let horas = parseFloat(document.getElementById("horas").value);
    //let km = parseFloat(document.getElementById("km").value);
    //let velocidade = parseFloat(document.getElementById("velocidade").value);

    //let veloMed = (horas + km) / 2;

    //let resultadoDiv = document.getElementById("resultado");
    //resultadoDiv.innerHTML = "<h2>Resultado:</h2>";
    //resultadoDiv.innerHTML += "<p>Velocidade Médio: " + velocidade + "</p>";
    //resultadoDiv.innerHTML += "<p>Estoque Médio: " + veloMed + "</p>";
//});