import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCommonModule],
  exports: [MatButtonModule],
})
export class MaterialModule {}
