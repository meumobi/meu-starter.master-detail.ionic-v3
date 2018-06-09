import { Pipe, PipeTransform } from '@angular/core';
import { ENV } from '@env';

/** 
 * img.src | imgServerSrcsettify
 * Should convert '/uploads/items/6981759.png' on
 * 
 *  http://vps548719.ovh.net/meumobi//items/6981759.png?width=2048 2048w,
    http://vps548719.ovh.net/meumobi//items/6981759.png?width=1024 1024w,
    http://vps548719.ovh.net/meumobi//items/6981759.png?width=800 800w
*/

@Pipe({
  name: 'imgServerSrcsettify'
})
export class ImgServerSrcsettifyPipe implements PipeTransform {
  sizes = [2048, 1024, 800];

  transform(src: string) {

    return this.sizes.map((width) => {
      return ENV.imgServer.url + src + "?width=" + width + " " + width + "w"
    }).toString();
  }
}