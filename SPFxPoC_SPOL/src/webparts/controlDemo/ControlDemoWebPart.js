"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDom = require("react-dom");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_property_pane_1 = require("@microsoft/sp-property-pane");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var strings = require("ControlDemoWebPartStrings");
var ControlDemo_1 = require("./components/ControlDemo");
// PnP controls
var PropertyFieldColorPicker_1 = require("@pnp/spfx-property-controls/lib/PropertyFieldColorPicker");
var ControlDemoWebPart = /** @class */ (function (_super) {
    __extends(ControlDemoWebPart, _super);
    function ControlDemoWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlDemoWebPart.prototype.render = function () {
        var element = React.createElement(ControlDemo_1.default, {
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
        });
        ReactDom.render(element, this.domElement);
    };
    ControlDemoWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(ControlDemoWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ControlDemoWebPart.prototype.getPropertyPaneConfiguration = function () {
        var propertiesGroup = {
            groupName: strings.BasicGroupName,
            groupFields: [
                sp_property_pane_1.PropertyPaneTextField('description', {
                    label: strings.DescriptionFieldLabel
                }),
                sp_property_pane_1.PropertyPaneHorizontalRule(),
                PropertyFieldColorPicker_1.PropertyFieldColorPicker('backgroundColor', {
                    label: 'Background color',
                    selectedColor: this.properties.backgroundColor,
                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                    properties: this.properties,
                    disabled: false,
                    alphaSliderHidden: false,
                    style: PropertyFieldColorPicker_1.PropertyFieldColorPickerStyle.Full,
                    iconName: 'Precipitation',
                    key: 'backgroundColorFieldId'
                }),
                sp_property_pane_1.PropertyPaneHorizontalRule(),
                sp_property_pane_1.PropertyPaneTextField('testTextarea', {
                    label: 'Multi-line Text Field',
                    multiline: true
                }),
                sp_property_pane_1.PropertyPaneHorizontalRule(),
                sp_property_pane_1.PropertyPaneCheckbox('testCheckbox', {
                    text: 'Checkbox'
                }),
                sp_property_pane_1.PropertyPaneHorizontalRule(),
                sp_property_pane_1.PropertyPaneDropdown('testDropdown', {
                    label: 'Dropdown',
                    options: [
                        { key: 'One', text: 'One' },
                        { key: 'Two', text: 'Two' },
                        { key: 'Three', text: 'Three' },
                        { key: 'Four', text: 'Four' }
                    ]
                }),
                sp_property_pane_1.PropertyPaneHorizontalRule(),
                sp_property_pane_1.PropertyPaneToggle('testToggle', {
                    label: 'Toggle',
                    onText: 'On',
                    offText: 'Off'
                }),
                sp_property_pane_1.PropertyPaneHorizontalRule(),
                sp_property_pane_1.PropertyPaneChoiceGroup('testChoiceGroups', {
                    label: 'ChoiceGroups',
                    options: [
                        { key: 'dotnet', text: 'dotnet' },
                        { key: 'sharepoint', text: 'sharepoint' },
                        { key: 'java', text: 'java' }
                    ]
                }),
                sp_property_pane_1.PropertyPaneHorizontalRule(),
                sp_property_pane_1.PropertyPaneButton('testButton', {
                    text: 'Click Here',
                    buttonType: sp_property_pane_1.PropertyPaneButtonType.Normal,
                    onClick: this.myButtonClick.bind(this)
                }),
                sp_property_pane_1.PropertyPaneHorizontalRule(),
                sp_property_pane_1.PropertyPaneButton('primaryButton', {
                    text: "Primary button",
                    buttonType: sp_property_pane_1.PropertyPaneButtonType.Primary,
                    onClick: this.myButtonClick.bind(this)
                }),
                sp_property_pane_1.PropertyPaneHorizontalRule(),
                sp_property_pane_1.PropertyPaneButton('heroButton', {
                    text: "Hero button",
                    buttonType: sp_property_pane_1.PropertyPaneButtonType.Hero,
                    icon: 'Add',
                    onClick: this.myButtonClick.bind(this),
                }),
                sp_property_pane_1.PropertyPaneHorizontalRule(),
                sp_property_pane_1.PropertyPaneButton('commandButton', {
                    text: "Command button",
                    buttonType: sp_property_pane_1.PropertyPaneButtonType.Command,
                    onClick: this.myButtonClick.bind(this),
                }),
                sp_property_pane_1.PropertyPaneHorizontalRule(),
                sp_property_pane_1.PropertyPaneButton('compoundButton', {
                    text: "Compound button",
                    buttonType: sp_property_pane_1.PropertyPaneButtonType.Compound,
                    description: 'With some descriptive text',
                    onClick: this.myButtonClick.bind(this),
                }),
                sp_property_pane_1.PropertyPaneHorizontalRule(),
                sp_property_pane_1.PropertyPaneButton('iconButton', {
                    text: "Icon button",
                    buttonType: sp_property_pane_1.PropertyPaneButtonType.Icon,
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
    };
    ControlDemoWebPart.prototype.onPropertyPaneFieldChanged = function (propertyPath, oldValue, newValue) {
        if (oldValue != newValue) {
            console.log('path: ' + propertyPath + ', old value: ' + oldValue + ', new value: ' + newValue);
            // force to refresh webpart
            if (propertyPath === 'backgroundColor' && newValue) {
                this.properties.backgroundColor = newValue;
                this.render();
            }
        }
    };
    ControlDemoWebPart.prototype.buttonClick = function () {
        console.log('******************* On Page Button Click!!!  *********************');
    };
    ControlDemoWebPart.prototype.myButtonClick = function () {
        console.log('******************* On My Button Click!!!  *********************');
    };
    return ControlDemoWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = ControlDemoWebPart;
//# sourceMappingURL=ControlDemoWebPart.js.map