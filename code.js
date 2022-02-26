function encrypt(elemento){
	var word = document.getElementsByTagName("input")[0].value;
	var word_encrypt = btoa(word);
	document.getElementById("resultado").innerHTML = word_encrypt;
}

function decrypt(elemento){
	var word = document.getElementsByTagName("input")[0].value;
	var word_decrypt = atob(word);
	document.getElementById("resultado").innerHTML =  word_decrypt ;
}