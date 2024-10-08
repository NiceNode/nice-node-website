import "../sass/index.scss";
if (
	window.location.pathname === "/" ||
	window.location.pathname === "/index.html"
) {
	import("./accordion-carousel");
}
import $ from "jquery";
import UAParser from "ua-parser-js";
import jBox from "jbox";
import mixpanel from "mixpanel-browser";

// Function to initialize Mixpanel
function initializeMixpanel() {
	try {
		mixpanel.init(process.env.MIXPANEL_TOKEN || "", {
			track_pageview: true,
			disable_persistence: true,
		});
	} catch (err) {
		console.error(err);
	}
}

// Function to show or hide the cookie banner
function toggleCookieBanner(show) {
	const cookieBanner = document.getElementById('cookieBanner');
	if (cookieBanner) {
		cookieBanner.style.display = show ? 'flex' : 'none';
	}
}

// Function to set cookie preference
function setCookiePreference(allow) {
	localStorage.setItem('cookiePreference', allow ? 'allow' : 'decline');
	toggleCookieBanner(false);
	if (allow) {
		initializeMixpanel();
	}
}

// Check for existing cookie preference
const cookiePreference = localStorage.getItem('cookiePreference');
if (cookiePreference === 'allow') {
	toggleCookieBanner(false); // Hide the banner if allowed
	initializeMixpanel();
} else if (cookiePreference === null) {
	toggleCookieBanner(true); // Show the banner if no preference set
} else {
	toggleCookieBanner(true); // Show the banner if declined
}

// Event listeners for cookie banner buttons
document.getElementById('allowCookies').addEventListener('click', () => setCookiePreference(true));
document.getElementById('declineCookies').addEventListener('click', () => setCookiePreference(false));

const body = document.querySelector("body");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
	const darkMode = savedTheme === "dark";
	if (darkMode) {
		body.classList.remove("light");
		body.classList.add("dark");
	} else {
		body.classList.remove("dark");
		body.classList.add("light");
	}
} else if (
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
) {
	body.classList.remove("light");
	body.classList.add("dark");
} else {
	body.classList.remove("dark");
	body.classList.add("light");
}

document.addEventListener("DOMContentLoaded", function () {
	// modify this later with localCache, local settings detection
	const checkbox = document.querySelector("li.switch");
	const body = document.querySelector("body");
	let currentTheme = body.classList.contains("light") ? "light" : "dark";

	checkbox.addEventListener("click", function () {
		const nextTheme = currentTheme === "light" ? "dark" : "light";
		body.classList.replace(currentTheme, nextTheme);
		currentTheme = nextTheme;

		// Save the current theme in localStorage
		localStorage.setItem("theme", currentTheme);
	});
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
			this.querySelector("span.dot").innerHTML = "●";
			this.querySelector("span.arrow").innerHTML = "↓";
		} else {
			panel.style.display = "block";
			this.querySelector("span.dot").innerHTML = "○";
			this.querySelector("span.arrow").innerHTML = "↑";
		}
	});
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		const element = document.querySelector(this.getAttribute("href"));
		const elementPosition = element.getBoundingClientRect().top;
		window.scrollBy({
			top: elementPosition - 62,
			behavior: "smooth",
		});
	});
});

const header = document.querySelector("header");
const main = document.querySelector("main");
window.addEventListener("scroll", function () {
	if (main.getBoundingClientRect().top === 62) {
		header.classList.remove("minimized");
	} else if (
		main.getBoundingClientRect().top <= 95 &&
		main.getBoundingClientRect().top !== 62
	) {
		header.classList.add("minimized");
	}
});

// opens the menu when clicking
$(".buttonDropdown").on("click", function (e) {
	$(this).find(".downloadMenu").toggleClass("visible");
	// keeps the click event from tiggering the html.onClick handler
	e.stopPropagation();
});
// hides the menu when clicking outside of them
$("html").on("click", function () {
	// if other component on click handlers stopPropagation, then this will NOT get
	// triggered
	$(".downloadMenu").removeClass("visible");
});

$(".infoIcon").on("mouseenter", function () {
	$(this).addClass("active");
});
$(".infoIcon").on("mouseexit", function () {
	$(this).removeClass("active");
});

let uaParser = new UAParser(navigator.userAgent);
let uaParserResults = uaParser.getResult();
console.log(
	"User device details for suggesting correct downloads: ",
	uaParserResults,
);
// uaParserResults.cpu.architecture == 'amd64' // linux: firefox, brave
navigator.userAgentData
	?.getHighEntropyValues([
		"architecture",
		"model",
		"platformVersion",
		"fullVersionList",
	])
	.then((values) => console.log(values));

$.getJSON(
	"https://api.github.com/repos/NiceNode/nice-node/releases/latest",
	function (data) {
		console.log("NiceNode releases api data: ", data);

		// loop over data.assets, check asset.name and parse out the ones we want to show in the UI.
		// get asset.browser_download_url
		$.each(data.assets, function (index, val) {
			// mac
			if (val.name.endsWith("arm64.dmg")) {
				$("#appleSiliconDownloadLink").attr("href", val.browser_download_url);
			}
			if (val.name.endsWith("x64.dmg")) {
				$("#appleIntelDownloadLink").attr("href", val.browser_download_url);
			}

			// windows
			if (val.name.endsWith("x64-setup.exe")) {
				$("#windowsDownloadLink").attr("href", val.browser_download_url);
			}
			// todo: windows arm download link after we have windows arm device to test

			// linux
			if (val.name.endsWith("amd64.deb")) {
				$("#linuxDebDownloadLink").attr("href", val.browser_download_url);
			}
			if (val.name.endsWith("x86_64.rpm")) {
				$("#linuxRpmDownloadLink").attr("href", val.browser_download_url);
			}
			// arm64 cpu architecture
			if (val.name.endsWith("arm64.deb")) {
				$("#linuxArm64DebDownloadLink").attr("href", val.browser_download_url);
			}
			if (val.name.endsWith("arm64.rpm")) {
				$("#linuxArm64RpmDownloadLink").attr("href", val.browser_download_url);
			}

			// linux appimage discontinued for now
			// if (val.name.endsWith(".AppImage")) {
			// 	$("#linuxAppImageDownloadLink").attr("href", val.browser_download_url);
			// }
		});
	},
);

// Create a jBox tooltip for every element that has class=unstableTooltip,
//  and add class jboxUnstableTooltip to the jBox tooltip when it is created so
//  that we can style the tooltip according to this class
new jBox("Tooltip", {
	attach: ".unstableTooltip",
	addClass: "jboxUnstableTooltip",
	offset: {
		x: 0,
		y: -10,
	},
});

// Event reporting
$("a[download]").on("click", function () {
	if (localStorage.getItem('cookiePreference') === 'allow') {
		mixpanel.track("DownloadClick", {
			uaParserResults: uaParserResults,
			downloadButton: $(this).attr("id"),
		});
	}
});
