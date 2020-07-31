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
var strings = require("NewsListWebPartStrings");
var NewsList_1 = require("./components/NewsList");
var configEditor_1 = require("configEditor");
var NewsListWebPart = /** @class */ (function (_super) {
    __extends(NewsListWebPart, _super);
    function NewsListWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewsListWebPart.prototype.render = function () {
        var element = React.createElement(NewsList_1.default, {
            description: this.properties.description,
            configurationJson: this.properties.configurationJson
        });
        ReactDom.render(element, this.domElement);
    };
    NewsListWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(NewsListWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    NewsListWebPart.prototype.getPropertyPaneConfiguration = function () {
        var myConfigEditor = new configEditor_1.ConfigEditor();
        var propertiesGroup = myConfigEditor.getConfigurationOptions(this.properties.configurationJson, strings.BasicGroupName);
        propertiesGroup.groupFields.splice(0, 0, sp_property_pane_1.PropertyPaneTextField('description', {
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
    };
    NewsListWebPart.prototype.onPropertyPaneFieldChanged = function (propertyPath, oldValue, newValue) {
        if (oldValue != newValue) {
            console.log('path: ' + propertyPath + ', old value: ' + oldValue + ', new value: ' + newValue);
            // generate new JSON string
            // convert JSON to object
            var config_1 = JSON.parse(this.properties.configurationJson);
            Object.keys(config_1).forEach(function (key) {
                if (key == propertyPath) {
                    config_1[key].value = newValue;
                }
            });
            //console.log(config);
            // update this.properties.configurationJSON
            var configString = JSON.stringify(config_1);
            //console.log(configString);
            this.properties.configurationJson = configString;
        }
    };
    return NewsListWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = NewsListWebPart;
//# sourceMappingURL=NewsListWebPart.js.map