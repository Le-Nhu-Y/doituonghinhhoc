export class Shape{
    private color: string='blue';
    private filled: boolean=true;
    constructor(color: string,filled: boolean) {
        this.color = color;
        this.filled = filled;
    }
    getColor():string{
        return this.color;
    }
    setColor(color:string):void{
        this.color = color;
    }
    getFilled():boolean{
        return this.filled;
    }
    setFilled(filled:boolean):void {
        this.filled = filled;
    }
    toString():string{
        return "A Square with of color: "
            + this.getColor()
            + " and "
            + (this.getFilled() ? "filled" : "not filled");
    }
}