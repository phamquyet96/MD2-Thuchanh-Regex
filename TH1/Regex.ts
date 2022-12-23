export class EmailRegex{
    private REGEX:RegExp=/^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    public validate (regex:string):boolean{
        return this.REGEX.test(regex);
    }
}