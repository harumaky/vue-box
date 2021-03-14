interface WaveParam {
	id: string
	height: number
	color: string
	alpha: number
	unit: number
	zoom: number
	delay: number
}

export class Wave {
	canvas: HTMLCanvasElement
	color: string;
	context: CanvasRenderingContext2D;
	height: number;
	width: number;
	xAxis: number;
	yAxis: number;
	drawSec: number;
	drawT: number;
	alpha: number;
	unit: number;
	zoom: number;
	delay: number;

	constructor(param: WaveParam) {

		this.canvas = document.getElementById(param.id) as HTMLCanvasElement;
    
		this.canvas.width = document.documentElement.clientWidth;
		this.canvas.height = param.height;

		this.color = param.color
		
		this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
		
		this.height = this.canvas.height;
		this.width = this.canvas.width;
		
		this.xAxis = Math.floor(this.height/2);
		this.yAxis = 0;

		this.drawSec = 0;
		this.drawT = 0;

		this.alpha = param.alpha;
		this.unit = param.unit;
		this.zoom = param.zoom;
		this.delay = param.delay;
	}

	draw() {
    this.context.clearRect(0, 0, this.width, this.height);

    //波を描画
    this.drawWave();
    
    // Update the time and draw again
    this.drawSec += .009;
    this.drawT = this.drawSec*Math.PI;
    setTimeout(() => this.draw(), 40);
	}


	drawWave() {
		this.context.fillStyle = this.color;
		this.context.globalAlpha = this.alpha;

		this.context.beginPath(); //パスの開始
		this.drawSine(this.drawT / 0.5);
		this.context.lineTo(this.width + 10, this.height); //パスをCanvasの右下へ
		this.context.lineTo(0, this.height); //パスをCanvasの左下へ
		this.context.closePath() //パスを閉じる
		this.context.fill(); //塗りつぶす
	}

	
	/**
	 * Function to draw sine
	 * 
	 * The sine curve is drawn in 10px segments starting at the origin. 
	 * drawSine(時間)
	 */
	drawSine(t: number) {
		// Set the initial x and y, starting at 0,0 and translating to the origin on
		// the canvas.
		let x = t; //時間を横の位置とする
		let y = Math.sin(x)/this.zoom;
		this.context.moveTo(this.yAxis, this.unit*y+this.xAxis); //スタート位置にパスを置く
		
		// Loop to draw segments (横幅の分、波を描画)
		for (let i = this.yAxis; i <= this.width + 10; i += 10) {
				x = t+(-this.yAxis+i)/this.unit/this.zoom;
				y = Math.sin(x - this.delay)/3;
				this.context.lineTo(i, this.unit*y+this.xAxis);
		}
	}
}

