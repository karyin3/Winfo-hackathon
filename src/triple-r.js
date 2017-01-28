(function() {
	window.onload = function() {
		document.getElementById("search").onclick = findItem;
		document.getElementById("home").onclick = loadHomePage;
		document.getElementById("recycle").onclick = loadRecyclePage;
		document.getElementById("compost").onclick = loadCompostPage;
		document.getElementById("landfill").onclick = loadLandfillPage;
	}

	// function requestItem() {
	// 	var request = new XMLHttpRequest();
	// 	request.onload = findItem;
	// 	request.open("GET", "./itemData.json");
	// 	request.send();
	// }

	function loadHomePage() {
		document.getElementById("home-page").style.display = "block";
		document.getElementById("recycle-page").style.display = "none";
		document.getElementById("compost-page").style.display = "none";
		document.getElementById("landfill-page").style.display = "none";
		document.getElementById("single-page").style.display = "none";
	}

	function loadRecyclePage() {
		document.getElementById("home-page").style.display = "none";
		document.getElementById("recycle-page").style.display = "block";
		document.getElementById("compost-page").style.display = "none";
		document.getElementById("landfill-page").style.display = "none";
		document.getElementById("single-page").style.display = "none";
	}

	function loadCompostPage() {
		document.getElementById("home-page").style.display = "none";
		document.getElementById("recycle-page").style.display = "none";
		document.getElementById("compost-page").style.display = "block";
		document.getElementById("landfill-page").style.display = "none";
		document.getElementById("single-page").style.display = "none";
	}

	function loadLandfillPage() {
		document.getElementById("home-page").style.display = "none";
		document.getElementById("recycle-page").style.display = "none";
		document.getElementById("compost-page").style.display = "none";
		document.getElementById("landfill-page").style.display = "block";
		document.getElementById("single-page").style.display = "none";
	}

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
    	document.getElementById("home-page").style.display = "none";
		document.getElementById("recycle-page").style.display = "none";
		document.getElementById("compost-page").style.display = "none";
		document.getElementById("landfill-page").style.display = "none";
		document.getElementById("single-page").style.display = "block";
    }

})();