import { Pipe, PipeTransform } from '@angular/core';
import { ENV } from '@env';
/**
 * Generated class for the ImagecdnPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'imagecdn',
})
export class ImagecdnPipe implements PipeTransform {
  transform(value: string) {
    var imagecdn = ENV.imagecdn;
    var result = value;
    imagecdn.forEach(element => {
      if (value.includes(element.origin)) {
        result = value.replace(element.origin, element.dest);
      } 
    });   
    return result;
  }
}