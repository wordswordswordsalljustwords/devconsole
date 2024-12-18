document.getElementById('loadButton').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;
    const iframe = document.getElementById('webpageFrame');

    // Load the URL in the iframe
    iframe.src = url;

    // Wait for the iframe to load
    iframe.onload = function() {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        // Log to console output
        logToConsole(`Loaded ${url}`);

        // Add click event to elements in the iframe
        iframeDocument.body.addEventListener('click', function(event) {
            event.preventDefault(); const targetElement = event.target;
            highlightElement(targetElement);
            logToConsole(`Clicked on : ${targetElement.tagName}`);
        });
    };
});

function logToConsole(message) {
    const consoleOutput = document.getElementById('consoleOutput');
    consoleOutput.innerHTML += `<div>${message}</div>`;
    consoleOutput.scrollTop = consoleOutput.scrollHeight; // Scroll to the bottom
}

function highlightElement(element) {
    // Remove previous highlights
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(el => el.classList.remove('highlight'));

    // Highlight the current element
    element.classList.add('highlight');
}
