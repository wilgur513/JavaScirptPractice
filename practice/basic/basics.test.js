test("var and let are basically initialized undefined", () => {
    var a;
    expect(a).toBeUndefined();

    let b;
    expect(b).toBeUndefined();
});

test("var can hoisting", () =>{
    expect(a).toBeUndefined();
    var a = 10;
    expect(a).toBe(10);
});

test("let and const can't hoisting", () =>{
    expect(() => a).toThrowError(ReferenceError);
    expect(() => B).toThrowError(ReferenceError);

    let a;
    const B = 1;
});

test("value can compare with undefined", () => {
    var a;
    expect(a === undefined).toBeTruthy();

    var b = 10;
    expect(b === undefined).toBeFalsy();
});

test("undefined is false when using in boolean context", () => {
   let a;
   expect(a).toBeFalsy();
});

test("undefined + number = NaN", () => {
    let a;
    expect(a + 2).toBeNaN();
});

test("null is zero when using in numeric operator", () => {
    let a = null;

    expect(a + 1).toBe(1);
    expect(a - 232).toBe(-232);
    expect(a * 10).toBe(0);
    expect(a / 23).toBe(0);
});

test("var has global scope(or function scope)", () => {
    if(true){
        var a = 10;
    }

    expect(a).toBe(10);
});

test("let and const have local scope", () => {
    if(true){
        let a = 10;
        const B = 20;
    }

    expect(() => a).toThrowError(ReferenceError);
    expect(() => B).toThrowError(ReferenceError);
});

test("function declare can hoisting", () => {
    expect(func()).toBe(1);

    function func(){
        return 1;
    }
});

test("function expression can't hoisting", () => {
    expect(() => f1()).toThrowError(TypeError);
    var f1 = function func(){}
});

test("const can change content", () => {
    const MY_ARRAY = [1, 1, 1];
    MY_ARRAY[0] = 2;
    MY_ARRAY[1] = 10;

    expect(MY_ARRAY[0]).toBe(2);
    expect(MY_ARRAY[1]).toBe(10);
    expect(MY_ARRAY[2]).toBe(1);
});

test("typeof null === 'object'", () => {
    expect(typeof null).toBe('object');
});

test("can assign vary type value to variable", () => {
    let value = 1;
    expect(typeof value).toBe('number');

    value = "hello";
    expect(typeof value).toBe('string');

    value = true;
    expect(typeof value).toBe('boolean');
});

test("string + number = string", () => {
   expect("hello " + 12345).toBe("hello 12345");
});

test("string - number = number", () => {
    expect("123" - 23).toBe(100);
    expect("string" - 123).toBeNaN();

    expect("12" * 12).toBe(144);
    expect("string" * 12).toBeNaN();
});

test("string can convert number when using parseInt or parseFloat", () => {
    expect(parseInt('123')).toBe(123);
    expect(typeof parseInt('123')).toBe('number');
    expect(parseInt('1234.6')).toBe(1234);
    expect(typeof parseInt('1234.6')).toBe('number');

    expect(parseFloat('123.5667')).toBe(123.5667);
    expect(typeof parseFloat('123.5667')).toBe('number');

    expect(parseInt('101', 2)).toBe(5);
    expect(parseInt('11', 8)).toBe(9);
    expect(parseInt('A', 16)).toBe(10);
});

test("convert string to number not using parseInt", () => {
   expect(typeof + '123465').toBe('number');
});

test("array literals is Array object", () => {
   let list = ["", "", ""];
   expect(list).toBeInstanceOf(Array);
});

test("array's element is basically initialized undefined", () => {
    let list = ["a", ,"b"];

    expect(list.length).toBe(3);
    expect(list[0]).toBe("a");
    expect(list[1]).toBeUndefined();
    expect(list[2]).toBe("b");
});

test("array's last comma is ignored", () => {
   let list = ["a", "b", "c", ,];
   expect(list.length).toBe(4);

   list = ["a", "b", , ,];
   expect(list.length).toBe(4);

   list = ["a", "b", , , undefined];
   expect(list.length).toBe(5);
});

test("radix number", () => {
    expect(12).toBe(12); // decimal
    expect(0o11).toBe(9) // octal
    expect(0x11).toBe(17) // hex
});

test("float literals", () => {
    expect(-.1234).toBe(-0.1234);
    expect(3.2E3).toBe(3200);
    expect(321.4E-4).toBe(0.03214);
    expect(.6435423).toBe(0.6435423);
});

test("object literals", () => {
   let sales = "Toyota";

   function carType(name){
       if(name === "Honda"){
           return name;
       }

       return "Not Honda";
   }

   let car = {myCar : "Saturn", getType : carType("Honda"), special : sales};
   expect(car.myCar).toBe("Saturn");
   expect(car.getType).toBe("Honda");
   expect(car["special"]).toBe("Toyota");

   car = {myCar : {a : "Honda", b : "BMW"}, 7 : "seven", "string" : "Hello"};

   expect(car.myCar["a"]).toBe("Honda");
   expect(car.myCar.b).toBe("BMW");
   expect(car[7]).toBe("seven");
   expect(car["7"]).toBe("seven");
   expect(car.string).toBe("Hello");
   expect(car["string"]).toBe("Hello");
});

test("object literals can throw Syntax Error", () => {
    let obj = {'' : "empty", "!" : "Bang!"};

    expect(obj[""]).toBe("empty");
    // expect(obj."").toBe("empty"); -> Syntax Error

    expect(obj["!"]).toBe("Bang!");
    // expect(obj."!").toBe("Bang!"); -> Syntax Error
});

test("template string", () => {
    let name = "lee";
    let age = 27;
    let str = `"name" : ${name}, "age" : ${age}`;

    expect(str).toBe('"name" : lee, "age" : 27');
});