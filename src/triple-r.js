(function() {
	window.onload = function() {
		document.getElementById("search").onclick = requestItem;
	}

	function requestItem() {
		var request = new XMLHttpRequest();
		request.onload = findItem;
		request.open("GET", "/itemData.json");
		request.send();
	}

	function findItem() {
		var data = JSON.parse(this.responseText);
    }
});
	}

})();