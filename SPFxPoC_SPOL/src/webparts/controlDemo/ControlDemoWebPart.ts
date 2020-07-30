import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  IPropertyPaneGroup,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneToggle,
  PropertyPaneButton,
  PropertyPaneButtonType,
  PropertyPaneChoiceGroup,
  PropertyPaneHorizontalRule
} from '@microsoft/sp-property-pane';

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ControlDemoWebPartStrings';
import ControlDemo from './components/ControlDemo';
import { IControlDemoProps } from './components/IControlDemoProps';

// PnP controls
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';


export interface IControlDemoWebPartProps {
  description: string;
  isEditing: boolean;
  toggleConfiguration: boolean;
  backgroundColor: string;
  testTextarea: string;
  testCheckbox: boolean;
  testToggle: boolean;
  testDropdown: string;
  testButton: string;
  testChoiceGroups: string;
}

export default class ControlDemoWebPart extends BaseClientSideWebPart <IControlDemoWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IControlDemoProps> = React.createElement(
      ControlDemo,
      {
        description: this.properties.description,
        isEditing: this.properties.isEditing,
        toggleConfiguration: this.properties.toggleConfiguration,
        backgroundColor: this.properties.backgroundColor,
        testTextarea: this.properties.testTextarea,
        testCheckbox: this.properties.testCheckbox,
        testToggle: this.properties.testToggle,
        testDropdown: this.properties.testDropdown,
        testButton: this.properties.testButton,
        testChoiceGroups: this.properties.testChoiceGroups,
        clickHandler: this.buttonClick
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

    let propertiesGroup: IPropertyPaneGroup = {
      groupName: strings.BasicGroupName,
      groupFields: [
        PropertyPaneTextField('description', {
          label: strings.DescriptionFieldLabel
        }),
        PropertyPaneHorizontalRule(),
        PropertyFieldColorPicker('backgroundColor', {
          label: 'Background color',
          selectedColor: this.properties.backgroundColor,
          onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
          properties: this.properties,
          disabled: false,
          alphaSliderHidden: false,
          style: PropertyFieldColorPickerStyle.Full,
          iconName: 'Precipitation',
          key: 'backgroundColorFieldId'
        }),
        PropertyPaneHorizontalRule(),
        PropertyPaneTextField('testTextarea', {
          label: 'Multi-line Text Field',
          multiline: true
        }),
        PropertyPaneHorizontalRule(),
        PropertyPaneCheckbox('testCheckbox', {
          text: 'Checkbox'
        }),
        PropertyPaneHorizontalRule(),
        PropertyPaneDropdown('testDropdown', {
          label: 'Dropdown',
          options: [
            { key: 'One', text: 'One' },
            { key: 'Two', text: 'Two' },
            { key: 'Three', text: 'Three' },
            { key: 'Four', text: 'Four' }
          ]
        }),
        PropertyPaneHorizontalRule(),
        PropertyPaneToggle('testToggle', {
          label: 'Toggle',
          onText: 'On',
          offText: 'Off'
        }),
        PropertyPaneHorizontalRule(),
        PropertyPaneChoiceGroup('testChoiceGroups', {
          label: 'ChoiceGroups',
          options: [
            { key: 'dotnet', text: 'dotnet' },
            { key: 'sharepoint', text: 'sharepoint' },
            { key: 'java', text: 'java' }
          ]
        }),
        PropertyPaneHorizontalRule(),
        PropertyPaneButton('testButton', {
          text: 'Click Here',
          buttonType: PropertyPaneButtonType.Normal,
          onClick: this.myButtonClick.bind(this)
        }),
        PropertyPaneHorizontalRule(),
        PropertyPaneButton('primaryButton', {
          text: "Primary button",
          buttonType: PropertyPaneButtonType.Primary,
          onClick: this.myButtonClick.bind(this)
        }),
        PropertyPaneHorizontalRule(),
        PropertyPaneButton('heroButton', {
          text: "Hero button",
          buttonType: PropertyPaneButtonType.Hero,
          icon: 'Add',
          onClick: this.myButtonClick.bind(this),
        }),
        PropertyPaneHorizontalRule(),
        PropertyPaneButton('commandButton', {
          text: "Command button",
          buttonType: PropertyPaneButtonType.Command,
          onClick: this.myButtonClick.bind(this),
        }),
        PropertyPaneHorizontalRule(),
        PropertyPaneButton('compoundButton', {
          text: "Compound button",
          buttonType: PropertyPaneButtonType.Compound,
          description: 'With some descriptive text',
          onClick: this.myButtonClick.bind(this),
        }),
        PropertyPaneHorizontalRule(),
        PropertyPaneButton('iconButton', {
          text: "Icon button",
          buttonType: PropertyPaneButtonType.Icon,
          icon: 'AddFriend',
          onClick: this.myButtonClick.bind(this)
        })
      ]
    };

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

      // force to refresh webpart
      if (propertyPath === 'backgroundColor' && newValue) {
        this.properties.backgroundColor = newValue;
        this.render();
      }
    }
  }


  protected buttonClick(): void {
    console.log('******************* On Page Button Click!!!  *********************');
  }

  protected myButtonClick(): any {
    console.log('******************* On My Button Click!!!  *********************');
  }
}
