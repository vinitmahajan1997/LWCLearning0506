import { LightningElement, track } from 'lwc';

export default class ShapeCalculator extends LightningElement {
    squareSide = 0 
    rectangleWidth = 0
    rectangleHight = 0
    @track areaOfSquare = 0 
    @track areaOfRectangle = 0
    setSquareSide(event) {
        this.squareSide = event.target.value
        console.log(this.squareSide)
    }
    setWidthOfRectangle(event) {
        this.rectangleWidth = event.target.value
        console.log(this.rectangleWidth)
    }
    setHightOfRectangle(event) {
        this.rectangleHight = event.target.value
        console.log(this.rectangleHight)
    }
    calculateAreaOfSquare() {
        this.areaOfSquare = this.squareSide * this.squareSide
    }
    calculateAreaOfRectangle() { 
        this.areaOfRectangle = this.rectangleWidth * this.rectangleHight
     }

}