import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { PublicationsComponent } from './publications/publications.component';
import { StoriesComponent } from './stories/stories.component';
import { SuggessionsComponent } from './suggessions/suggessions.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    PostDialogComponent,
    PublicationsComponent,
    StoriesComponent,
    SuggessionsComponent
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    HeaderComponent,
    PostDialogComponent,
    PublicationsComponent,
    StoriesComponent,
    SuggessionsComponent,
  ],
})
export class SharedModule { }
