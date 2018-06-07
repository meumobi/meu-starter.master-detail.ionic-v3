import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PostDetailsPage } from './post-details';
import { PostsProvider } from '@providers/posts';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    PostDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PostDetailsPage),
    MomentModule
  ],
  providers: [
    PostsProvider
  ]
})
export class PostDetailsPageModule {}
