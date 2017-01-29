(function() {
	window.onload = function() {
		loadHomePage();
		document.getElementById("search").onclick = findItem;
		document.getElementById("main1").onclick = loadHomePage;
		document.getElementById("main2").onclick = loadHomePage;
		document.getElementById("main3").onclick = loadHomePage;
		document.getElementById("main4").onclick = loadHomePage;
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
		document.getElementById("main-page").style.display = "";
		document.getElementById("recycle-page").style.display = "none";
		document.getElementById("compost-page").style.display = "none";
		document.getElementById("landfill-page").style.display = "none";
		document.getElementById("single-page").style.display = "none";
		window.scrollTo(0, 0);
	}

	function loadRecyclePage() {
		document.getElementById("main-page").style.display = "none";
		document.getElementById("recycle-page").style.display = "";
		document.getElementById("compost-page").style.display = "none";
		document.getElementById("landfill-page").style.display = "none";
		document.getElementById("single-page").style.display = "none";
		window.scrollTo(0, 0);
	}

	function loadCompostPage() {
		document.getElementById("main-page").style.display = "none";
		document.getElementById("recycle-page").style.display = "none";
		document.getElementById("compost-page").style.display = "";
		document.getElementById("landfill-page").style.display = "none";
		document.getElementById("single-page").style.display = "none";
		window.scrollTo(0, 0);
	}

	function loadLandfillPage() {
		document.getElementById("main-page").style.display = "none";
		document.getElementById("recycle-page").style.display = "none";
		document.getElementById("compost-page").style.display = "none";
		document.getElementById("landfill-page").style.display = "";
		document.getElementById("single-page").style.display = "none";
		window.scrollTo(0, 0);
	}

	function findItem() {
		//var data = require('./itemData.json');
		//var data = JSON.parse(this.responseText);
		var info = '{ "cans": { "category": "Recycle", "instructions": "No preparation required.", "DIY": { "DIY-pic": "http://www.diyncrafts.com/wp-content/uploads/2016/02/recycle-repurpose-soda-cans-easy-projects.jpg", "DIY-link": "http://www.diyncrafts.com/17586/repurpose/20-ways-to-recycle-soda-cans", "DIY-title": "20 Genius Ways to Recycle Soda Cans into Amazing DIY Projects" } }, "shoeboxes": { "category": "Recycle", "instructions": "Flatten box first.", "DIY": { "DIY-pic": "http://www.diyncrafts.com/wp-content/uploads/2015/08/1-picnic-box.jpg", "DIY-link": "http://www.diyncrafts.com/14195/repurpose/25-brilliantly-crafty-shoebox-projects-for-you-your-home-and-the-kids", "DIY-title": "25 Brilliantly Crafty Shoebox Projects for You, Your Home, and the Kids" } }, "newspapers": { "category": "Compost or Recycle", "instructions": "If composting, shred first. Do not recycle wet or soiled newspaper.", "DIY": { "DIY-pic": "http://craftingagreenworld.com/wp-content/uploads/2014/07/30-awesome-diy-projects-using-newspaper.jpg", "DIY-link": "http://craftingagreenworld.com/2014/07/24/30-awesome-diy-projects-using-newspaper/", "DIY-title": "30 Awesome DIY Projects Using Newspaper!" } }, "paper plates": { "category": "Compost", "instructions": "No preparation required." }, "wine bottles": { "category": "Recycle", "instructions": "Rinse first, and if selling may need to be grouped by color", "DIY": { "DIY-pic": "http://clv.h-cdn.co/assets/15/32/1438723749-knotted-jute-netted-bottles-026.jpg", "DIY-link": "http://www.countryliving.com/diy-crafts/g2534/repurpose-wine-bottles/?slide=1", "DIY-title": "23 Creative Ways to Repurpose Your Empty Wine Bottles" } }, "yogurt cups": { "category": "Recycle", "instructions": "Wash out first. Also may not be accepted by curbside recycling in some areas.", "recycle-number": "Yogurt cups are normally number 5, polypropylene, which can be recycled but sometimes requires special facilities.", "DIY": { "DIY-pic": "https://www.thisoldhouse.com/sites/default/files/styles/content_box/public/migrated/images/02-reuse-containers.jpg?itok=DN_r22sn&timestamp=1464282283", "DIY-link": "https://www.thisoldhouse.com/ideas/10-uses-yogurt-cups", "DIY-title": "10 Uses for Yogurt Cups" } }, "plastic bottles": { "category": "Recycle", "instructions": "Rinse first if contained liquid other than water", "DIY": { "DIY-pic": "http://static.boredpanda.com/blog/wp-content/uploads/2014/07/plastic-bottles-recycling-ideas-11.jpg", "DIY-link": "http://www.boredpanda.com/plastic-bottle-recycling-ideas/", "DIY-title": "23 Creative Ways To Reuse Old Plastic Bottles" } } }';
		var data = JSON.parse(info);
		var item = document.getElementById("items").value;
		if (data[item]) {
			loadItemPage(data[item], item);
		}
		window.scrollTo(0, 0);
    }

    function loadItemPage(info, item) {
    	//var result = "";
    	// result += item.charAt(0).toUpperCase();
    	// for (var i = 1; i < item.length; i++) {
    	// 	if (item.charAt(i) == " " && i + 1 < item.length) {
    	// 		i++;
    	// 		result += " " + item.charAt(i).toUpperCase();
    	// 	} else {
    	// 		result += item.charAt(i);
    	// 	}
    	// }
    	document.getElementById("single-title").innerHTML = item;

    	document.getElementById("main-page").style.display = "none";
		document.getElementById("recycle-page").style.display = "none";
		document.getElementById("compost-page").style.display = "none";
		document.getElementById("landfill-page").style.display = "none";
		document.getElementById("single-page").style.display = "";

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