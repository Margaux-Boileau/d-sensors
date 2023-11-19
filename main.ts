function desperta_amb_musica () {
    if (led.brightness() > 200) {
        music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
    }
    if (led.brightness() < 50) {
        music.play(music.stringPlayable("F E D E C F D E ", 120), music.PlaybackMode.UntilDone)
    }
}
function fa_calor () {
    if (input.temperature() > 22) {
        basic.showString("Calor")
    } else {
        basic.showString("Fred")
    }
}
basic.forever(function () {
    desperta_amb_musica()
})
