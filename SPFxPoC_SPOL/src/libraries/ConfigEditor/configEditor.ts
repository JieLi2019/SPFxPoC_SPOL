import { IPropertyPaneGroup, PropertyPaneCheckbox, PropertyPaneHorizontalRule, PropertyPaneTextField } from '@microsoft/sp-webpart-base';

export class ConfigEditor {
  public sayHi(name: string): string {
    return `Hi ${name}`;
  }

  public getConfigurationOptions(configurationJson: string, baseGroupName: string): IPropertyPaneGroup {
    // convert JSON to object
    let config = JSON.parse(configurationJson);

    //console.log(config);

    let propertiesGroup: IPropertyPaneGroup = {
      groupName: baseGroupName,
      groupFields: [
        PropertyPaneHorizontalRule()
      ]
    };

    // generate the properties array for property pane based on the JSON object

    Object.keys(config).forEach(function (key) {
      var setting = config[key];

      if (setting.type != null) {
        if (setting.type == 'text' || setting.type == 'number') {
          propertiesGroup.groupFields.push(
            PropertyPaneTextField(key, {
              label: setting.label,
              value: setting.value
            })
          );
        } else if (setting.type == 'boolean') {
          propertiesGroup.groupFields.push(
            PropertyPaneCheckbox(key, {
              text: setting.label,
              checked: setting.value
            })
          );
        } else if (setting.type == 'multiline') {
          propertiesGroup.groupFields.push(
            PropertyPaneTextField(key, {
              label: setting.label,
              value: setting.value,
              multiline: true
            })
          );
        }
      }
    });

    return propertiesGroup;
  }
}
