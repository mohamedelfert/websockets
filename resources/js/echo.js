import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

document.addEventListener("DOMContentLoaded", function() {
    Echo.private('message-channel')
        .listen('MessageSent', (e) => {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message';
            messageDiv.innerText = e.message;
            document.getElementById('messages').appendChild(messageDiv);
        });
});
