import { PipeTransform } from '@angular/core';
export declare class RealPipe implements PipeTransform {
    transform(value: any, decimalDelimiter?: string, decimalLength?: number, chunkDelimiter?: string, chunkLength?: number): any;
}
