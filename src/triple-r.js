(function() {
	window.onload = function() {
		document.getElementById("search").onclick = findItem;
	}

	// function requestItem() {
	// 	var request = new XMLHttpRequest();
	// 	request.onload = findItem;
	// 	request.open("GET", "./itemData.json");
	// 	request.send();
	// }

	function findItem() {
		//var data = require('./itemData.json');
		//var data = JSON.parse(this.responseText);
		var info = '{"cans": {"category": "recycle"},"shoeboxes": {"category": "recycle"}}';
		var data = JSON.parse(info);
		var item = document.getElementById("items").value;
		console.log(data);
		console.log(item);
		console.log(info[item]);
		loadItemPage(info, item);
    }

    function loadItemPage(info, item) {

    }

})();