$(document).on("ready",function(){
			$('.boton').click(function(){
			$('.fondoborroso').delay(7500).fadeOut(10000);
			$('.boton').fadeOut('slow');
			$('.coming').fadeOut(2500);
			$('.main-section').delay(7500).fadeOut('slow');
			(function (d) {
	var message = document.getElementById('message');
	// var message = message.parentNode;
	var index = 0;
	var interval = null;
	var messages = [' now']; // Cada posicion del array es un mensaje
	var countMessage = messages.length - 1;
	var sleepTimeout = 3000;
	var sleepInterval = 150;

	function update(func) {
		message.classList.toggle('animate-cursor');
		setTimeout(function () {
			message.classList.toggle('animate-cursor');
			interval = setInterval(func, sleepInterval);
		}, sleepTimeout);
	}

	function clear() {
		var count = message.innerHTML.length;
		if (count === 0) {
			clearInterval(interval);
			message.innerHTML = '';
			index = (index >= countMessage) ? 0 : index + 1;
		} else {
			message.innerHTML = message.innerHTML.toString().substr(0, count - 1);
		}
	}

	function write() {
		var count = message.innerHTML.length;
		var countCharacter = messages[index].length - 1;
		message.innerHTML += messages[index][(count > 0) ? count : 0];

		if (countCharacter === count) {
			clearInterval(interval);
		}
	}
	update(write);
})(window, document);
			});
	
});

