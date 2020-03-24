import { __decorate } from "tslib";
import { isString, formatCpf, removeNonDigits } from './utils';
import { Pipe } from '@angular/core';
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
export { CpfPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BmLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItYnJwaXBlcy8iLCJzb3VyY2VzIjpbImxpYi9jcGYucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBTXBEO0lBREEsaUJBQWlCO0lBQ2pCO0lBYUEsQ0FBQztJQVpHLDJCQUFTLEdBQVQsVUFBVSxLQUFVO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxJQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFMUMsSUFBRyxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUU7WUFDdkMsT0FBTyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDaEM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBWlEsT0FBTztRQUpuQixJQUFJLENBQUM7WUFDRixJQUFJLEVBQUUsS0FBSztTQUNkLENBQUM7UUFDRixpQkFBaUI7T0FDSixPQUFPLENBYW5CO0lBQUQsY0FBQztDQUFBLEFBYkQsSUFhQztTQWJZLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1N0cmluZywgZm9ybWF0Q3BmLCByZW1vdmVOb25EaWdpdHMgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2NwZidcclxufSlcclxuLy8gMDE5LjY0Mi41NjEtMTlcclxuZXhwb3J0IGNsYXNzIENwZlBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICBpZiAoIWlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9ubHlEaWdpdHMgPSByZW1vdmVOb25EaWdpdHModmFsdWUpO1xyXG5cclxuICAgICAgICBpZihvbmx5RGlnaXRzICYmIG9ubHlEaWdpdHMubGVuZ3RoID09PSAxMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0Q3BmKG9ubHlEaWdpdHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==