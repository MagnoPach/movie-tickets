import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {

  public userSignUpForm!: FormGroup
  public isMobile: boolean = false;
  public isLoaded: boolean = false;
  public modalOpen: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.userSignUpForm = new FormGroup({
      nome: new FormControl<string|null>('', Validators.required),
      email: new FormControl<string|null>('', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\.]+)@[a-z]+(\.[a-z]+){1,2}$/i)]),
      celphone: new FormControl<string|null>('', [Validators.required, Validators.pattern("^[0-9]+$")]),
      agree_notifications: new FormControl<boolean|null>(false),
      agree_terms: new FormControl<boolean|null>(false, Validators.requiredTrue),
    });
  }

  get nome() {
    return this.userSignUpForm.get('nome')!;
  }

  get email() {
    return this.userSignUpForm.get('email')!;
  }

  get celphone() {
    return this.userSignUpForm.get('celphone')!;
  }

  get agree_notifications() {
    return this.userSignUpForm.get('agree_notifications')!;
  }

  get agree_terms() {
    return this.userSignUpForm.get('agree_terms')!;
  }

  public exibirResponseUserProfileForm(): void {
		this.modalOpen = true;
    setTimeout(() => {
      this.modalOpen = false;
      this.router.navigate(['/'], {replaceUrl:true})
    }, 4500);
	}

  public onSubmit(): void {
    if (this.userSignUpForm.valid) {
      this.exibirResponseUserProfileForm()
      console.log('User Data:',this.userSignUpForm.value)
		} else {
			Object.keys(this.userSignUpForm.controls).forEach(campo => {
				this.userSignUpForm?.get(campo)?.markAsDirty();
			});
		}
	}
}
