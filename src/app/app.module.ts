import { AppRoutingModule } from './app.routing';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { LibsModule } from './libs/libs.module';
import { AppComponent } from './app.component';
import { BookService } from './shared/services/book.service';
import { CatelogService } from './shared/services/catelog.service';
import { ArticleService } from './shared/services/article.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        LibsModule,
        MaterialModule.forRoot(),
        HomeModule,
        AppRoutingModule
    ],
    providers: [
        BookService,
        CatelogService,
        ArticleService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
