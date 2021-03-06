var audioPlayer = document.getElementById('audioplayer')
var loaded = false
var playBtn = document.getElementById('playBtn')
var pauseBtn = document.getElementById('pauseBtn')

pauseBtn.addEventListener('click', e => {
    e.preventDefault()
    playBtn.style.display = 'inline'
    pauseBtn.style.display = 'none'
    audioPlayer.pause()

    return false
})

playBtn.addEventListener('click', e => {
    e.preventDefault()
    playBtn.style.display = 'none'
    pauseBtn.style.display = 'inline'
    audioPlayer.play()

    return false
})

const playSong = file => {
    if (loaded == false) {
        audioPlayer.innerHTML = `<source src="` + file + `" type="audio/mp3" /> `
        loaded = true
    }

    audioPlayer.play()

    playBtn.style.display = 'none'
    pauseBtn.style.display = 'inline'
}

document.querySelectorAll('.main__col').forEach(item => {
    item.addEventListener('click', event => {
        let image = item.getAttribute('data-image')
        let artist = item.getAttribute('data-artist')
        let song = item.getAttribute('data-song')
        let file = item.getAttribute('data-file')
        let playArtistComponent = document.getElementsByClassName('player__artist')

        let atualizacao = setInterval(atualizarBarra, 500)

        playArtistComponent[0].innerHTML =
            `
        <img class="imagePlayer" src="` +
            image +
            `">
            <h4>` +
            song +
            `<br/><span>` +
            artist +
            `</span></h4>`

        playSong(file)
    })

    function atualizarBarra() {
        const progress = document.getElementById('progress')

        if (document.getElementById('rockstar')) {
            song_id = document.getElementById('rockstar')
        } else {
            song_id = document.getElementById('manha')
        }

        const duracaoTotal = song_id.duration

        if (song_id.paused) {
            let larguraPercorrida = (600 * song_id.currentTime) / duracaoTotal
            console.log(larguraPercorrida)
                // progress.style.width = parseInt(larguraPercorrida) + 'px'
        }
    }
})