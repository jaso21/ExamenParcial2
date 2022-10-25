function sub() {
    var usuario = null;
    usuario = document.getElementById("usuario").value;

    document.getElementById('usu').innerHTML = usuario;
}
function cambio() {
    var dol = 6.98;
    var re;
    var pe = parseFloat(document.getElementById('bs').value,20);
    re = pe / dol;
    document.getElementById('resul').value = re.toFixed(2);

}
var valor = document.getElementById("valor");
valor.addEventListener('keyup',convertir);
txtResultado = document.getElementById("resutado");
unidad1 = document.getElementById("unidad1");

unidad1.addEventListener('change',convertir);
unidad2 = document.getElementById("unidad2");
unidad2.addEventListener('change',convertir);
var resultado
function convertir() {
 if (valor.value==''){

    return;
 }
 numero = valor.value;
 numero = parseFloat(numero);
 if (unidad1.value == 'Bs' && unidad2.value  == 'Bs'){
   resultado = numero * 1;
   txtResultado.innerHTML= numero + " Bs == " + resultado.toFixed(2) +" Bs";
}
if (unidad1.value == 'dolar' && unidad2.value  == 'dolar'){
   resultado = numero * 1;
   txtResultado.innerHTML= numero + " dolares " + resultado.toFixed(2) +" dolares";
}
if (unidad1.value == 'Bs' && unidad2.value  == 'dolar'){
   resultado = numero / 6.86;
   txtResultado.innerHTML= numero + " Bs == " + resultado.toFixed(2) +" dolares";
}
if (unidad1.value == 'dolar' && unidad2.value  == 'Bs'){
   resultado = numero * 6.86;
   txtResultado.innerHTML= numero + " dolar == " + resultado.toFixed(2) +" Bs";
}
}
