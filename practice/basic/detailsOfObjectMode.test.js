describe('object modeling', () => {
  describe('employee hierarchy', () => {
    function Employee(name) {
      this.name = name;
      this.dept = 'general';
    }

    function Manager(name, reports) {
      this.name = name || 'default';
      this.reports = reports || ['a', 'b'];
    }

    function WorkerBee(name, projects) {
      Employee.call(this, name);
      this.projects = projects;
    }

    WorkerBee.prototype = Object.create(Employee.prototype);
    WorkerBee.prototype.constructor = WorkerBee;

    function SalesPerson(projects) {
      WorkerBee.call(this, projects);
      this.dept = 'sales';
      this.quota = 100;
    }

    SalesPerson.prototype = Object.create(WorkerBee);
    SalesPerson.prototype.constructor = SalesPerson;

    let mark;

    beforeEach(() => {
      mark = new WorkerBee('mark', ['a', 'b']);
    });

    test('find property using prototype', () => {
      expect(mark.name).toBe('mark');
      expect(mark.dept).toBe('general');
      expect(mark.projects.toString()).toBe(['a', 'b'].toString());
      expect(mark.value).toBeUndefined();
    });

    test('add property only one instance', () => {
      mark.value = 100;
      expect(mark.value).toBe(100);
      expect(new WorkerBee('jim', ['a', 'b']).value).toBeUndefined();
    });

    test('add property to prototype', () => {
      Employee.prototype.value = 100;
      expect(mark.value).toBe(100);
      delete Employee.prototype.value;
    });

    test('using more flexible constructor', () => {
      const manager1 = new Manager();
      expect(manager1.name).toBe('default');
      expect(manager1.reports.toString()).toBe(['a', 'b'].toString());

      const manager2 = new Manager('');
      expect(manager2.name).toBe('default');

      const manager3 = new Manager('jim');
      expect(manager3.name).toBe('jim');
      expect(manager3.reports.toString()).toBe(['a', 'b'].toString());

      const manager4 = new Manager('jim', ['a']);
      expect(manager4.name).toBe('jim');
      expect(manager4.reports.toString()).toBe(['a'].toString());
    });
  });

  describe('using class keyword', () => {
    const weakMap = new WeakMap();

    class Employee {
      constructor(name) {
        this.name = name;
        this.age = 27;
        weakMap.set(this, { city: 'Seoul' });
      }

      get getName() {
        return this.name;
      }

      set setAge(age) {
        this.age = age;
      }

      get getCity() {
        return weakMap.get(this).city;
      }
    }

    test('create object using class', () => {
      const mark = new Employee('mark');
      expect(mark.name).toBe('mark');
      expect(mark.getName).toBe('mark');
    });

    test('setter', () => {
      const mark = new Employee('mark');
      expect(mark.age).toBe(27);
      mark.setAge = 30;
      expect(mark.age).toBe(30);
    });

    test('private field', () => {
      const mark = new Employee('mark');
      expect(mark.city).toBeUndefined();
      expect(mark.getCity).toBe('Seoul');
    });
  });
});
