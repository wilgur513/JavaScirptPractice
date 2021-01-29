test("Number.MAX_VALUE", () => {
    expect(Number.MAX_VALUE).toBe(1.7976931348623157e+308);
});

test("Number.MIN_VALUE", () => {
   expect(Number.MIN_VALUE).toBe(5e-324);
});

test("Number.NaN", () => {
    expect(Number.NaN).toBeNaN();
});

test("Number.MIN_SAFE_INTEGER", () => {
    expect(Number.MIN_SAFE_INTEGER).toBe(-(2**53) + 1);
});

test("Number.MAX_SAFE_INTEGER", () => {
    expect(Number.MAX_SAFE_INTEGER).toBe((2**53) - 1);
});

test("Number.parseFloat", () => {
    expect(parseFloat("1.23")).toBe(1.23);
    expect(parseFloat("1")).toBe(1);
});

test("Number.parseInt", () => {
    expect(parseInt("1234")).toBe(1234);
    expect(parseInt("123.123")).toBe(123);
});

test("Number.isFinite", () => {
    expect(Number.isFinite(Number.NEGATIVE_INFINITY)).toBeFalsy();
    expect(Number.isFinite(Number.POSITIVE_INFINITY)).toBeFalsy();
    expect(Number.isFinite(Number.MAX_VALUE)).toBeTruthy();
});

test("Number.isInteger", () => {
    expect(Number.isInteger(parseFloat("1.12"))).toBeFalsy();
    expect(Number.isInteger(1.1234)).toBeFalsy();

    expect(Number.isInteger(Number.MAX_VALUE)).toBeTruthy();
    expect(Number.isInteger(Number.MAX_SAFE_INTEGER)).toBeTruthy();
});

test("Number.isNaN", () => {
    let a;
    expect(Number.isNaN(a + 2)).toBeTruthy();
    expect(Number.isNaN(Number.NaN)).toBeTruthy();
    expect(Number.isNaN(12)).toBeFalsy();
});

test("Number.isSafeInteger", () => {
    expect(Number.isSafeInteger(Number.MAX_VALUE)).toBeFalsy();
    expect(Number.isSafeInteger(Number.MIN_VALUE)).toBeFalsy();
    expect(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)).toBeTruthy();
    expect(Number.isSafeInteger(Number.MIN_SAFE_INTEGER)).toBeTruthy();
});

test("new Date(Month day, year hours:minutes:seconds)", () => {
    let date = new Date("December 25, 1995 13:00:00");
    expect(date.getFullYear()).toBe(1995);
    expect(date.getMonth()).toBe(11);
    expect(date.getDate()).toBe(25);
    expect(date.getHours()).toBe(13);
    expect(date.getMinutes()).toBe(0);
    expect(date.getSeconds()).toBe(0);
});

test("new Date(year, month, day) -> hour, min, seconds are zero", () => {
    let date = new Date(1995, 11, 25);
    expect(date.getFullYear()).toBe(1995);
    expect(date.getMonth()).toBe(11);
    expect(date.getDate()).toBe(25);
    expect(date.getHours()).toBe(0);
    expect(date.getMinutes()).toBe(0);
    expect(date.getSeconds()).toBe(0);
});

test("new Date(year, month, day, hours, min, seconds)", () => {
    let date = new Date(1995, 11, 25, 13, 13, 13);
    expect(date.getFullYear()).toBe(1995);
    expect(date.getMonth()).toBe(11);
    expect(date.getDate()).toBe(25);
    expect(date.getHours()).toBe(13);
    expect(date.getMinutes()).toBe(13);
    expect(date.getSeconds()).toBe(13);
});

test("getTime returns the number of milliseconds since January 1, 1970, 00:00:00", () => {
    let date = new Date("January 1, 1971 00:00:00");
    let msPerDay = 24 * 60 * 60 * 1000;
    expect(Math.round(date.getTime() / msPerDay)).toBe(365);
});

test("Date object occur auto adjustment", () => {
    let date = new Date(1994, 12, 32);
    expect(date.getFullYear()).toBe(1995);
    expect(date.getMonth()).toBe(1);
    expect(date.getDate()).toBe(1);
});
