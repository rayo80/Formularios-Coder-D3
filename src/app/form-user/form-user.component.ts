import { Component,EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {
  formUsuario: FormGroup;
  error=false
  @Output() UserAdded = new EventEmitter<any>();
  constructor(    
    private fbuild: FormBuilder     
  ) { }

  ngOnInit(): void {
  this.formUsuario = this.fbuild.group({
      user: ['', [Validators.required, Validators.minLength(4)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.email],
      edad:['',[Validators.required, Validators.maxLength(2)]],
  });
  }

  agregar(){
    if((this.formUsuario.status != 'INVALID')){     
      this.UserAdded.emit(this.formUsuario.value)
      this.error =false 
    }else{
      this.error=true;
      console.log(this.formUsuario)
    }
  }
  touchedvalidate(field: string, type_validate:string){
    return this.formUsuario.get(field)?.touched && this.formUsuario.get(field)?.errors?.[type_validate]
  }
}
