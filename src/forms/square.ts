import { vec3, vec4 } from "gl-matrix";
import { Triangle } from "../triangle/triangle";

// export class Square{
//     triangle1: Triangle;
//     triangle2: Triangle;
//     constructor(v1: vec3, v2: vec3, v3: vec3, v4: vec3){
//         this.triangle1 = new Triangle(v1, v2, v3);
//         this.triangle2 = new Triangle(v1, v3, v4);
//     };
//     draw(){
//         this.triangle1.draw();
//         this.triangle2.draw();
//     }

// }
export class Square{
    triangles: Triangle[] =[];
    constructor(v1: vec3, v2: vec3, v3: vec3, v4: vec3){
        this.triangles.push(new Triangle(v1, v2, v3));
        this.triangles.push(new Triangle(v3, v4, v1));     
    }

    draw(){
        this.triangles.forEach(t =>{
            t.draw(3);
        })
    }


}