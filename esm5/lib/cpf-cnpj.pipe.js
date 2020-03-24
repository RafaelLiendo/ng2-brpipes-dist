import { __decorate } from "tslib";
import { isString, formatCpf, formatCnpj, removeNonDigits } from './utils';
import { Pipe } from '@angular/core';
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
export { CpfCnpjPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BmLWNucGoucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1icnBpcGVzLyIsInNvdXJjZXMiOlsibGliL2NwZi1jbnBqLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDM0UsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFNcEQ7SUFEQSx1Q0FBdUM7SUFDdkM7SUFnQkEsQ0FBQztJQWZHLCtCQUFTLEdBQVQsVUFBVSxLQUFVO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFMUMsSUFBRyxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUU7WUFDdkMsT0FBTyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDaEM7YUFBTSxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtZQUMvQyxPQUFPLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNqQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFmUSxXQUFXO1FBSnZCLElBQUksQ0FBQztZQUNGLElBQUksRUFBRSxTQUFTO1NBQ2xCLENBQUM7UUFDRix1Q0FBdUM7T0FDMUIsV0FBVyxDQWdCdkI7SUFBRCxrQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1N0cmluZywgZm9ybWF0Q3BmLCBmb3JtYXRDbnBqLCByZW1vdmVOb25EaWdpdHMgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2NwZkNucGonXHJcbn0pXHJcbi8vIDAxOS42NDIuNTYxLTE5IHx8IDk5Ljk5OS45OTkvOTk5OS05OVxyXG5leHBvcnQgY2xhc3MgQ3BmQ25walBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICBpZiAoIWlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvbmx5RGlnaXRzID0gcmVtb3ZlTm9uRGlnaXRzKHZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYob25seURpZ2l0cyAmJiBvbmx5RGlnaXRzLmxlbmd0aCA9PT0gMTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdENwZihvbmx5RGlnaXRzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG9ubHlEaWdpdHMgJiYgb25seURpZ2l0cy5sZW5ndGggPT09IDE0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRDbnBqKG9ubHlEaWdpdHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==