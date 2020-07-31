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
var NewsList_module_scss_1 = require("./NewsList.module.scss");
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var testModuleOne = require("testModuleOne");
var NewsList = /** @class */ (function (_super) {
    __extends(NewsList, _super);
    function NewsList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewsList.prototype.render = function () {
        return (React.createElement("div", { className: NewsList_module_scss_1.default.newsList },
            React.createElement("div", { className: NewsList_module_scss_1.default.container },
                React.createElement("div", { className: NewsList_module_scss_1.default.row },
                    React.createElement("div", { className: NewsList_module_scss_1.default.column },
                        React.createElement("span", { className: NewsList_module_scss_1.default.title }, "News List"),
                        React.createElement("p", { className: NewsList_module_scss_1.default.subTitle }, "Customize the property pane based on the given configuration Json."),
                        React.createElement("p", { className: NewsList_module_scss_1.default.description }, sp_lodash_subset_1.escape(this.props.description)),
                        React.createElement("p", { className: NewsList_module_scss_1.default.description }, testModuleOne.sayHi('Jerry')),
                        React.createElement("p", { className: NewsList_module_scss_1.default.description },
                            "Custom Configration: ",
                            this.props.configurationJson))))));
    };
    return NewsList;
}(React.Component));
exports.default = NewsList;
//# sourceMappingURL=NewsList.js.map