![enter image description here](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_FH_Muenster_cmyk.svg/1024px-Logo_FH_Muenster_cmyk.svg.png)
# Computergrafik
Das Projekt findet im Rahmen des Moduls **Computergrafik** im 5. Semester statt.


## Ziele und Beschreibung des Praktikums
### Praktikum 1: 
- Einarbeitung in die einzelnen Komponenten von WebGL 1.0 (OpenGL ES 2.0 / GLSL ES 1.00)
- Erarbeitung der Grundlagen der objektorientierten Programmierung mit JavaScript und der OpenGL Rendering Pipeline
- Beschäftigung mit den Grundprinzipien des Grafikstandards und Erstellung erster 2D/3D Objekte mittels OpenGL Grafik-Primitiven und Shadern.
### Praktikum 2:
- Aufbauen einer komplexen 3D-Szene mit Hilfe des Scenegraphen 
- Binden der Tastatursteuerung in den Scenegraphen 
### Praktikum 3: 
- Beschäftigung mit der Kamera
- Beschäftgiung insbesondere mit der perspektivischen Projektion 
- Bringen der Szene in Bewegung
### Praktikum 4:
- Einsetzen des Phong-Beleuchtungsmodells 
- Setzen von Licht und Materialeigenschaften, damit die Szene ein realistischeres Aussehen hat 
### Praktikum 5: 
- Integration von Texturen in die Szene
- Eine komplexe Szene bauen 
- Bewegung des Beobachter durch den Raum 


## Benötigte Ausstattung
- **TypeScript** über Node.js
- **Texteditor** oder **IDE** wie VSCode, Vim oder Notepad++
- **Internetbrowser** mit Entwicklungswerkzeugen wie z.B. [Firefox](https://www.mozilla.org/de/firefox/new/)

## Vorbereitungen
- **TypeScript**[^1] installieren:
    1. Node.js mit npm [installieren](https://nodejs.org/en/download/).
    2. Globale Installation von **TypeScript** in der Konsole mit: `npm install typescript -g`
- **Git** [installieren](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). 
- Eine geeignete **IDE** oder ein **Texteditor** wie z.B. VSCode: [ Installation](https://code.visualstudio.com/download).  
   VSCode beinhaltet eine integrierte Konsole und unterstützt nativ TypeScript. Des weiteren bietet es unter anderem eine Erweiterung zur Editierung von Shader-Programmen:  
        - WebGL GLSL Editor Plugin  


## "Bauen" des Programms 
Nachfolgende Befehle müssen in der Konsole ausgeführt werden.

1. Klonen Sie das Git-Repository mit dem Befehl: 
`git clone https://github.com/souhar400/computer-grafik.git`
2. Gehen Sie in den geklonten Ordner mit: `cd cg_praktikum`
3. Installation der Projektabhängigkeiten:`npm install`
4. Damit glMatrix[^2] funktioniert, müssen Sie einige Pakete aktualisieren mit: `npm update`
5. Danach installieren Sie glmatrix mit: `npm install gl-matrix`
6. Anschließend können Sie einen Server am Port 9000 starten mit dem Befehl: `npm start`
7. Öffnen Sie die Webseite auf ***localhost:9000*** in Ihrem Webbrowser vorzugsweise

## Referenzen
[^1]: [TypeScript](https://www.typescriptlang.org/) bietet u.a. JavaScript Programmierung mit Typen 
[^2]: [glMatrix](https://glmatrix.net/) ist eine Bibliothek für Matrix- und Vektor-Rechnung geschrieben in JavaScript


## Nutzungsrechte 
Dieses Produkt unterliegt den Lizenzbestimmungen der FH Münster.
