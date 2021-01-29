test("var not has block scope", () =>{
    var a = 1;

    {
        var a = 2;
    }

    expect(a).toBe(2);
});

test("let and const has block scope", () => {
    let a = 1;
    const VALUE = 10;

    {
        let a = 2;
        const VALUE = 20;

        expect(a).toBe(2);
        expect(VALUE).toBe(20);
    }

    expect(a).toBe(1);
    expect(VALUE).toBe(10);
});

test("conditional statement falsy values(others are truthy values)", () => {
    expect(false).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(null).toBeFalsy();
    expect(0).toBeFalsy();
    expect(NaN).toBeFalsy();
    expect("").toBeFalsy();
});

test("conditional statement will truthy with object", () => {
    let falsy = new Boolean(false); // object
    expect(falsy).toBeTruthy();
    expect(falsy == true).toBeFalsy();
});

test("switch statement without break", () => {
    let value = "";

    switch (value){
        case "ignore" : {
            value += "ignore ";
        }

        case "" : {
            value += "first ";
        }

        case "anything" : {
            value += "second ";
        }

        case "anything" : {
            value += "third";
        }
    }

    expect(value).toBe("first second third");
})

test("switch statement with break", () => {
    let value = "";

    switch(value) {
        case "": {
            value = "hello";
            break;
        }

        case "anything" : {
            fail();
        }
    }

    expect(value).toBe("hello");
});

test("can throw any object", () => {
   try {
       throw new Boolean(true); // Number Type
   } catch (e) {
       expect(e == true).toBeTruthy();
       expect(e).toBeInstanceOf(Boolean);
   }

   try{
       throw "Error!";
   } catch(e) {
       expect(typeof e).toBe("string");
       expect(e).toBe("Error!");
   }
});

test("finally block always execute", () => {
    let finallyWasRun = false;

    try{

    } catch(e) {
        //ignore
    } finally {
        finallyWasRun = true;
    }

    expect(finallyWasRun).toBeTruthy();
    finallyWasRun = false;

    try{
        throw new Error("Error!");
    }catch (e) {
        //ignore
    } finally {
        finallyWasRun = true;
    }

    expect(finallyWasRun).toBeTruthy();
});

test("finally will execute when catch has return statement ", () => {
    let finallyWasRun = false;
    let catchHasReturn = () => {
        try{
            throw "Error";
        } catch (e) {
            return "Hi";
        } finally {
            finallyWasRun = true;
        }
    }

    catchHasReturn();
    expect(finallyWasRun).toBeTruthy();
});

test("finally will execute when try has return statement ", () => {
    let finallyWasRun = false;
    let tryHasReturn = () => {
        try{
            return "Hi";
        } catch (e) {

        } finally {
            finallyWasRun = true;
        }
    }

    tryHasReturn();
    expect(finallyWasRun).toBeTruthy();
});

test("finally will execute when catch has throw statement", () => {
    finallyWasRun = false;
    let catchHasThrow = () => {
        try{
            throw "Error";
        } catch (e) {
            throw e;
        } finally {
            finallyWasRun = true;
        }
    }

    try {
        catchHasThrow();
    } catch (e) {
        //ignore
    }
    expect(finallyWasRun).toBeTruthy();
});

test("finally can rewrite return statement", () => {
    let finallyAndTryHasReturn = () => {
        try {
            return "ignore";
        } finally {
            return "hi";
        }
    }

    expect(finallyAndTryHasReturn()).toBe("hi");

    let finallyAndCatchHasReturn = () => {
        try{
            throw "Error";
        } catch (e) {
            return  "ignore";
        } finally {
            return "hi";
        }
    }

    expect(finallyAndCatchHasReturn()).toBe("hi");

    let finallyHasReturnCatchHasThrow = () => {
        try{
            throw "Error";
        } catch (e) {
            throw e;
        } finally {
            return "hi";
        }
    }

    expect(finallyHasReturnCatchHasThrow()).toBe("hi");
});

test("using Error Object", () => {
    try{
        throw new Error("My Error!");
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e.name).toBe("Error");
        expect(e.message).toBe("My Error!");
    }
});