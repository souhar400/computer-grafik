import { mat4, vec3 } from "gl-matrix";
import { WebGLStart } from "../triangle/webglstart";
import { SGNode } from "./sgnode";

export class Camera extends SGNode{


    private fovRadian : number;
    private projectionMatrix: mat4;
    private x : number;
    private y : number;
    private z : number;

    constructor(){
        super();
        this.x = this.y = this.z = 0;
        this.fovRadian = Math.PI/2;
        let translation = vec3.fromValues(0, 0, -40);
        this.initListeners();
        mat4.translate(this.trafo, this.trafo, translation);
    }
    getTrafo(){

        return this.trafo;
    }
    draw(){
        this.projectionMatrix = mat4.create();
        let webglStart= WebGLStart.getInstance();
        mat4.perspective(this.projectionMatrix, this.fovRadian%Math.PI, webglStart.canvas.width / webglStart.canvas.height, 1, 1000);


        mat4.rotateX(this.trafo, this.trafo, -this.x);
        mat4.rotateY(this.trafo, this.trafo, -this.y);
        mat4.translate(this.trafo, this.trafo, vec3.fromValues(this.x, this.y, this.z));
        
        
        
        webglStart.gl.uniformMatrix4fv(webglStart.pMatrixUniform, false, this.projectionMatrix);
        
    }

    initListeners(){
        document.addEventListener('keydown', event => this.rotate(event.key,1) );
        document.addEventListener('keyup', event => this.rotate(event.key,0) );
    }
    
    rotate(code: String, status: number) {
        if(status == 1){
            if (code == 'ArrowDown'){
                this.x = -0.05;
            }
            else if (code == 'ArrowRight'){
                this.y = 0.05;
            }
            else if ( code == 'ArrowLeft'){
                this.y = -0.05;
            }
            else if(code == 'ArrowUp'){
                this.x = 0.05;
            }
            else if(code == 'PageUp'){
                this.z = -10;
            }
            else if(code == 'PageDown'){
                this.z = 10;
            }
    }
        else{
            this.x = 0;
            this.y = 0;
            this.z = 0;
        }
    }
}