function Verificar(nomeDigitado) {
	// body...
	var nome = document.getElementById('nome').value;
	/*
	MURILO
	TAMANHO = 6
	ULTIMA LETRA = O
	*/

	var tamanho = nome.lenght;
	var ultimaLetra = nome.charAt(tamanho - 1);

	//VERIFICAR SE A ULTIMA LETRA É FEMININA OU MASCULINA
	if(ultimaLetra == "a")
	{
		alert('Sua voz e grossa');
	}
	else if (ultimaLetra == "o") 
	{
		alert('Sua voz e fina');
	}
}