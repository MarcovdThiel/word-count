export class StringRegex {
    static hasOnlyStrings(text: string): boolean {
        if (text.match("^[a-zA-Z ]*$") != null) {
            return true;
        }
        return false;
    }
}