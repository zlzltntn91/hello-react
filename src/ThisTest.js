let age = 123;


const hard = {
  name : 'eunsoo',
  age : 31,
  sayMyName() {
    console.log(this.name);
    let inner = () => {
      let name = "ttttt";
      console.log(this.name);
      console.log(name);
    }
    inner();
    return this.name;
  }
}

hard.sayMyName();
