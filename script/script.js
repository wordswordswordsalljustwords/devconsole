document.getElementById('openLinkButton').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;
    if (url) {
        // Open the URL in a new tab
        window.open(url, '_blank');
        document.getElementById('message').textContent = `Opened: ${url}`;
    } else {
        document.getElementById('message').textContent = 'Please enter a valid URL.';
    }
});

document.getElementById('runCodeButton').addEventListener('click', function() {
    const code = document.getElementById('consoleInput').value;
    try {
        const result = eval(code);
        document.getElementById('consoleOutput').textContent = result;
    } catch (error) {
        document.getElementById('consoleOutput').textContent = `Error: ${error.message}`;
    }
});
