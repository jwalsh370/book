import {Pipe, PipeTransform} from '@angular/core';
import {Book } from './book.model';

@Pipe({
  name:"genre",
  pure: false
})


export class GenrePipe implements PipeTransform {
  transform(input: Book[], selectGenre){
    var output: Book[] = [];
      if(selectGenre === "allGenres") {
        return input;
      } else  {
        for(var i = 0; i < input.length; i++){
          if(input[i].genre.includes(selectGenre)) {
            output.push(input[i]);
          }
        }
        return output;
      }
  }

}
