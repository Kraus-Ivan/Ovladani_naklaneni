TRESHOLD = 512
DELAY = 1000
valueX = 2
valueY = 2
replot(valueX, valueY)
klic = True
cas_konecny = 0
cas_zacatecni = 0
cas = 0

def on_forever():
    global valueX, cas, cas_konecny, cas_zacatecni, klic, TRESHOLD, DELAY
    tiltDirection = input.acceleration(Dimension.X)
    replot(valueX, valueY)

    if abs(tiltDirection) > TRESHOLD and klic:
        if tiltDirection > TRESHOLD:
            valueX += 1
        elif tiltDirection < -TRESHOLD:
            valueX -= 1
        klic = False
        valueX = Math.constrain(valueX, 0, 4)

    elif abs(tiltDirection) > TRESHOLD and klic == False:
        cas_konecny = control.millis()
        cas = cas_konecny - cas_zacatecni
        if cas > DELAY:
            if tiltDirection > TRESHOLD:
                valueX += 1 
            elif tiltDirection < -TRESHOLD:
                valueX -= 1
            cas_zacatecni = control.millis()
        valueX = Math.constrain(valueX, 0, 4)
    else:
        klic = True
        replot(valueX, valueY)
        cas_zacatecni = control.millis()
basic.forever(on_forever)

def replot(x: number, y: number):
    basic.clear_screen()
    led.plot(x, y)