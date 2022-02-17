let TRESHOLD = 512
let DELAY = 1000
let valueX = 2
let klicX = true
let cas_konecnyX = 0
let cas_zacatecniX = 0
let casX = 0
let valueY = 2
let klicY = true
let cas_konecnyY = 0
let cas_zacatecniY = 0
let casY = 0
replot(valueX, valueY)
basic.forever(function on_forever() {
    
    let tiltDirectionX = input.acceleration(Dimension.X)
    let tiltDirectionY = input.acceleration(Dimension.Y)
    replot(valueX, valueY)
    if (Math.abs(tiltDirectionX) > TRESHOLD && klicX) {
        if (tiltDirectionX > TRESHOLD) {
            valueX += 1
        } else if (tiltDirectionX < -TRESHOLD) {
            valueX -= 1
        }
        
        klicX = false
        valueX = Math.constrain(valueX, 0, 4)
    } else if (Math.abs(tiltDirectionX) > TRESHOLD && klicX == false) {
        cas_konecnyX = control.millis()
        casX = cas_konecnyX - cas_zacatecniX
        if (casX > DELAY) {
            if (tiltDirectionX > TRESHOLD) {
                valueX += 1
            } else if (tiltDirectionX < -TRESHOLD) {
                valueX -= 1
            }
            
            cas_zacatecniX = control.millis()
        }
        
        valueX = Math.constrain(valueX, 0, 4)
    } else if (Math.abs(tiltDirectionX) < 400) {
        klicX = true
        replot(valueX, valueY)
        cas_zacatecniX = control.millis()
    }
    
    if (Math.abs(tiltDirectionY) > TRESHOLD && klicY) {
        if (tiltDirectionY > TRESHOLD) {
            valueY += 1
        } else if (tiltDirectionY < -TRESHOLD) {
            valueY -= 1
        }
        
        klicY = false
        valueY = Math.constrain(valueY, 0, 4)
    } else if (Math.abs(tiltDirectionY) > TRESHOLD && klicY == false) {
        cas_konecnyY = control.millis()
        casY = cas_konecnyY - cas_zacatecniY
        if (casY > DELAY) {
            if (tiltDirectionY > TRESHOLD) {
                valueY += 1
            } else if (tiltDirectionY < -TRESHOLD) {
                valueY -= 1
            }
            
            cas_zacatecniY = control.millis()
        }
        
        valueY = Math.constrain(valueY, 0, 4)
    } else if (Math.abs(tiltDirectionY) < 400) {
        klicY = true
        replot(valueX, valueY)
        cas_zacatecniY = control.millis()
    }
    
})
function replot(x: number, y: number) {
    basic.clearScreen()
    led.plot(x, y)
}

