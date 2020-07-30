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
var ControlDemo_module_scss_1 = require("./ControlDemo.module.scss");
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var ControlDemo = /** @class */ (function (_super) {
    __extends(ControlDemo, _super);
    function ControlDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlDemo.prototype.render = function () {
        return (React.createElement("div", { className: ControlDemo_module_scss_1.default.controlDemo },
            React.createElement("div", { className: ControlDemo_module_scss_1.default.container },
                React.createElement("div", { className: ControlDemo_module_scss_1.default.row },
                    React.createElement("div", { className: ControlDemo_module_scss_1.default.column },
                        React.createElement("span", { className: ControlDemo_module_scss_1.default.title }, "SPFx PoC Controls Demo"),
                        React.createElement("p", { className: ControlDemo_module_scss_1.default.subTitle }, "Show the different controls that we can use in SharePoint development."),
                        React.createElement("p", { className: ControlDemo_module_scss_1.default.description }, sp_lodash_subset_1.escape(this.props.description)),
                        React.createElement("p", { className: ControlDemo_module_scss_1.default.description },
                            "Background Color: ",
                            this.props.backgroundColor),
                        React.createElement("div", { className: ControlDemo_module_scss_1.default.description },
                            "Test Textarea: ",
                            this.props.testTextarea != null ? (this.props.testTextarea.split("\n").map(function (i, key) {
                                return React.createElement("div", { key: key }, i);
                            })) : ("Not set")),
                        React.createElement("p", { className: ControlDemo_module_scss_1.default.description },
                            "Test Checkbox: ",
                            this.props.testCheckbox != null ? (this.props.testCheckbox.toString()) : ("Not set")),
                        React.createElement("p", { className: ControlDemo_module_scss_1.default.description },
                            "Test Dropdown: ",
                            this.props.testDropdown),
                        React.createElement("p", { className: ControlDemo_module_scss_1.default.description },
                            "Test Toggle: ",
                            this.props.testToggle != null ? (this.props.testToggle.toString()) : ("Not set")),
                        React.createElement("p", { className: ControlDemo_module_scss_1.default.description },
                            "Test Choice Groups: ",
                            this.props.testChoiceGroups),
                        React.createElement("div", null,
                            React.createElement("button", { type: "button", className: ControlDemo_module_scss_1.default.button, onClick: this.props.clickHandler }, "CLICK ME")))))));
    };
    return ControlDemo;
}(React.Component));
exports.default = ControlDemo;
//# sourceMappingURL=ControlDemo.js.map