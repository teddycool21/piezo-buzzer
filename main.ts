input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.LogoUp, function () {
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.OnceInBackground)
    basic.showIcon(IconNames.House)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Forever)
    basic.showIcon(IconNames.Yes)
})
