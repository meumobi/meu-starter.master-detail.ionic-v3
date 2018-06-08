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
      var origin = element.origin;
      var dest = element.dest;
      if (value.includes(origin)) {
        var att = value.split(origin);
        result =  dest + att[1];
      } 
    });   
    return result;
  }
}