const ocultarTabla = (event) => {
    document.getElementById('tabla').style.display = "none"; // display none para que oculte
}

const mostrarTabla = (event) => {
    document.getElementById('tabla').style.display = "block"; // display block para que muestre
}


const restarInputs = () => {      // ejecutar
    const num1 = document.getElementById('num1').value;  // para registrar nos numeros de la tabla en html
    const num2= document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;
    const num4= document.getElementById('num4').value;
    const num5= document.getElementById('num5').value;
    const res = num1-num2-num3-num4-num5
    console.log(res)
    const resultado = document.getElementById('resultado');
    resultado.value = res;
}

const main = () => {   //ejecucion
    document.getElementById('ocultar').onclick = ocultarTabla;
    document.getElementById('mostrar').onclick = mostrarTabla;
    document.getElementById('restar').onclick = restarInputs;
}

window.onload = main;