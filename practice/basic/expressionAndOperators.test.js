test("exponentiation operator", () => {
    let a = 2;
    let b = 6;

    expect(a ** b).toBe(64);
});

test("exponentiation assignment", () => {
   let a = 2;
   a **= 6;

   expect(a).toBe(64);
});

test("logical nullish operator", () => {
    let a;
    expect(a ?? 10).toBe(10);

    let b = null;
    expect(b ?? 10).toBe(10);

    let c = 10;
    expect(c ?? 1).toBe(10);
});

test("destructuring using array", () => {
    let list = ["a", "b", "c"];
    let [a, b, c] = list;

    expect(a).toBe("a");
    expect(b).toBe("b");
    expect(c).toBe("c");

    let [k, ...rest] = list;

    expect(k).toBe("a");
    expect(rest.length).toBe(2);
    expect(rest[0]).toBe("b");
    expect(rest[1]).toBe("c");
})

test("destructuring using object", () => {
    let obj = {a : "a", b : "b", c : "c"};
    let {a, b, c} = obj;

    expect(a).toBe("a");
    expect(b).toBe("b");
    expect(c).toBe("c");
});

test("destructuring using curly bracket", () => {
    let obj = {a : "a", b : "b", c : "c"};
    ({a, b, c} = obj);

    expect(a).toBe("a");
    expect(b).toBe("b");
    expect(c).toBe("c");
});

test("destructuring using object with rest", () => {
    let obj = {a : "a", b : "b", c : "c", d : "d"};
    let {a, b, ...rest} = obj;

    expect(a).toBe("a");
    expect(b).toBe("b");
    expect(rest.c).toBe("c");
    expect(rest.d).toBe("d");
});

test("== and != convert type and compare", () => {
   expect('3' == 3).toBeTruthy();
   expect('3' != 3).toBeFalsy();
});

test("=== and !== not convert type", () => {
    expect('3' === 3).toBeFalsy();
    expect('3' !== 3).toBeTruthy();
});

test("delete object property", () => {
    let obj = {a : "a"};

    expect(obj.a).toBe("a");
    expect(delete obj.a).toBeTruthy();
    expect(obj.a).toBeUndefined();
});

test("vary variables typeof results", () => {
    expect(typeof function(){}).toBe("function");
    expect(typeof new Function()).toBe("function");
    expect(typeof parseInt).toBe("function");

    expect(typeof "hello").toBe("string");
    expect(typeof 109).toBe("number");
    expect(typeof true).toBe("boolean");

    expect(typeof [1, 2, 3]).toBe("object");
    expect(typeof {a : "a", b : "b"}).toBe("object");
    expect(typeof null).toBe("object");

    expect(typeof what).toBe("undefined");
});

test("in operator find property name", () => {
    let obj = {name : "jung", age : 27, say : "hello"};

    expect("name" in obj).toBeTruthy();
    expect("age" in obj).toBeTruthy();
    expect("say" in obj).toBeTruthy();

    expect("jung" in obj).toBeFalsy();
    expect("27" in obj).toBeFalsy();
    expect("hello" in obj).toBeFalsy();
});

test("in operator find index", () => {
    let list = ["hi", "hello", "bye"];

    expect(0 in list).toBeTruthy();
    expect(1 in list).toBeTruthy();
    expect(2 in list).toBeTruthy();

    expect(3 in list).toBeFalsy();
    expect(-1 in list).toBeFalsy();
    expect("hi" in list).toBeFalsy();
    expect("hello" in list).toBeFalsy();
    expect("bye" in list).toBeFalsy();
});

test("instanceof compare Object Type", () => {
   let a = "string";
   expect(a instanceof String).toBeFalsy();

   let b = new String("string");
   expect(b instanceof String).toBeTruthy();
});