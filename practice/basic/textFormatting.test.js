describe("string tests",() => {
    let string = "Hello World";

    describe("string literals features", () => {
        test("string literals automatically converted to String when using String method", () => {
            expect(string.length).toBe(11);
        });

        test("string is immutable", () => {
            string[0] = "F";
            expect(string).toBe("Hello World");
        });

        test("string is array-like object ", () => {
            expect(string[0]).toBe("H");
            expect(string[3]).toBe("l");
            expect(string[13]).toBeUndefined();
        });
    });

    describe("String object methods", () => {
        test("charAt returns position of string", () => {
            expect(string.charAt(0)).toBe("H");
            expect(string.charAt(1)).toBe("e");
            expect(string.charAt(2)).toBe("l");
            expect(string.charAt(3)).toBe("l");
            expect(string.charAt(4)).toBe("o");
            expect(string.charAt(13)).toBe("");
        });

        test("indexOf returns first index of string", () => {
            expect(string.indexOf("ell")).toBe(1);
            expect(string.indexOf(" ")).toBe(5);
            expect(string.indexOf("t")).toBe(-1);
        });

        test("lastIndexOf return last index of string", () => {
            expect(string.lastIndexOf("l")).toBe(9);
            expect(string.lastIndexOf("t")).toBe(-1);
        });

        test("startsWith return whether start with specific string", () => {
            expect(string.startsWith("Hell")).toBeTruthy();
            expect(string.startsWith("hello")).toBeFalsy();
        });

        test("endsWith return whether end with specific string", () => {
            expect(string.endsWith("rld")).toBeTruthy();
            expect(string.endsWith("Hello")).toBeFalsy();
        });

        test("includes return whether contain specific string", () => {
            expect(string.includes("lo W")).toBeTruthy();
            expect(string.includes("lloWorld")).toBeFalsy();
        });

        test("concat return new combined string", () => {
            let a = "Hello";
            let b = " ";
            let c = "World";
            let combined = a.concat(b).concat(c);

            expect(a).toBe("Hello");
            expect(b).toBe(" ");
            expect(c).toBe("World");
            expect(combined).toBe(string);
        });

        test("split return string array that is split", () => {
            let expected = string.split("l");
            let actual = ["He", "", "o Wor", "d"];

            for(let i in expected){
                expect(expected[i]).toBe(actual[i]);
            }
        });

        test("slice extract and return new string", () => {
           expect(string.slice(0, 5)).toBe("Hello");
           expect(string.slice(6)).toBe("World");
           expect(string).toBe("Hello World");
        });

        test("slice can use negative index", () => {
            expect(string.slice(-3)).toBe("rld");
            expect(string.slice(-5, -3)).toBe("Wo");
        });

        test("substr's parameter is start index and length", () => {
           expect(string.substr(1, 3)).toBe("ell");
        });

        test("when start > end, substring swap parameters", () => {
            expect(string.substring(5, 0)).toBe("Hello");
        });

        test("when index is negative, substring convert to zero", () => {
            expect(string.substring(5, -1)).toBe("Hello");
        });

        test("repeat return repeated new string", () => {
            expect(string.repeat(2)).toBe("Hello WorldHello World");
            expect(string).toBe("Hello World");
        });

        test("trim remove whitespace from the beginning and end of the string", () => {
            expect(("   " + string + "       ").trim()).toBe("Hello World");
        });
    });

    describe("multiline string", ()=> {
        test("multi-lines string", () => {
            let multiLines =
            `Hello
            World`;

            expect(multiLines).toBe("Hello\n            World");
        });

        test("multi-lines string can use embedded expression", () => {
            let name = "Jung"
            let multiLines = `my name is ${name}`;
            expect(multiLines).toBe("my name is Jung");

            let value = 2;
            multiLines = `2 + 2 = ${value + value}`;
            expect(multiLines).toBe("2 + 2 = 4");
        });
    });
});