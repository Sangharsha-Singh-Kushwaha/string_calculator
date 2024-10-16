import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }

  add(userInput: string): number{
    userInput = userInput?.trim() //trimming the user input 
    if (!userInput) {
      return 0; // if user enter empty string directly returing zero
    }

    if (userInput?.startsWith('//')) { // if user input have custom delimiters 
      let endIndexOfDelimiter = userInput?.indexOf('\\');
      userInput = userInput?.substring(endIndexOfDelimiter + 2); // Removing the custom delimiters declaration
    }

    let matchesNubers = userInput?.match(/-?\d+/g); // Using regex to find all numbers in the string including negative number
    const numbersCollection = matchesNubers ? matchesNubers?.map(Number) : []; //Converting matches to numbers and return as numbersCollection array
    let negatives: any = [];
    let sum:number = 0;
    numbersCollection?.forEach((ele:any) =>{
      ele < 0 ? negatives?.push(ele) : sum +=ele > 1000 ? 0 : ele;
    })

    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives?.join(', ')}`);
    }
    return sum;
  }
}
