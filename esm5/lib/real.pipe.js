import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
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
export { RealPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhbC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLWJycGlwZXMvIiwic291cmNlcyI6WyJsaWIvcmVhbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQU1wRDtJQURBLGNBQWM7SUFDZDtJQW9CQSxDQUFDO0lBbkJHLDRCQUFTLEdBQVQsVUFBVSxLQUFVLEVBQ2hCLGdCQUE4QixFQUM5QixhQUF5QixFQUN6QixjQUE0QixFQUM1QixXQUF1QjtRQUh2QixpQ0FBQSxFQUFBLHNCQUE4QjtRQUM5Qiw4QkFBQSxFQUFBLGlCQUF5QjtRQUN6QiwrQkFBQSxFQUFBLG9CQUE0QjtRQUM1Qiw0QkFBQSxFQUFBLGVBQXVCO1FBRXZCLElBQUcsS0FBSyxLQUFLLElBQUksSUFBSyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDdkQsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUVELElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2QsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFJLE1BQU0sR0FBRyxhQUFhLEdBQUcsV0FBVyxHQUFHLEtBQUssR0FBRyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO1FBQzFGLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFFdEQsT0FBTyxJQUFJLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsY0FBYyxDQUFDLENBQUM7SUFDeEksQ0FBQztJQW5CUSxRQUFRO1FBSnBCLElBQUksQ0FBQztZQUNGLElBQUksRUFBRSxNQUFNO1NBQ2YsQ0FBQztRQUNGLGNBQWM7T0FDRCxRQUFRLENBb0JwQjtJQUFELGVBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQXBCWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ3JlYWwnXHJcbn0pXHJcbi8vIFIkIDEuMDAwLDAwXHJcbmV4cG9ydCBjbGFzcyBSZWFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksXHJcbiAgICAgICAgZGVjaW1hbERlbGltaXRlcjogc3RyaW5nID0gJywnLFxyXG4gICAgICAgIGRlY2ltYWxMZW5ndGg6IG51bWJlciA9IDIsXHJcbiAgICAgICAgY2h1bmtEZWxpbWl0ZXI6IHN0cmluZyA9ICcuJyxcclxuICAgICAgICBjaHVua0xlbmd0aDogbnVtYmVyID0gMyk6IGFueSB7XHJcblxyXG4gICAgICAgIGlmKHZhbHVlID09PSBudWxsIHx8ICB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNOYU4odmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9ICdcXFxcZCg/PShcXFxcZHsnICsgY2h1bmtMZW5ndGggKyAnfSkrJyArIChkZWNpbWFsTGVuZ3RoID4gMCA/ICdcXFxcRCcgOiAnJCcpICsgJyknXHJcbiAgICAgICAgbGV0IG51bSA9IHZhbHVlLnRvRml4ZWQoTWF0aC5tYXgoMCwgfn5kZWNpbWFsTGVuZ3RoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiAnUiQnICsgKGRlY2ltYWxEZWxpbWl0ZXIgPyBudW0ucmVwbGFjZSgnLicsIGRlY2ltYWxEZWxpbWl0ZXIpIDogbnVtKS5yZXBsYWNlKG5ldyBSZWdFeHAocmVzdWx0LCAnZycpLCAnJCYnICsgY2h1bmtEZWxpbWl0ZXIpO1xyXG4gICAgfVxyXG59Il19