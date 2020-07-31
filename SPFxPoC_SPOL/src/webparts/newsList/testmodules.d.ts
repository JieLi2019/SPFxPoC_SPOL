declare module "testModuleOne" {
  interface ITestModuleOne {
    say(text: string): void;
    sayHello(name: string): void;
    sayHi(name: string): string;
  }
  var testModuleOne: ITestModuleOne;
  export = testModuleOne;
}


declare module 'configEditor' {
  import { IPropertyPaneGroup } from '@microsoft/sp-webpart-base';

  class ConfigEditor {
    sayHi(name: string): string;

    getConfigurationOptions(configurationJson: string, baseGroupName: string): IPropertyPaneGroup;
  }
}
