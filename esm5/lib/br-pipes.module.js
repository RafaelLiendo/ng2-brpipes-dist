import { __decorate } from "tslib";
import { CpfCnpjPipe } from './cpf-cnpj.pipe';
import { RealPipe } from './real.pipe';
import { CeiPipe } from './cei.pipe';
import { TelefonePipe } from './telefone.pipe';
import { CpfPipe } from './cpf.pipe';
import { CnpjPipe } from './cnpj.pipe';
import { CepPipe } from './cep.pipe';
import { NgModule } from '@angular/core';
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
export { Ng2BRPipesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnItcGlwZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLWJycGlwZXMvIiwic291cmNlcyI6WyJsaWIvYnItcGlwZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBc0J6QztJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBcEI1QixRQUFRLENBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1YsT0FBTztnQkFDUCxRQUFRO2dCQUNSLE9BQU87Z0JBQ1AsV0FBVztnQkFDWCxZQUFZO2dCQUNaLE9BQU87Z0JBQ1AsUUFBUTthQUNYO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLE9BQU87Z0JBQ1AsUUFBUTtnQkFDUixPQUFPO2dCQUNQLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixPQUFPO2dCQUNQLFFBQVE7YUFDWDtTQUNKLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3BmQ25walBpcGUgfSBmcm9tICcuL2NwZi1jbnBqLnBpcGUnO1xyXG5pbXBvcnQgeyBSZWFsUGlwZSB9IGZyb20gJy4vcmVhbC5waXBlJztcclxuaW1wb3J0IHsgQ2VpUGlwZSB9IGZyb20gJy4vY2VpLnBpcGUnO1xyXG5pbXBvcnQgeyBUZWxlZm9uZVBpcGUgfSBmcm9tICcuL3RlbGVmb25lLnBpcGUnO1xyXG5pbXBvcnQgeyBDcGZQaXBlIH0gZnJvbSAnLi9jcGYucGlwZSc7XHJcbmltcG9ydCB7IENucGpQaXBlIH0gZnJvbSAnLi9jbnBqLnBpcGUnO1xyXG5pbXBvcnQgeyBDZXBQaXBlIH0gZnJvbSAnLi9jZXAucGlwZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQ2VwUGlwZSxcclxuICAgICAgICBDbnBqUGlwZSxcclxuICAgICAgICBDcGZQaXBlLFxyXG4gICAgICAgIENwZkNucGpQaXBlLFxyXG4gICAgICAgIFRlbGVmb25lUGlwZSxcclxuICAgICAgICBDZWlQaXBlLFxyXG4gICAgICAgIFJlYWxQaXBlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIENlcFBpcGUsXHJcbiAgICAgICAgQ25walBpcGUsXHJcbiAgICAgICAgQ3BmUGlwZSxcclxuICAgICAgICBDcGZDbnBqUGlwZSxcclxuICAgICAgICBUZWxlZm9uZVBpcGUsXHJcbiAgICAgICAgQ2VpUGlwZSxcclxuICAgICAgICBSZWFsUGlwZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmcyQlJQaXBlc01vZHVsZSB7IH1cclxuIl19