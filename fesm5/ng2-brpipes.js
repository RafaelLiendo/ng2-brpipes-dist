import { __decorate } from 'tslib';
import { Pipe, NgModule } from '@angular/core';

var RealPipe = /** @class */ (function () {
    // R$ 1.000,00
    function RealPipe() {
    }
    RealPipe.prototype.transform = function (value, decimalDelimiter, decimalLength, chunkDelimiter, chunkLength) {
        if (decimalDelimiter === void 0) { decimalDelimiter = ','; }
        if (decimalLength === void 0) { decimalLength = 2; }
        if (chunkDelimiter === void 0) { chunkDelimiter = '.'; }
        if (chunkLength === void 0) { chunkLength = 3; }
        if (value === null || value === undefined || value === '') {
            return '';
        }
        if (isNaN(value)) {
            return value;
        }
        var result = '\\d(?=(\\d{' + chunkLength + '})+' + (decimalLength > 0 ? '\\D' : '$') + ')';
        var num = value.toFixed(Math.max(0, ~~decimalLength));
        return 'R$' + (decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(new RegExp(result, 'g'), '$&' + chunkDelimiter);
    };
    RealPipe = __decorate([
        Pipe({
            name: 'real'
        })
        // R$ 1.000,00
    ], RealPipe);
    return RealPipe;
}());

function isString(value) {
    return typeof value === 'string';
}
function hasLength(value) {
    return value.toString().trim().length > 0;
}
function removeNonDigits(value) {
    return value.replace(/\D/g, '');
}
function formatCnpj(value) {
    return value.substr(0, 2) + "." + value.substr(2, 3) + "." + value.substr(5, 3) + "/" + value.substr(8, 4) + "-" + value.substr(12, 2);
}
function formatCpf(value) {
    return value.substr(0, 3) + "." + value.substr(3, 3) + "." + value.substr(6, 3) + "-" + value.substr(9, 2);
}

var CeiPipe = /** @class */ (function () {
    // 76.119.87629/85
    function CeiPipe() {
    }
    CeiPipe.prototype.transform = function (value) {
        if (!isString(value)) {
            return value;
        }
        if (value && value.length === 12) {
            return value.substr(0, 2) + "." + value.substr(2, 3) + "." + value.substr(5, 5) + "/" + value.substr(10, 2);
        }
        return value;
    };
    CeiPipe = __decorate([
        Pipe({
            name: 'cei'
        })
        // 76.119.87629/85
    ], CeiPipe);
    return CeiPipe;
}());

var TelefonePipe = /** @class */ (function () {
    // (31)9609-8689 ou (31)99609-8689
    function TelefonePipe() {
    }
    TelefonePipe.prototype.transform = function (value) {
        if (!isString(value)) {
            return value;
        }
        else if (!hasLength(value)) {
            return '';
        }
        else if (value && value.length === 10) {
            return "(" + value.substr(0, 2) + ")" + value.substr(2, 4) + "-" + value.substr(6, 4);
        }
        else if (value && value.length === 11) {
            return "(" + value.substr(0, 2) + ")" + value.substr(2, 5) + "-" + value.substr(7, 4);
        }
        else {
            return value;
        }
    };
    TelefonePipe = __decorate([
        Pipe({
            name: 'telefone'
        })
        // (31)9609-8689 ou (31)99609-8689
    ], TelefonePipe);
    return TelefonePipe;
}());

var CpfPipe = /** @class */ (function () {
    // 019.642.561-19
    function CpfPipe() {
    }
    CpfPipe.prototype.transform = function (value) {
        if (!isString(value)) {
            return value;
        }
        var onlyDigits = removeNonDigits(value);
        if (onlyDigits && onlyDigits.length === 11) {
            return formatCpf(onlyDigits);
        }
        return value;
    };
    CpfPipe = __decorate([
        Pipe({
            name: 'cpf'
        })
        // 019.642.561-19
    ], CpfPipe);
    return CpfPipe;
}());

var CnpjPipe = /** @class */ (function () {
    // 99.999.999/9999-99
    function CnpjPipe() {
    }
    CnpjPipe.prototype.transform = function (value) {
        if (!isString(value)) {
            return value;
        }
        var onlyDigits = removeNonDigits(value);
        if (onlyDigits && onlyDigits.length === 14) {
            return formatCnpj(onlyDigits);
        }
        return value;
    };
    CnpjPipe = __decorate([
        Pipe({
            name: 'cnpj'
        })
        // 99.999.999/9999-99
    ], CnpjPipe);
    return CnpjPipe;
}());

var CpfCnpjPipe = /** @class */ (function () {
    // 019.642.561-19 || 99.999.999/9999-99
    function CpfCnpjPipe() {
    }
    CpfCnpjPipe.prototype.transform = function (value) {
        if (!isString(value)) {
            return value;
        }
        var onlyDigits = removeNonDigits(value);
        if (onlyDigits && onlyDigits.length === 11) {
            return formatCpf(onlyDigits);
        }
        else if (onlyDigits && onlyDigits.length === 14) {
            return formatCnpj(onlyDigits);
        }
        return value;
    };
    CpfCnpjPipe = __decorate([
        Pipe({
            name: 'cpfCnpj'
        })
        // 019.642.561-19 || 99.999.999/9999-99
    ], CpfCnpjPipe);
    return CpfCnpjPipe;
}());

var CepPipe = /** @class */ (function () {
    // 72006-226
    function CepPipe() {
    }
    CepPipe.prototype.transform = function (value) {
        if (!isString(value)) {
            return value;
        }
        if (value && value.length === 8) {
            return value.substr(0, 5) + "-" + value.substr(5, 3);
        }
        return value;
    };
    CepPipe = __decorate([
        Pipe({
            name: 'cep'
        })
        // 72006-226
    ], CepPipe);
    return CepPipe;
}());

var Ng2BRPipesModule = /** @class */ (function () {
    function Ng2BRPipesModule() {
    }
    Ng2BRPipesModule = __decorate([
        NgModule({
            declarations: [
                CepPipe,
                CnpjPipe,
                CpfPipe,
                CpfCnpjPipe,
                TelefonePipe,
                CeiPipe,
                RealPipe
            ],
            exports: [
                CepPipe,
                CnpjPipe,
                CpfPipe,
                CpfCnpjPipe,
                TelefonePipe,
                CeiPipe,
                RealPipe
            ]
        })
    ], Ng2BRPipesModule);
    return Ng2BRPipesModule;
}());

/*
 * Public API Surface of ng2-brpipes
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CeiPipe, CepPipe, CnpjPipe, CpfCnpjPipe, CpfPipe, Ng2BRPipesModule, RealPipe, TelefonePipe };
//# sourceMappingURL=ng2-brpipes.js.map
