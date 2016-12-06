import { LayoutDirective } from './directive/layout.directive';
import { FlexDirective } from './directive/flex.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { LibsComponent } from './libs.component';
import { PagerComponent } from './pager/pager.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        LibsComponent,
        PagerComponent,
        PaginationComponent,
        FlexDirective,
        LayoutDirective
    ],
    exports: [
        PagerComponent,
        PaginationComponent,
        FlexDirective,
        LayoutDirective
    ]
})
export class LibsModule { }
