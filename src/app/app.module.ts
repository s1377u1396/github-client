import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared/shared/shared.module";

@NgModule({
    declarations : [],
    imports : [
        BrowserModule,
        HttpClientModule,
        SharedModule,
    ],
    providers : [],
})
export class AppModule{}