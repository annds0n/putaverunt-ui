import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatPaginatorModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core';
import { SharedModule } from './shared';
import { ThoughtFormGuard } from './thought-form.guard';
import { ThoughtFormModule } from './thought-form/thought-form.module';
import { ThoughtComponent } from './thought.component';
import { ThoughtResolver } from './thought.resolver';
import { ThoughtRountingModule } from './thought.routing';

@NgModule({
  declarations: [ThoughtComponent],
  imports: [
    CommonModule,
    ThoughtRountingModule,
    MatCardModule,
    ThoughtFormModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    MatPaginatorModule,
    RouterModule,
    CoreModule,
    MatDialogModule,
  ],
  providers: [ThoughtResolver, ThoughtFormGuard]
})
export class ThoughtModule { }
