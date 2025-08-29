function createOverlay() {
  const overlay = document.createElement("div");
  overlay.id = "darkSoulsOverlay";
  
  const image = document.createElement("img");
  image.src = chrome.runtime.getURL("assets/email_sent.png");
  image.alt = "Email Sent";
  image.className = "darkSoulsImage";
  
  overlay.appendChild(image);
  document.body.appendChild(overlay);
  return overlay;
}

const overlay = createOverlay();

function showOverlay() {
  overlay.classList.add("show");
  setTimeout(() => overlay.classList.remove("show"), 3000);
}

document.addEventListener('click', function(event) {
  const sendButton = event.target.closest('[data-tooltip="Send"], [aria-label="Send"], .gU.Up, [role="button"]');
  
  if (sendButton) {
    const buttonText = sendButton.textContent || sendButton.innerText || '';
    const ariaLabel = sendButton.getAttribute('aria-label') || '';
    
    if (buttonText.toLowerCase().includes('send') || 
        ariaLabel.toLowerCase().includes('send') ||
        sendButton.getAttribute('data-tooltip') === 'Send') {
      
      setTimeout(showOverlay, 500);
    }
  }
});
  