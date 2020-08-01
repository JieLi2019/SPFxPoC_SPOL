"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var ConfigEditorLibrary = /** @class */ (function () {
    function ConfigEditorLibrary() {
    }
    ConfigEditorLibrary.prototype.name = function () {
        return 'ConfigEditorLibrary';
    };
    ConfigEditorLibrary.prototype.sayHi = function (name) {
        return "Hi " + name;
    };
    ConfigEditorLibrary.prototype.getConfigurationOptions = function (configurationJson, baseGroupName) {
        // convert JSON to object
        var config = JSON.parse(configurationJson);
        //console.log(config);
        var propertiesGroup = {
            groupName: baseGroupName,
            groupFields: [
                sp_webpart_base_1.PropertyPaneHorizontalRule()
            ]
        };
        // generate the properties array for property pane based on the JSON object
        Object.keys(config).forEach(function (key) {
            var setting = config[key];
            if (setting.type != null) {
                if (setting.type == 'text' || setting.type == 'number') {
                    propertiesGroup.groupFields.push(sp_webpart_base_1.PropertyPaneTextField(key, {
                        label: setting.label,
                        value: setting.value
                    }));
                }
                else if (setting.type == 'boolean') {
                    propertiesGroup.groupFields.push(sp_webpart_base_1.PropertyPaneCheckbox(key, {
                        text: setting.label,
                        checked: setting.value
                    }));
                }
                else if (setting.type == 'multiline') {
                    propertiesGroup.groupFields.push(sp_webpart_base_1.PropertyPaneTextField(key, {
                        label: setting.label,
                        value: setting.value,
                        multiline: true
                    }));
                }
            }
        });
        return propertiesGroup;
    };
    return ConfigEditorLibrary;
}());
exports.ConfigEditorLibrary = ConfigEditorLibrary;
//# sourceMappingURL=ConfigEditorLibrary.js.map