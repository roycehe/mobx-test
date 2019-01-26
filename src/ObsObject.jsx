import { observable, autorun, action } from "mobx";

var person = observable({

  name: 'john',
  age: 34,
  showAge: false,

  //计算属性
  get labelText() {
    return this.showAge ? `${this.name}(age:${this.age})` : this.name
  }

   setAge(age) {
    this.age = age;
  }
}, {
    setAge: action
  });
