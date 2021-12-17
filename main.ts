let TRESHOLD = 512
let DELAY = 1000
let valueX = 2
let valueY = 2
replot(valueX, valueY)
let klic = true
let cas_konecny = 0
let cas_zacatecni = 0
let cas = 0
basic.forever(function on_forever() {
    
    let tiltDirection = input.acceleration(Dimension.X)
    replot(valueX, valueY)
    if (Math.abs(tiltDirection) > TRESHOLD && klic) {
        if (tiltDirection > TRESHOLD) {
            valueX += 1
        } else if (tiltDirection < -TRESHOLD) {
            valueX -= 1
        }
        
        klic = false
        valueX = Math.constrain(valueX, 0, 4)
    } else if (Math.abs(tiltDirection) > TRESHOLD && klic == false) {
        cas_konecny = control.millis()
        cas = cas_konecny - cas_zacatecni
        if (cas > DELAY) {
            if (tiltDirection > TRESHOLD) {
                valueX += 1
            } else if (tiltDirection < -TRESHOLD) {
                valueX -= 1
            }
            
            cas_zacatecni = control.millis()
        }
        
        valueX = Math.constrain(valueX, 0, 4)
    } else {
        klic = true
        replot(valueX, valueY)
        cas_zacatecni = control.millis()
    }
    
})
function replot(x: number, y: number) {
    basic.clearScreen()
    led.plot(x, y)
}

