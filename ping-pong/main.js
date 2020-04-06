const ping = document.getElementById('ping');
const pong = document.getElementById('pong')
ping.addEventListener('click', handlePing)
pong.addEventListener('click', handlePong)

function handlePing() {
    ping.classList.add('hidden');
    pong.classList.remove('hidden');
}

function handlePong() {
    pong.classList.add('hidden');
    ping.classList.remove('hidden');
}
