import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { DemoComponent } from './components/demo.component';
import { FormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  declarations: [DemoComponent],
  imports: [SharedModule, CommonModule, DemoRoutingModule, FormsModule],
})
export class DemoModule {}
