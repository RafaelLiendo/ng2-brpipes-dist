import { __decorate } from "tslib";
import { isString, hasLength } from './utils';
import { Pipe } from '@angular/core';
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
export { TelefonePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsZWZvbmUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1icnBpcGVzLyIsInNvdXJjZXMiOlsibGliL3RlbGVmb25lLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBTXBEO0lBREEsa0NBQWtDO0lBQ2xDO0lBY0EsQ0FBQztJQWJHLGdDQUFTLEdBQVQsVUFBVSxLQUFVO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEIsT0FBTyxLQUFLLENBQUM7U0FDaEI7YUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sRUFBRSxDQUFDO1NBQ2I7YUFBTSxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtZQUNyQyxPQUFPLE1BQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFHLENBQUM7U0FDL0U7YUFBTSxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtZQUNyQyxPQUFPLE1BQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFHLENBQUM7U0FDL0U7YUFBTTtZQUNILE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQWJRLFlBQVk7UUFKeEIsSUFBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLFVBQVU7U0FDbkIsQ0FBQztRQUNGLGtDQUFrQztPQUNyQixZQUFZLENBY3hCO0lBQUQsbUJBQUM7Q0FBQSxBQWRELElBY0M7U0FkWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNTdHJpbmcsIGhhc0xlbmd0aCB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAndGVsZWZvbmUnXHJcbn0pXHJcbi8vICgzMSk5NjA5LTg2ODkgb3UgKDMxKTk5NjA5LTg2ODlcclxuZXhwb3J0IGNsYXNzIFRlbGVmb25lUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGlmICghaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFoYXNMZW5ndGgodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA9PT0gMTApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAoJHt2YWx1ZS5zdWJzdHIoMCwgMil9KSR7dmFsdWUuc3Vic3RyKDIsIDQpfS0ke3ZhbHVlLnN1YnN0cig2LCA0KX1gO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID09PSAxMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCgke3ZhbHVlLnN1YnN0cigwLCAyKX0pJHt2YWx1ZS5zdWJzdHIoMiwgNSl9LSR7dmFsdWUuc3Vic3RyKDcsIDQpfWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==