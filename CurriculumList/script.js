// ==UserScript==
// @name         NTHU Courses Selecting Helper For Curriculum List
// @namespace    mailto:a91082900@gmail.com
// @version      1.0
// @description  works on curriculum list
// @author       You
// @match        https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/JH/6/6.2/6.2.9/JH629002.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	var tbody = document.querySelector("tbody");
	var inputText = document.createElement("input");
	var inputButton = document.createElement("input");
    var checkBox = document.createElement("input");
    var descriptionText = document.createElement("span");
    descriptionText.innerText = "是否隱藏已達人數上限課程";
    checkBox.type = "checkbox";
	inputButton.type = "button";
	inputButton.value = "篩選時段";
	inputButton.onclick = function(event) {
		doFilter();
	};
	var form = document.querySelector("form");
	form.insertBefore(inputButton, tbody.parentElement);
	form.insertBefore(inputText, inputButton);
    form.insertBefore(checkBox, inputText);
    form.insertBefore(descriptionText, checkBox);

	function doFilter() {
		var exclude = ["校隊", "大一體育"]; // TODO: edit this on page
		var availableTime = inputText.value;
		for(var i = 0; i < tbody.childElementCount; i+=2) {
			var tr = tbody.children[i], desc = tbody.children[i+1];
			var l = tr.childElementCount;
			var isValid = true;

			for(var str of exclude) {
				if(tr.children[1].innerText.includes(str)) {
					isValid = false;
					break;
				}
			}

			if(checkBox.checked && tr.children[6].innerText == tr.children[8].innerText) {
				isValid = false;
			}

			var courseTime = tr.children[3].innerText.trim();
			if (availableTime != "") {
				for(var j = 0; j < courseTime.length; j+=2) {
					if(!availableTime.includes(courseTime.substr(j, 2))) {
						isValid = false;
						break;
					}
				}
			}
			desc.style.display = "none";
			if(!isValid) {
				tr.style.display = "none";
			}
			else {
				tr.style.display = "";
			}
		}
	}

})();