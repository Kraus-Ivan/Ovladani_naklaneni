TRESHOLD = 512
DELAY = 1000

valueX = 2
klicX = True
cas_konecnyX = 0
cas_zacatecniX = 0
casX = 0

valueY = 2
klicY = True
cas_konecnyY = 0
cas_zacatecniY = 0
casY = 0

replot(valueX, valueY)

def on_forever():
    global valueX, casX, cas_konecnyX, cas_zacatecniX, klicX, TRESHOLD, DELAY, valueY, casY, cas_konecnyY, cas_zacatecniY, klicY
    tiltDirectionX = input.acceleration(Dimension.X)
    tiltDirectionY = input.acceleration(Dimension.Y)
    replot(valueX, valueY)

    if abs(tiltDirectionX) > TRESHOLD and klicX:
        if tiltDirectionX > TRESHOLD:
            valueX += 1
        elif tiltDirectionX < -TRESHOLD:
            valueX -= 1
        klicX = False
        valueX = Math.constrain(valueX, 0, 4)

    elif abs(tiltDirectionX) > TRESHOLD and klicX == False:
        cas_konecnyX = control.millis()
        casX = cas_konecnyX - cas_zacatecniX
        if casX > DELAY:
            if tiltDirectionX > TRESHOLD:
                valueX += 1 
            elif tiltDirectionX < -TRESHOLD:
                valueX -= 1
            cas_zacatecniX = control.millis()
        valueX = Math.constrain(valueX, 0, 4)

    elif abs(tiltDirectionX) < 400:
        klicX = True
        replot(valueX, valueY)
        cas_zacatecniX = control.millis()
    
    if abs(tiltDirectionY) > TRESHOLD and klicY:
        if tiltDirectionY > TRESHOLD:
            valueY += 1
        elif tiltDirectionY < -TRESHOLD:
            valueY -= 1
        klicY = False
        valueY = Math.constrain(valueY, 0, 4)

    elif abs(tiltDirectionY) > TRESHOLD and klicY == False:
        cas_konecnyY = control.millis()
        casY = cas_konecnyY - cas_zacatecniY
        if casY > DELAY:
            if tiltDirectionY > TRESHOLD:
                valueY += 1
            elif tiltDirectionY < -TRESHOLD:
                valueY -= 1
            cas_zacatecniY = control.millis()
        valueY = Math.constrain(valueY, 0, 4)
    
    elif abs(tiltDirectionY) < 400:
        klicY = True
        replot(valueX, valueY)
        cas_zacatecniY = control.millis()

basic.forever(on_forever)

def replot(x: number, y: number):
    basic.clear_screen()
    led.plot(x, y)