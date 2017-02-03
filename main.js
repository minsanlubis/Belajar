var my_heading = document.querySelector("h1");
	my_heading.textContent = "Hello world!";
	
var my_image = document.querySelector("img");

my_image.onclick = function()
	{
		var my_src = my_image.getAttribute("src");
		if (my_src === "images/baru.jpg")
			{
				my_image.setAttribute ("src", "images/firefox.jpeg");
			}
		else
			{
				my_image.setAttribute ("src", "images/baru.jpg");
			}
	}
	
var my_button = document.querySelector("button");
var my_heading = document.querySelector("h1");

function set_username()
	{
		var my_name = prompt("Silahkan Masukkan Nama Anda.");
		localStorage.setItem("name", my_name);
		my_heading.innerHTML = "Selamat Datang" + my_name
	}
if (!localStorage.getItem("name"))
	{
		set_username();
	}
else
	{
		var stored_name = localStorage.getItem("name");
		my_heading.innerHTML = "Selamat Datang,";
	}
my_button.onclick = function()
	{
		set_username();
	}
		
		
		
	