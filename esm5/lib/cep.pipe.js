import { __decorate } from "tslib";
import { isString } from './utils';
import { Pipe } from '@angular/core';
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
export { CepPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VwLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItYnJwaXBlcy8iLCJzb3VyY2VzIjpbImxpYi9jZXAucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNuQyxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQU1wRDtJQURBLFlBQVk7SUFDWjtJQVlBLENBQUM7SUFYRywyQkFBUyxHQUFULFVBQVUsS0FBVTtRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsSUFBRyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDNUIsT0FBVSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUcsQ0FBQztTQUN4RDtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFYUSxPQUFPO1FBSm5CLElBQUksQ0FBQztZQUNGLElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQztRQUNGLFlBQVk7T0FDQyxPQUFPLENBWW5CO0lBQUQsY0FBQztDQUFBLEFBWkQsSUFZQztTQVpZLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnY2VwJ1xyXG59KVxyXG4vLyA3MjAwNi0yMjZcclxuZXhwb3J0IGNsYXNzIENlcFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICBpZiAoIWlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPT09IDgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke3ZhbHVlLnN1YnN0cigwLCA1KX0tJHt2YWx1ZS5zdWJzdHIoNSwgMyl9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxufSJdfQ==