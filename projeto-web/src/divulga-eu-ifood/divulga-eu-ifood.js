function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const image = document.getElementById('foodImage');
            image.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

function clearChat() {
    const chatBox = document.getElementById('chatBox');
    chatBox.innerHTML = '';
}

function sendMessage(event) {
    if (event.key === 'Enter') {
        const chatInput = document.getElementById('chatInput');
        const message = chatInput.value.trim();
        if (message !== '') {
            const chatBox = document.getElementById('chatBox');
            const newMessage = document.createElement('div');
            newMessage.className = 'chat-message';
            newMessage.textContent = message;
            chatBox.appendChild(newMessage);
            chatInput.value = '';
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }
}
