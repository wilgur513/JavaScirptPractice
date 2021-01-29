describe("simple map test", () => {
    let map;

    beforeEach(() => {
        map = new Map();
        map.set("dog", "wolf");
        map.set("cat", "meow");
    });

    test("map size", () => {
        expect(map.size).toBe(2);
    });

    test("get value by key", () => {
        expect(map.get("dog")).toBe("wolf");
        expect(map.get("cat")).toBe("meow");
    });

    test("has can find exist key in map", () => {
        expect(map.has("dog")).toBeTruthy();
        expect(map.has("wolf")).toBeFalsy();
    });

    test("delete value", () => {
        map.delete("dog");
        expect(map.has("dog")).toBeFalsy();
        expect(map.size).toBe(1);
    });

    test("map can iterate using by for ...of and sorted by input order", () => {
        let actualKey = ["dog", "cat"];
        let actualValue = ["wolf", "meow"];
        let index = 0;

        for(let [key, value] of map){
            expect(key).toBe(actualKey[index]);
            expect(value).toBe(actualValue[index++]);
        }
    });

    test("map can not iterate using by for ...in", () => {
        for(let key in map){
            fail();
        }
    });

    test("clear all element", () => {
        map.clear();
        expect(map.size).toBe(0);
    });

    test("can use object key", () => {
        let object = new String("dog");
        map.set(object, "value");
        expect(map.get(object)).toBe("value");
    });
});

describe("weakMap test", () => {
    let weakMap;
    let object;
    beforeEach(() => {
        weakMap = new WeakMap();
        object = new String("key");
        weakMap.set(object, "value");
    });

    test("weakMap only use object key", () => {
        expect(() => {weakMap.set("key", "value")}).toThrowError(TypeError);
        expect(weakMap.get(object)).toBe("value");
    });

    test("weakMap use must same object to get value", () => {
        expect(weakMap.get(new String("key"))).toBeUndefined();
    });
});

describe("simple set test", () => {
    let set;

    beforeEach(() => {
        set = new Set();
        set.add("value");
    })

    test("set has distinct values", () => {
        set.add("value");
        set.add("value");
        set.add("value");

        expect(set.size).toBe(1);
    });

    test("has can find exist value", () => {
        expect(set.has("value")).toBeTruthy();
        expect(set.has("key")).toBeFalsy();
    });

    test("delete set", () => {
        set.delete("value");
        expect(set.size).toBe(0);
    });

    test("set can iterate using by for ...of and sorted by input order", () => {
        set.add("key")
        let actualValue = ["value", "key"];
        let index = 0;

        for(let value of set){
            expect(value).toBe(actualValue[index++]);
        }
    });

    test("set can not iterate using by for ...in", () => {
        for(let i in set){
            fail();
        }
    });

    test("create set from array", () => {
        let array = [1, 2, 3, 4, 1, 2, 3];
        let set = new Set(array);
        let actualValues = [1, 2, 3, 4];
        let index = 0;

        expect(set.size).toBe(4);
        for(let value of set){
            expect(value).toBe(actualValues[index++]);
        }
        expect(index).toBe(4);
    });

    test("create array from set", () => {
        set.add(1);
        set.add(2);
        let expectedArray = Array.from(set);
        let actualArray = ["value", 1, 2];

        expect(expectedArray.toString()).toBe(actualArray.toString());
    });
});
