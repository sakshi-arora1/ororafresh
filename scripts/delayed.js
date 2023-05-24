// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './lib-franklin.js';
import './universal-editor-cors-0.0.62-embedded.js';


// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
function removeCookieBanner(evnt) {
    var elements = document.getElementsByClassName("orora-cookie-block");
    var cookieElement = elements[0];
    cookieElement.classList.add("hidden");
    evnt.stopPropagation();
}

var consentCookie = document.getElementById("i-consent-to-cookies");
if (consentCookie) {
    consentCookie.addEventListener('click', removeCookieBanner);
}
