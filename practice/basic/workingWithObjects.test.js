describe("object test", () => {
    let myCar;

    beforeEach(() => {
        myCar = {make : "Ford", model : "Mustang", year : 1995};
    })

    test("object can add property", () => {
        let myCar = new Object();
        myCar.make = "Ford";
        myCar.model = "Mustang";

        expect(myCar.make).toBe("Ford");
        expect(myCar.model).toBe("Mustang");
        expect(myCar.name).toBeUndefined();
    });

    test("literal can not add property or method", () => {
        let value = 1;
        value.v = 2;
        expect(value.v).toBeUndefined();

        let str = "hello";
        str.say = () => "hi";
        expect(() => str.say()).toThrowError(TypeError);
    });

    test("object initializer", () => {
        let myCar = {make : "Ford", model : "Mustang"};

        expect(myCar.make).toBe("Ford");
        expect(myCar.model).toBe("Mustang");
    });

    test("object can use bracket property accessor", () => {
        let myCar = new Object();
        myCar["make"] = "Ford";
        myCar["model"] = "Mustang";

        expect(myCar.make).toBe("Ford");
        expect(myCar["model"]).toBe("Mustang");
    });

    test("when use bracket property accessor, property name can be valid string", () => {
        let myCar = new Object();
        myCar["m a k e"] = "Ford";
        myCar["m-o-d-e-l;"] = "Mustang";

        expect(myCar["m a k e"]).toBe("Ford");
        expect(myCar["m-o-d-e-l;"]).toBe("Mustang");
    });

    test("object property can be iterated by for ...in", () => {
        let actual = ["Ford", "Mustang", 1995];
        let index = 0;

        for(let i in myCar){
            expect(myCar[i]).toBe(actual[index++]);
        }
        expect(index).toBe(3);
    });

    test("object can not be iterable using for ...of", () => {
        expect(() => {
            for(let value of myCar){}
        }).toThrowError(TypeError);
    });

    test("Object.keys return property name list that is object itself property(not prototype property)", () => {
        let properties = Object.keys(myCar);
        let actual = ["make", "model", "year"];

        expect(properties.toString()).toBe(actual.toString());
    });

    test("when object created by object literal, type is Object", () => {
        let object = {name : "jung"};
        expect(object).toBeInstanceOf(Object);
    });

    test("object be created by constructor function", () => {
        function Car(make, model, year){
            this.make = make;
            this.model = model;
            this.year = year;
        }

        let myCar = new Car("Ford", "Mustang", 1995);
        expect(myCar.make).toBe("Ford");
        expect(myCar.model).toBe("Mustang");
        expect(myCar.year).toBe(1995);
    });

    function Person(name){
        this.name = name;
    }

    function Car(make, model, year, owner){
        this.make = make;
        this.model = model;
        this.year = year;
        this.owner = owner;
    }

    test("composite objects", () => {
        let person = new Person("jung");
        let myCar = new Car("Ford", "Mustang", 1995, person);

        expect(myCar.make).toBe("Ford");
        expect(myCar.model).toBe("Mustang");
        expect(myCar.year).toBe(1995);
        expect(myCar.owner.name).toBe("jung");
    });

    test("add property to composited object", () => {
        let person = new Person("jung");
        let myCar = new Car("Ford", "Mustang", 1995, person);
        person.age = 27;

        expect(myCar.owner.age).toBe(27);
    });

    test("object using constructor function can be function name type", () => {
        let object = {};
        let car = new Car("","","");

        expect(object).not.toBeInstanceOf(Car);
        expect(car).toBeInstanceOf(Object);
        expect(car).toBeInstanceOf(Car);
    });

    test("object can be created by Object.create", () => {
        let Car = {make : "Ford", year : 1995};
        let newCar = Object.create(Car);

        expect(newCar.make).toBe("Ford");
        expect(newCar.year).toBe(1995);
        expect(newCar).toBeInstanceOf(Object);
    });

    test("define method using object initializer", () => {
        let person = {
            name : "jung",
            say : function() {
                return "hi";
            },
            hello(){
                return "hello";
            }
        }

        expect(person.say()).toBe("hi");
        expect(person.hello()).toBe("hello");
    });

    test("define method using constructor function", () => {
        function Person(){
            this.say = function(){
                return "hi";
            };
        }

        let person = new Person();
        expect(person.say()).toBe("hi");
    });

    test("can access object's value using this", () => {
        let person = {
            name : "jung",
            getName : function(){
                return name;
            },
            getThisName : function(){
                return this.name;
            }
        }

        expect(person.getName()).toBe("");
        expect(person.getThisName()).toBe("jung");
    });

    test("getter and setter define", () => {
        let person = {
            name : "",
            set setName(name){
                this.name = name;
            },
            get getName(){
                return this.name + " hi";
            }
        }

        person.setName = "jung";
        expect(person.getName).toBe("jung hi");
    });

    test("getter and setter can be added dynamically", () => {
        let o = {name : ""};
        Object.defineProperties(o, {
            setName : {
                set : function(name){
                    this.name = name;
                }
            },
            getName : {
                get : function(){
                    return this.name + " hi";
                }
            }
        });

        o.setName = "jung";
        expect(o.getName).toBe("jung hi");
    });

    test("delete object property", () => {
        let o = {name : "jung"};
        delete o.name;
        expect(o.name).toBeUndefined();
        expect("name" in o).toBeFalsy();
    });

    test("comparing objects", () => {
        let o1 = {name : "jung"};
        let o2 = {name : "jung"};
        let o3 = o1;

        expect(o1 == o2).toBeFalsy();
        expect(o1 === o2).toBeFalsy();
        expect(o1 == o3).toBeTruthy();
        expect(o1 === o3).toBeTruthy();
        o1.name = "lee";
        expect(o3.name).toBe("lee");
    });
});
