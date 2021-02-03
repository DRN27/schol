import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { VariantComponent } from './components/variant/variant.component';
import { AnswerComponent } from './components/answer/answer.component';
import { TestResultComponent } from './components/test-result/test-result.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VariantComponent,
    AnswerComponent,
    TestResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
