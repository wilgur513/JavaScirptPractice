describe("create array", () => {
    test("basically create array", () => {
        let arr1 = new Array("a", "b", "c");
        let arr2 = Array("a", "b", "c");
        let arr3 = ["a", "b", "c"];

        for(let i in arr1){
            expect(arr2[i]).toBe(arr1[i]);
            expect(arr3[i]).toBe(arr1[i]);
        }
    });

    test("create non-zero length array, but without elements", () => {
        let arr1 = new Array(10);
        let arr2 = Array(10);
        let arr3 = [];
        arr3.length = 10;

        expect(arr1.length).toBe(10);
        expect(arr2.length).toBe(10);
        expect(arr3.length).toBe(10);

        for(let i = 0; i < 10; i++){
            expect(arr1[i]).toBeUndefined();
            expect(arr2[i]).toBeUndefined();
            expect(arr3[i]).toBeUndefined();
        }
    });

    test("when create non-zero length array(without elements), must use Number", () => {
        let arr1 = new Array("10");
        let arr2 = Array("10");
        let arr3 = [];
        arr3.length = "10";

        expect(arr1.length).toBe(1);
        expect(arr1[0]).toBe("10");

        expect(arr2.length).toBe(1);
        expect(arr2[0]).toBe("10");

        expect(arr3.length).toBe(10);
        for(let i in arr3){
            expect(arr3[i]).toBeUndefined();
        }
    });

    test("when create just one Number element array, use array literals", () => {
        let arr1 = [42];
        let arr2 = new Array(42);

        expect(arr1.length).toBe(1);
        expect(arr1[0]).toBe(42);

        expect(arr2.length).toBe(42);
    });

    test("when array length is not integer, throw RangeError", () => {
        expect(() => Array(4.2)).toThrowError(RangeError);
        expect(() => new Array(4.2)).toThrowError(RangeError);
    });

    test("Array.of() create array that has one element", () => {
        let arr = Array.of(42);
        expect(arr.length).toBe(1);
        expect(arr[0]).toBe(42);
    })

    test("create multi-dimension array", () => {
        let arrays = new Array(4);
        for(let i in arrays){
            arrays[i] = [i];
        }

        expect(arrays.length).toBe(4);
        for(let i in arrays){
            expect(arrays[i].length).toBe(1);
            expect(arrays[i][0]).toBe(i);
        }
    });
});

describe("manipulate array object", () => {
    let arr;

    beforeEach(() => {
        arr = ["hi", "hello", "bye"];
    })

    test("refer array element using index", () => {
        expect(arr[0]).toBe("hi");
        expect(arr[1]).toBe("hello");
        expect(arr[2]).toBe("bye");
    });

    test("array's property can referred using property accessor", () => {
        arr.say = "good";
        expect(arr["length"]).toBe(3);
        expect(arr["say"]).toBe("good");
    });

    test("simple way populate element to array", () => {
        let arr = [];
        arr[0] = "a";
        arr[1] = "b";
        arr[2] = "c";

        expect(arr[0]).toBe("a");
        expect(arr[1]).toBe("b");
        expect(arr[2]).toBe("c");
    });

    test("add property to array using property accessor", () => {
        let arr = [];
        arr[4.2] = "Four.Two";

        expect(arr.length).toBe(0);
        expect(arr.hasOwnProperty(4.2)).toBeTruthy();
        expect(arr[4.2]).toBe("Four.Two");
    });

    test("length is always one more than the highest index", () => {
        let arr = [];
        arr[40] = "Forty";

        expect(arr.length).toBe(41);
    });

    test("manipulate length will occur remove element of array", () => {
       arr.length = 2;
       expect(arr.toString()).toBe(["hi", "hello"].toString());

       arr.length = 1;
       expect(arr.toString()).toBe(["hi"].toString());

       arr.length = 0;
       expect(arr.toString()).toBe([].toString());
    });

    test("iterate array using simple for statement", () => {
        let actual = ["hi", "hello", "bye"];

        for(let i = 0; i < arr.length; i++){
            expect(arr[i]).toBe(actual[i]);
        }
    });
});

describe("using array method", () => {
    let arr;

    beforeEach(() => {
        arr = ["1", "2", "3", "4", "5"];
    })

    test("concat return combined new array", () => {
        let other = ["a", "b", "c"];
        let expected = arr.concat(other);

        expect(expected.toString()).toBe(["1", "2", "3", "4", "5", "a", "b", "c"].toString());
        expect(arr.toString()).toBe(["1", "2", "3", "4", "5"].toString());
        expect(other.toString()).toBe(["a", "b", "c"].toString());
    });

    test("join return all elements to string", () => {
        let expected = arr.join("-");
        expect(expected).toBe("1-2-3-4-5");
    });

    test("join empty element(blank, undefined, null)", () => {
        let arr = ["1", ,undefined, null, "2", "3"];
        let expected = arr.join("-");

        expect(expected).toBe("1----2-3")
    });

    test("push element to array", () => {
        arr.push("6");
        expect(arr.toString()).toBe(["1", "2", "3", "4", "5", "6"].toString());
    });

    test("pop element from array", () => {
       let value = arr.pop();
       expect(value).toBe("5");
       expect(arr.toString()).toBe(["1", "2", "3", "4"].toString());
    });

    test("shift removes the first element from an array and returns that element", () => {
       let value = arr.shift();
       expect(value).toBe("1");
       expect(arr.toString()).toBe(["2", "3", "4", "5"].toString());
    });

    test("unshift adds elements to the front and returns array length", () => {
        let newLength = arr.unshift("a", "b");
        expect(newLength).toBe(7);
        expect(arr.toString()).toBe(["a", "b", "1", "2", "3", "4", "5"].toString());
    });

    test("slice return extracted new array", () => {
        let newArray = arr.slice(1, 3);
        expect(newArray.toString()).toBe(["2", "3"].toString());
    });

    test("splice remove elements and add new elements", () => {
        arr.splice(1, 3, "a", "b", "c", "d");
        expect(arr.toString()).toBe(["1", "a", "b", "c", "d", "5"].toString());
    });

    test("reverse array", () => {
        let referenceOfArray = arr.reverse();
        expect(referenceOfArray.toString()).toBe(["5", "4", "3", "2", "1"].toString());
        expect(arr.toString()).toBe(["5", "4", "3", "2", "1"].toString());
    });

    test("sort array", () => {
        let arr = ["Wind", "Rain", "Fire"];
        let referenceOfArray = arr.sort();
        expect(referenceOfArray.toString()).toBe(["Fire", "Rain", "Wind"].toString());
        expect(arr.toString()).toBe(["Fire", "Rain", "Wind"].toString());
    });

    test("sort using callback", () => {
        let arr = ["abcd", "qwerty", "abc"];
        arr.sort((a, b) => a.length < b.length ? -1 : (a.length == b.length ? 0 : 1));
        expect(arr.toString()).toBe(["abc", "abcd", "qwerty"].toString());
    });

    test("indexOf find first index of searching element", () => {
        let arr = ["1", "2", "2", "2"];
        expect(arr.indexOf("2")).toBe(1);
        expect(arr.indexOf("3")).toBe(-1);
    });

    test("lastIndexOf find last index of searching element", () => {
        let arr = ["1", "2", "1", "2"];
        expect(arr.lastIndexOf("1")).toBe(2);
        expect(arr.lastIndexOf("3")).toBe(-1);
    });

    test("iterate array using forEach method", () => {
        let actual = ["1", "2", "3", "4", "5"];
        let index = 0;

        arr.forEach((a) => expect(a).toBe(actual[index++]));
    });

    test("forEach method is not iterate unassigned value", () => {
        let arr = ["a", , null, , , , undefined, NaN, "b"];
        let actual = ["a", null, undefined, NaN, "b"];
        let index = 0;

        arr.forEach((a) => expect(a).toBe(actual[index++]));
    });

    test("map returns a new array from executing callback every item", () => {
        let arr = ["a", "b", "c"];
        let newArr = arr.map(a => a.toUpperCase());

        expect(arr.toString()).toBe(["a", "b", "c"].toString());
        expect(newArr.toString()).toBe(["A", "B", "C"].toString());
    });

    test("filter returns a new array containing the items for which callback returned true", () => {
        let newArr = arr.filter(a => a > 3);

        expect(arr.toString()).toBe(["1", "2", "3", "4", "5"].toString());
        expect(newArr.toString()).toBe(["4", "5"].toString());
    });

    test("returns true if callback returns true for every item in the array", () => {
        expect(arr.every(a => typeof a === "string")).toBeTruthy();
        expect(arr.every(a => a > 2)).toBeFalsy();
    });

    test("some returns true if callback returns true for at least one item in the array", () => {
        expect(arr.some(a => a == 4)).toBeTruthy();
        expect(arr.some(a => a == 10)).toBeFalsy();
    });

    test("reduce applies callback for each element and reduce to a single value", () => {
        let arr = [1, 2, 3, 4, 5];
        expect(arr.reduce((a, b) => (a + b))).toBe(15);
    });

    test("reduce can specific initial value", () => {
        let arr = [1, 2, 3, 4, 5];
        expect(arr.reduce((a, b) => (a + b), "")).toBe("12345");
    });

    test("reduceRight start last element", () => {
        expect(arr.reduceRight((a, b) => a + b)).toBe("54321");
    });
});

describe("using array method to array like object", () => {
    test("function arguments can not use forEach", () => {
        function func(){
            arguments.forEach(a => a);
        }
        expect(() => func()).toThrowError(TypeError);
    });

    test("array like object can use forEach indirectly using Function.prototype.call()", () => {
        function func(){
            let actual = [1, 2, 3]
            let i = 0;
            Array.prototype.forEach.call(arguments, a => expect(a).toBe(actual[i++]));
        }

        func(1, 2, 3);

        let str = "abcd";
        let newStr = Array.prototype.map.call(str, (a) => a.toUpperCase());
        expect(newStr.reduce((a, b) => a + b)).toBe("ABCD");
    });
})