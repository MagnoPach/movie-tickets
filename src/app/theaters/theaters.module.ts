import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheatersRoutingModule } from './theaters-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TheatersComponent } from './theaters.component';



@NgModule({
  declarations: [
    TheatersComponent
  ],
  imports: [
    CommonModule,
    TheatersRoutingModule,
    FormsModule
  ],
  exports: [TheatersComponent],
  providers: [HttpClient]
})
export class TheatersModule { }
