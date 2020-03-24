import { __decorate } from "tslib";
import { isString, formatCnpj, removeNonDigits } from './utils';
import { Pipe } from '@angular/core';
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
export { CnpjPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY25wai5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLWJycGlwZXMvIiwic291cmNlcyI6WyJsaWIvY25wai5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDaEUsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFNcEQ7SUFEQSxxQkFBcUI7SUFDckI7SUFjQSxDQUFDO0lBYkcsNEJBQVMsR0FBVCxVQUFVLEtBQVU7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELElBQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxQyxJQUFHLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtZQUN2QyxPQUFPLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNqQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFiUSxRQUFRO1FBSnBCLElBQUksQ0FBQztZQUNGLElBQUksRUFBRSxNQUFNO1NBQ2YsQ0FBQztRQUNGLHFCQUFxQjtPQUNSLFFBQVEsQ0FjcEI7SUFBRCxlQUFDO0NBQUEsQUFkRCxJQWNDO1NBZFksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzU3RyaW5nLCBmb3JtYXRDbnBqLCByZW1vdmVOb25EaWdpdHMgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2NucGonXHJcbn0pXHJcbi8vIDk5Ljk5OS45OTkvOTk5OS05OVxyXG5leHBvcnQgY2xhc3MgQ25walBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICBpZiAoIWlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvbmx5RGlnaXRzID0gcmVtb3ZlTm9uRGlnaXRzKHZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYob25seURpZ2l0cyAmJiBvbmx5RGlnaXRzLmxlbmd0aCA9PT0gMTQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdENucGoob25seURpZ2l0cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuIl19