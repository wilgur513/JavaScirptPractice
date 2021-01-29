test("function definition", () => {
    function func1(num) {
        return num * num;
    }

    expect(func1(10)).toBe(100);
});

test("function expression can define anonymous function", () => {
    let myFunc = function(num) {
        return num * num;
    }

    expect(myFunc(10)).toBe(100);
});

test("function expression can define named function but can use recursively", () => {
    let factorial = function fac(num) {
        return num == 1 ? 1 : num * fac(num - 1);
    }

    expect(factorial(5)).toBe(120);
    expect(() => fac(5)).toThrowError(ReferenceError);
});

test("function can be argument", () => {
   let arg = function() {
       return 1;
   }

   function func(arg) {
       expect(arg()).toBe(1);
   }

   func(arg);
});

test("function can hoisting", () => {
    let func;
    expect(func).toBeUndefined();
    func = function() {}
    expect(func).not.toBeUndefined();
});

test("outsider function can not access inner function", () => {
    function out(){
        function inside(){
            var a = 1;
            let b = 2;
        }

        expect(() => a).toThrowError(ReferenceError);
        expect(() => b).toThrowError(ReferenceError);
    }

    expect(() => inside()).toThrowError(ReferenceError);
    out();
});

test("inside function ca access outside function", () => {
    function out(){
        let a = 1;

        function inside(){
            expect(a).toBe(1);
        }

        inside();
    }

    out();
});

test("function can recursively call by function name", () => {
    function loop(num){
        return num == 1 ? 1 : num + loop(num - 1);
    }

    expect(loop(5)).toBe(15);
});

test("function can recursively call by argument calle", () => {
    function loop(num){
        return num == 1 ? 1 : num + arguments.callee(num - 1);
    }

    expect(loop(5)).toBe(15);
});

test("function can recursively call by function expression variable", () => {
   let func = function loop(num) {
       return num == 1 ? 1 : num + func(num - 1);
   }

   expect(func(5)).toBe(15);
});

test("function can be return", () => {
    function func(value){
        function inner(){
            return value;
        }

        return inner;
    }

    let f = func(1);
    expect(f()).toBe(1);
    expect(func(1)()).toBe(1);
});

test("inside function has more precedence when invoke name conflict", () => {
    function out(){
        let a = 1;

        function inside1(){
            let a = 2;

            function inside2(){
                expect(a).toBe(2);
            }

            inside2();
        }

        inside1();
    }

    out();
});

test("closure maintain outside function variables", () => {
    function create(name) {
        let age;

        return {
            getName : function(){
                return name;
            },
            setAge : function(newAge){
                age = newAge;
            },
            getAge : function(){
                return age;
            }
        }
    }

    let obj = create("Jung");
    expect(obj.name).toBeUndefined();
    expect(obj.getName()).toBe("Jung");
    expect(obj.age).toBeUndefined();
    expect(obj.getAge()).toBeUndefined();

    obj.setAge(10);
    expect(obj.age).toBeUndefined();
    expect(obj.getAge()).toBe(10);
});

test("function's argument can access by arguments(it's like array, not array)", () => {
    function func() {
        expect(arguments.length).toBe(4);
        for(let i in arguments){
            expect(arguments[i]).toBe(parseInt(i) + 1); // i is string
        }
    }

    func(1, 2, 3, 4);
});

test("function can use default parameters", () => {
    function func(a, b = 1){
        expect(a).toBeUndefined();
        expect(b).not.toBeUndefined();
        expect(b).toBe(1);
    }

    func();
});

test("function can use rest parameters", () => {
    function func(a, ...rest){
        return rest.map((e) => a * e);
    }

    let result = func(2, 1, 2, 3, 4);
    let expected = [2, 4, 6, 8];

    for(let i in result){
        expect(result[i]).toBe(expected[i]);
    }
});