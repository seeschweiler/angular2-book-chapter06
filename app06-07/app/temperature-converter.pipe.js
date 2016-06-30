"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TemperatureConverterPipe = (function () {
    function TemperatureConverterPipe() {
    }
    TemperatureConverterPipe.prototype.transform = function (value, mode, outputWithUnit) {
        if (value && !isNaN(value)) {
            var result = value.toString();
            // mode === 'F2C' -> Convert degree Fahrenheit to degree Celsius
            // mode === 'C2F' -> Convert degree Celsius to degree Fahrenheit
            switch (mode) {
                case 'F2C':
                    result = ((value - 32) * 5 / 9).toFixed(2);
                    if (outputWithUnit)
                        result = result + ' °C';
                    break;
                case 'C2F':
                    result = (value * 9 / 5 + 32).toFixed(2);
                    if (outputWithUnit)
                        result = result + ' °F';
                    break;
            }
            return result;
        }
        return;
    };
    TemperatureConverterPipe = __decorate([
        core_1.Pipe({ name: 'temperatureConverter' }), 
        __metadata('design:paramtypes', [])
    ], TemperatureConverterPipe);
    return TemperatureConverterPipe;
}());
exports.TemperatureConverterPipe = TemperatureConverterPipe;
;
//# sourceMappingURL=temperature-converter.pipe.js.map