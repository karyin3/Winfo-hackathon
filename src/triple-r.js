(function() {
	window.onload = function() {
		loadHomePage();
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
		var info = '{ "cans": { "category": "Recycle", "instructions": "No preparation required", "DIY": { "DIY-pic": "http://www.diyncrafts.com/wp-content/uploads/2016/02/recycle-repurpose-soda-cans-easy-projects.jpg", "DIY-link": "http://www.diyncrafts.com/17586/repurpose/20-ways-to-recycle-soda-cans", "DIY-title": "20 Genius Ways to Recycle Soda Cans into Amazing DIY Projects" } }, "shoeboxes": { "category": "recycle" } } ';
		var data = JSON.parse(info);
		var item = document.getElementById("items").value;
		console.log(data);
		console.log(item);
		console.log(data[item].category);
		loadItemPage(data[item]);
    }

    function loadItemPage(info) {
    	document.getElementById("home-page").style.display = "none";
		document.getElementById("recycle-page").style.display = "none";
		document.getElementById("compost-page").style.display = "none";
		document.getElementById("landfill-page").style.display = "none";
		document.getElementById("single-page").style.display = "block";

		var options = ["category", "instructions", "recycle-number", "DIY"];
		for (var i = 0; i < options.length; i++) {
			if (info[options[i]]) {
				if (options[i] !== "DIY") {
					document.getElementById(options[i]).innerHTML = info[options[i]];
				} else {
					if (info.DIY["DIY-pic"]) {
						document.getElementById("DIY-pic").src = info.DIY["DIY-pic"];
					}
					if (info.DIY["DIY-link"] && info.DIY["DIY-title"]) {
						console.log(info.DIY["DIY-link"]);
						document.getElementById("DIY-link").href = info.DIY["DIY-link"];
						document.getElementById("DIY-link").innerHTML = info.DIY["DIY-title"];
					}
				}
			} else {
				document.getElementById(options[i] + '-div').style.display = "none";
			}
		}
    }

})();