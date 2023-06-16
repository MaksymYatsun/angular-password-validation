import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength-indicator',
  templateUrl: './password-strength-indicator.component.html',
  styleUrls: ['./password-strength-indicator.component.css']
})
export class PasswordStrengthIndicatorComponent {
  password: string = '';
  status: string = '';

  calculateStrength() {
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(this.password);

    if (this.password.length < 8) {
      this.status = 'short'
    }  else if ((hasLetters && hasDigits && !hasSymbols) || (hasLetters && hasSymbols && !hasDigits) || (hasDigits && hasSymbols && !hasLetters)) {
      this.status = 'medium';
    } else if (hasLetters && hasDigits && hasSymbols){
      this.status = 'strong';
    } else {
      this.status = 'easy';
    }
  }
}

