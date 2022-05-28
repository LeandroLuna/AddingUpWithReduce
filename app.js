const videos = document.querySelectorAll('[data-time]');
const videosArr = [...videos]; // NodeList to Array
const seconds = videosArr
    .map((video) => video.dataset.time) // 'Seleciona' cada tempo
    .map((timeCode) => {
        const [mins, secs] = timeCode.split(':').map(parseFloat); // Separa os minutos dos segundos com base no ':' e converte de String para Array.
        return mins * 60 + secs;
    })
    .reduce((total, videoSecs) => total + videoSecs, 0); // Soma o total de segundos dos vídeos

let secondsLeft = seconds; // 'Quebra' os segundos conforme reduzimos a dimensão do tempo:
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(`Total de tempo = ${hours}:${mins}:${secondsLeft}`);