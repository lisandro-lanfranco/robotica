from PySide import QtCore

i=0
avance = 1

def update():
	global i
	global avance
	if  i > 100:
		avance = -1

	if i < -100:
		avance = 1

	FreeCAD.getDocument('Articulacion_de_revolucion_v01').getObject('Fusion001002').Placement = App.Placement(App.Vector(0,0,0),App.Rotation(App.Vector(0,0,1),i))
	i += 0.1*avance

timer = QtCore.QTimer()
timer.timeout.connect(update)
timer.start( 1 )

#timer.stop()
