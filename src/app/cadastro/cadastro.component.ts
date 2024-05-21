import { Component } from '@angular/core';
import { AbstractControl, Form, FormBuilder, MaxLengthValidator, Validators } from '@angular/forms';
import { CustomValidator } from '../validator/custom-validator';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  ocultarSenha = true;

  constructor(private formBuilder: FormBuilder) {}

  cadastroForm = this.formBuilder.group({
    nome : this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]),
    email : this.formBuilder.control('', [Validators.required, Validators.email, Validators.maxLength(40)] ),
    usuario: this.formBuilder.control('', [Validators.required, Validators.maxLength(15), CustomValidator.contemEspacos]),
    senha : this.formBuilder.control('', [Validators.required, Validators.pattern("(?=.*[A-Z])(?=.*[!.@#$&*])(?=.*[0-9])(?!.* ).{8,16}$")]),
    confirmarSenha : ['', [Validators.required]]
   },
   {
   validators: [
    CustomValidator.mesmasSenhas("senha", "confirmarSenha")
  ]
  });

  onEnviar(){
    console.table(this.cadastroForm.value);
  }
}
