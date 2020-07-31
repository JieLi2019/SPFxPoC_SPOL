import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  IPropertyPaneGroup
} from '@microsoft/sp-property-pane';

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'NewsListWebPartStrings';
import NewsList from './components/NewsList';
import { INewsListProps } from './components/INewsListProps';

import { ConfigEditor } from 'configEditor';

export interface INewsListWebPartProps {
  description: string;
  configurationJson: string;
}

export default class NewsListWebPart extends BaseClientSideWebPart<INewsListWebPartProps> {

  public render(): void {
    const element: React.ReactElement<INewsListProps> = React.createElement(
      NewsList,
      {
        description: this.properties.description,
        configurationJson: this.properties.configurationJson
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    const myConfigEditor = new ConfigEditor();

    let propertiesGroup: IPropertyPaneGroup = myConfigEditor.getConfigurationOptions(this.properties.configurationJson, strings.BasicGroupName);

    propertiesGroup.groupFields.splice(0, 0, PropertyPaneTextField('description', {
      label: strings.DescriptionFieldLabel
    }));

    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [propertiesGroup]
        }
      ]
    };
  }

  protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void {
    if (oldValue != newValue) {
      console.log('path: ' + propertyPath + ', old value: ' + oldValue + ', new value: ' + newValue);

      // generate new JSON string
      // convert JSON to object
      let config = JSON.parse(this.properties.configurationJson);

      Object.keys(config).forEach((key) => {
        if (key == propertyPath) {
          config[key].value = newValue;
        }
      });

      //console.log(config);

      // update this.properties.configurationJSON

      let configString = JSON.stringify(config);

      //console.log(configString);

      this.properties.configurationJson = configString;

    }
  }
}
