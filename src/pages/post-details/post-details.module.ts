import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PostDetailsPage } from './post-details';
import { PostsProvider } from '@providers/posts';
import { IonicImageViewerModule } from 'ionic-img-viewer';


@NgModule({
  declarations: [
    PostDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PostDetailsPage),
    IonicImageViewerModule,
  ],
  providers: [
    PostsProvider
  ]
})
export class PostDetailsPageModule {}
