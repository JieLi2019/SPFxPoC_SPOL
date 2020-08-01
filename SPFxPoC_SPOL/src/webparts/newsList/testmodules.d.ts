declare module "testModuleOne" {
  interface ITestModuleOne {
    say(text: string): void;
    sayHello(name: string): void;
    sayHi(name: string): string;
  }
  var testModuleOne: ITestModuleOne;
  export = testModuleOne;
}
