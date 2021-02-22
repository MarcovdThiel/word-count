import { StringRegex } from "../models/StringRegex"

describe('String Regex', () => {
    it('should return false when not containing only strings', () => {
        expect(StringRegex.hasOnlyStrings('this is a string with numbers 12345')).toBe(false);
    })
})