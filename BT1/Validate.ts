export class Validate{
    private VALIDATE:RegExp=/^[CAP]{1}[0-9]{4}[GHIKLM]{1}$/;
    public validate(regex:string):boolean{
        return this.VALIDATE.test(regex);
    }
}