import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class Functions {
    public validarCorreo(email: string): boolean {
        const expresion = new RegExp(
          // tslint:disable-next-line: max-line-length
          /^(([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+)(([\s]*[;,]+[\s]*(([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+))*)$/g,
        );
        const evaluaEmail = expresion.test(email);
        return evaluaEmail ? true : false;
      }
    
      public validNumber(event: any) {
        const regexpNumber = /[0-9\+\-\ ]/;
        let inputCharacter = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
          event.preventDefault();
        }
      }
    
      public validLetter(event: any) {
        const regexpNumber = /^[A-Za-z ]+$/;
        let inputCharacter = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
          event.preventDefault();
        }
      }
}
