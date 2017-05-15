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
      } else if (selectGenre === "comic") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].genre === "comic") {
              output.push(input[i]);
            }
          }
          return output;
        }  else if (selectGenre === "history") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].genre === "history") {
              output.push(input[i]);
            }
          }
          return output;
        } else if (selectGenre === "horror") {
           for (var i = 0; i < input.length; i++) {
             if (input[i].genre === "horror") {
               output.push(input[i]);
             }
           }
           return output;
         }  else if (selectGenre === "comedy") {
           for (var i = 0; i < input.length; i++) {
             if (input[i].genre === "comedy") {
               output.push(input[i]);
             }
           }
           return output;
         }  else if (selectGenre === "fantasy") {
           for (var i = 0; i < input.length; i++) {
             if (input[i].genre === "fantasy") {
               output.push(input[i]);
             }
           }

           return output;
         }  else if (selectGenre === "trueCrime") {
           for (var i = 0; i < input.length; i++) {
             if (input[i].genre === "trueCrime") {
               output.push(input[i]);
             }
           }
           return output;
         }  else if (selectGenre === "sci-fi") {
           for (var i = 0; i < input.length; i++) {
             if (input[i].genre === "sci-fi") {
               output.push(input[i]);
             }
           }
           return output;
         }  else if (selectGenre === "autobiography") {
           for (var i = 0; i < input.length; i++) {
             if (input[i].genre === "autobiography") {
               output.push(input[i]);
             }
           }
           return output;
         }  else if (selectGenre === "other") {
           for (var i = 0; i < input.length; i++) {
             if (input[i].genre === "other") {
               output.push(input[i]);
             }
           }
           return output;

  }

 }
}
