import { Pipe, PipeTransform } from '@angular/core';
import { Artist } from './artist.model';

@Pipe({
  name: 'role',
  pure: false
})

export class RolePipe implements PipeTransform {
  transform(input: Artist[], selectedRole) {
    var output: Artist[] = [];
    if(selectedRole === "allArtists") {
      return input;
    }
    else {
      for(var i = 0; i < input.length; i++){
        if(input[i].position === selectedRole){
        output.push(input[i]);
      }
    }
    return output;
    }
  }
}
