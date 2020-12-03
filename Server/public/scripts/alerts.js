function login(){
	var data={};
	data.Email = document.getElementById("Email").value;
	data.Password = document.getElementById("Password").value;
	$.ajax({
		type: 'POST',
		data: JSON.stringify(data),
		cache: false,
		contentType: 'application/json',
		dataType: 'json',
		url: '/users/sign',//form action=login
		success: function(returns){
			console.log(returns.message);
			alert(returns.message);
			location.href=returns.redirec;

		}
	});
};