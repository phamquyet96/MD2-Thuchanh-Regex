export class PhoneNumber{
    private PHONENUMBER:RegExp=/^\([0-9]{2}\)-\(0[0-9]{9}\)$/;

    public validate(regex:string):boolean{
        return this.PHONENUMBER.test(regex);
    }
}