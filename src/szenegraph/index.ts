// Objekte erstellen
import { mat4, vec4 } from "gl-matrix";
import { Camera } from "./camera";
import { Orbit } from "./orbit";
import { Planet } from "./planet";
import {Scenegraph} from "./scenegraph"
import { WebGLStart } from "../triangle/webglstart";
import { Sphere } from "./sphereNode";
import { CubeNode } from "./cubeNode";
import { Light } from "../materiallights/light";
import { Material } from "../materiallights/material";
import { Timer } from "./timer";


let timer = new Timer(10);

/**
 * testing
 */

let light = new Light(
    vec4.fromValues(0,0,0,1), 
    vec4.fromValues(1,1,1,1), 
    vec4.fromValues(1,1,1,1), 
    vec4.fromValues(1,1,1,1));
/**
 * http://learnwebgl.brown37.net/10_surface_properties/surface_properties_color.html
 * gold 0.24725 	0.1995 	    0.0745
 *  	0.75164     0.60648     0.22648     1.0
 * 	    0.628281 	0.555802 	0.366065
 *  	0.4
 */
let sunMaterial = new Material(
    vec4.fromValues(0.7, 0.7, 0, 1), 
    vec4.fromValues(0.24725, .2245, .0645, 1), 
    vec4.fromValues(0.75164, 0.60648, 0.22648, 1), 
    vec4.fromValues(0.628281, 0.555802, 0.366065, 1),
    83.2);

    /**
     * Copper 	
     * 0.19125      0.0735      0.0225      1.0 
     * 0.7038       0.27048     0.0828      1.0
     * 0.256777     0.137622    0.086014    1.0
     * 12.8
     */
let marsMaterial = new Material(
    vec4.fromValues(0,0,0,1), 
    vec4.fromValues(0.19125, 0.0735, 0.0225, 1), 
    vec4.fromValues(0.7038, 0.27048, 0.0828, 1), 
    vec4.fromValues(0.256777, 0.137622, 0.086014,1), 
    12.8);

    /**
     * Emerald 	
     * 0.0215   0.1745      0.0215  0.55
     * 0.07568  0.61424     0.07568 0.55
     * 0.633    0.727811    0.633   0.55
     * 76.8
     */
let earthMaterial = new Material(
    vec4.fromValues(0, 0, 0, 1), 
    vec4.fromValues(0.0215, 0.1745, 0.0215, 1), 
    vec4.fromValues(0.07568, 0.61424, 0.07568, 1), 
    vec4.fromValues(0.633, 0.727811, 0.633, 1), 
    76.8);

    /**
     * Pewter 	
     * 0.105882     0.058824    0.113725    1.0
     * 0.427451     0.470588    0.541176    1.0
     * 0.333333     0.333333    0.521569    1.0
     * 9.84615
     */
let moonMaterial = new Material(
    vec4.fromValues(0, 0, 0, 1),
    vec4.fromValues(0.105882 , 0.058824, 0.113725, 1), 
    vec4.fromValues(0.427451, 0.470588, 0.541176, 1), 
    vec4.fromValues(0.333333, 0.333333, 0.521569, 1), 
    9.84615);


/**
 * 
 */

//let sphere = new Sphere(50, moonColor);
let camera = new Camera();

//let sun = new Planet(30, 7.25, sunColor);
let sun = new Planet(7.25, 25.38);
let sunBody = new Sphere(20);
//let earth = new Planet(4, 23.45, earthColor);
let earth = new Planet(23.45, 1);
let earthBody = new Sphere(4);
//let mars = new Planet(2, 25.19, marsColor);
let mars = new Planet(25.19, 1.03);
let marsBody = new Sphere(2);
//let moon = new Planet (0.5, 1.54, moonColor);
let moon = new Planet (1.54, 27.32);
let moonBody = new CubeNode(1, 1, 1);

let sunOrbit = new Orbit(0, 0, 0);
let earthOrbit = new Orbit(35, 0, 365);
let moonOrbit = new Orbit(6, 5.145, 27.32);
let marsOrbit = new Orbit(53, 19, 678);

sun.setMaterial(sunMaterial);
earth.setMaterial(earthMaterial);
mars.setMaterial(marsMaterial);
moon.setMaterial(moonMaterial);

camera.addChild(sunOrbit);
sunOrbit.addChild(sun);
sunOrbit.addChild(earthOrbit);
sunOrbit.addChild(marsOrbit);

sun.addChild(sunBody);
sun.addChild(light);

marsOrbit.addChild(mars);
earthOrbit.addChild(earth);
mars.addChild(marsBody);
earth.addChild(earthBody);

earthOrbit.addChild(moonOrbit);
moonOrbit.addChild(moon);
moon.addChild(moonBody);

// sunBody.addChild(sunMaterial);
// marsBody.addChild(marsMaterial);
// earthBody.addChild(earthMaterial);
// moonBody.addChild(moonMaterial);


// zeichne Szenegraph, gebe Wurzelobjekt als Start
let scene = new Scenegraph(camera);


function drawScene() {
    let time = timer.daysPassed();
    let webglStart = WebGLStart.getInstance();
    let gl = webglStart.gl;
    gl.viewport(0, 0, webglStart.canvas.width, webglStart.canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    scene.draw(time);
    window.requestAnimationFrame(drawScene);
}
window.requestAnimationFrame(drawScene);
