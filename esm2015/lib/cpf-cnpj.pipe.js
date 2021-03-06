import { __decorate } from "tslib";
import { isString, formatCpf, formatCnpj, removeNonDigits } from './utils';
import { Pipe } from '@angular/core';
let CpfCnpjPipe = 
// 019.642.561-19 || 99.999.999/9999-99
class CpfCnpjPipe {
    transform(value) {
        if (!isString(value)) {
            return value;
        }
        const onlyDigits = removeNonDigits(value);
        if (onlyDigits && onlyDigits.length === 11) {
            return formatCpf(onlyDigits);
        }
        else if (onlyDigits && onlyDigits.length === 14) {
            return formatCnpj(onlyDigits);
        }
        return value;
    }
};
CpfCnpjPipe = __decorate([
    Pipe({
        name: 'cpfCnpj'
    })
    // 019.642.561-19 || 99.999.999/9999-99
], CpfCnpjPipe);
export { CpfCnpjPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BmLWNucGoucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1icnBpcGVzLyIsInNvdXJjZXMiOlsibGliL2NwZi1jbnBqLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDM0UsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFNcEQsSUFBYSxXQUFXO0FBRHhCLHVDQUF1QztBQUN2QyxNQUFhLFdBQVc7SUFDcEIsU0FBUyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE1BQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxQyxJQUFHLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtZQUN2QyxPQUFPLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNoQzthQUFNLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUFFO1lBQy9DLE9BQU8sVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztDQUNKLENBQUE7QUFoQlksV0FBVztJQUp2QixJQUFJLENBQUM7UUFDRixJQUFJLEVBQUUsU0FBUztLQUNsQixDQUFDO0lBQ0YsdUNBQXVDO0dBQzFCLFdBQVcsQ0FnQnZCO1NBaEJZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1N0cmluZywgZm9ybWF0Q3BmLCBmb3JtYXRDbnBqLCByZW1vdmVOb25EaWdpdHMgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2NwZkNucGonXHJcbn0pXHJcbi8vIDAxOS42NDIuNTYxLTE5IHx8IDk5Ljk5OS45OTkvOTk5OS05OVxyXG5leHBvcnQgY2xhc3MgQ3BmQ25walBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICBpZiAoIWlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvbmx5RGlnaXRzID0gcmVtb3ZlTm9uRGlnaXRzKHZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYob25seURpZ2l0cyAmJiBvbmx5RGlnaXRzLmxlbmd0aCA9PT0gMTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdENwZihvbmx5RGlnaXRzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG9ubHlEaWdpdHMgJiYgb25seURpZ2l0cy5sZW5ndGggPT09IDE0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRDbnBqKG9ubHlEaWdpdHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==