test("standard for statement", () => {
    let result = "";
    for(let i = 0; i < 5; i++){
        result += i;
    }
    expect(result).toBe("01234");
});

test("do while statement always first start do statements", () => {
    let wasRun = false;

    do{
        wasRun = true;
    }while(false);

    expect(wasRun).toBeTruthy();
})

test("while statement always first check condition", () => {
    let wasRun = false;

    while(false){
        wasRun = true;
    }

    expect(wasRun).toBeFalsy();
})

test("for in statement with array literals", () => {
    let indexes = "";
    let words = "";
    let list = ["hi ", "hello ", "bye"];

    for(let index in list){
        indexes += index;
        words += list[index];
    }

    expect(indexes).toBe("012");
    expect(words).toBe("hi hello bye");
});

test("for in statement with object", () => {
    let obj = {name : "jung", age : 27};
    let values = "";
    let properties = "";

    for(let property in obj){
        properties += property;
        values += obj[property];
    }

    expect(properties).toBe("nameage");
    expect(values).toBe("jung27");
});

test("for in statement with Array Object return properties too", () => {
    let result = "";
    let arrayList = new Array();
    arrayList.push("1");
    arrayList.push("2");
    arrayList.myFunc = () => {};

    for(let i in arrayList){
        result += i;
    }

    expect(result).toBe("01myFunc");
})

test("for of statement with array literals", () => {
    let result = "";
    let list = [1, 2, 3, 4, 5];

    for(let value of list){
        result += value;
    }

    expect(result).toBe("12345");
});

test("for of statement with string", () => {
    let str = "hello";
    let expected = ["h", "e", "l", "l", "o"];
    let index = 0;

    for(let value of str){
        expect(value).toBe(expected[index++]);
    }
})


