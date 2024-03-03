const form = document.getElementById('form');
const nama = document.getElementById('nama');
const email = document.getElementById('email');
const gender = document.getElementById('gender');
const lokasi = document.getElementById('lokasi');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const namaValue = nama.value.trim();
	const emailValue = email.value.trim();
	const genderValue = gender.value.trim();
	const lokasiValue = lokasi.value.trim();
	const messageValue = message.value.trim();
	
	if(namaValue === '') {
		console.log('nama not blank');
		setErrorFor(nama, 'Name cannot be blank');
	} 
	else {
		setSuccessFor(nama);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	}  
	else if(isEmail(emailValue)==false)
	{
		setErrorFor(email,'Email is not valid');
	}
	else {
		setSuccessFor(email);
	}
	
	if(genderValue === '') {
		setErrorFor(gender, 'Gender cannot be blank');
	}
	else if(isGender(genderValue)==false){
		setErrorFor(gender,'Gender must be "male" or "female"');
	}  
	else {
		setSuccessFor(gender);
	}

	if(lokasiValue === '') {
		setErrorFor(lokasi, 'Location cannot be blank');
	}  
	else if(isLokasi(lokasiValue)==false){
		setErrorFor(lokasi,'Location must be "jeonjun" or "chuncheon" or "suwon"');
	}
	else {
		setSuccessFor(lokasi);
	}

	if(messageValue === '') {
		setErrorFor(message, 'Message cannot be blank');
	}  
	else {
		setSuccessFor(message);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(emailValue) {
	var x=emailValue;
	var atindex=x.indexOf("@");
	var dotindex=x.indexOf(".");
	if (atindex<1 || dotindex<atindex+2 || dotindex+2>=x.length){
		return false;
	}
	else{
		return true;
	}
}

function isGender(genderValue){
	let str1='male';
	let str2='female';
	let result=genderValue.localeCompare(str1);
	if(result==0)
	{
		return true;
	}
	else{
		result=genderValue.localeCompare(str2);
		if(result==0)
		{
			return true;
		}
		else{
			return false;
		}
	}
}

function isLokasi(lokasiValue){
	let str1='jeonjun';
	let str2='chuncheon';
	let str3='suwon';
	let result=lokasiValue.localeCompare(str1);
	if(result==0)
	{
		return true;
	}
	else{
		result=lokasiValue.localeCompare(str2);
		if(result==0)
		{
			return true;
		}
		else
		{
			result=lokasiValue.localeCompare(str3);
			if(result==0)
			{
				return true;
			}
			else{
				return false;
			}
		}
	}
}