import { vec3 } from "gl-matrix";
import { Square } from "../forms/square";
import { WebGLStart } from "../triangle/webglstart";
import { SGNode } from "./sgnode";
export class CubeNode extends SGNode{
    squares : Square[];

    gl: WebGLRenderingContext;

    constructor(heigth: number, width: number, depth: number){
        super();
        let v1=vec3.fromValues(heigth/2, width/2, -depth/2);
        let v2=vec3.fromValues(heigth/2, -width/2, -depth/2);
        let v3=vec3.fromValues(-heigth/2, -width/2, -depth/2);
        let v4=vec3.fromValues(-heigth/2, width/2, -depth/2);
        let v5=vec3.fromValues(heigth/2, width/2, depth/2);
        let v6=vec3.fromValues(heigth/2, -width/2, depth/2);
        let v7=vec3.fromValues(-heigth/2, -width/2, depth/2);
        let v8=vec3.fromValues(-heigth/2, width/2, depth/2);
       this.gl = WebGLStart.getInstance().gl;
       this.squares =[ new Square(v1, v2, v3, v4),
                        new Square(v6, v5, v8, v7),
                        new Square(v5, v6, v2, v1),
                        new Square(v5, v1, v4, v8),
                        new Square(v2, v6, v7, v3),
                        new Square(v4, v3, v7, v8)];

    }

    draw(days: number){
        this.squares.forEach(square => {
            square.draw();
        });
    }
}