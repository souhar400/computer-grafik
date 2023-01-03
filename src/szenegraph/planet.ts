import { mat4, vec4 } from "gl-matrix";
import { Cube } from "../forms/cube";
import { Material } from "../materiallights/material";
import { Framerate } from "./framerate";
import { SGNode } from "./sgnode";

export class Planet extends SGNode{
	private tiltRad: number;
	private rotationPeriod: number;

	constructor(tilt : number, rotationPeriod: number){
		super();
		this.tiltRad = tilt * Math.PI/180;
		this.rotationPeriod = rotationPeriod;
		mat4.rotateZ(this.trafo, mat4.create(), this.tiltRad);

	}
	setMaterial(material: Material){
		this.addChild(material);
	}
	getTrafo(){


		return this.trafo;
	}
	draw(days: number){	
		/* timer v1
		let rotation = Framerate.ftime/this.rotationPeriod*2*Math.PI;
		*/

		let part = days/this.rotationPeriod;
		let rotation = part*2*Math.PI;
		mat4.rotateY(this.trafo, this.trafo, rotation);
	}

}
