import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { CompanyService } from 'src/app/service/company.service';
import { TypeIdentification } from 'src/app/enum/type-identification';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Message } from 'src/app/model/message';
import { NgbdModalContent } from 'src/app/modal-message/modal-message.component';
import { Functions } from 'src/app/shared/functions';

@Component({
  selector: 'app-create-register',
  templateUrl: './create-register.component.html',
  styleUrls: ['./create-register.component.scss']
})
export class CreateRegisterComponent implements OnInit {
  public companyForm!: FormGroup;
  private idCompany: string ='';
  public company!:Company;
  public idIdentificationType:Number = TypeIdentification.Cedula_Ciudadania;
  public typeIdentificationList: any[] = [];
 
  constructor(
    public router: Router,
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly companyService: CompanyService,
    public funcShare: Functions,
    private modalService: NgbModal
  ) { }

  get form(){
    return this.companyForm.controls;
  }
  ngOnInit(): void {
    this.listarTypeIdentification();
    this.inicializarFormulario();
    this.obtenerIdCompany();
    this.obtenerCompany();
  }

  listarTypeIdentification(){
    for (let type in TypeIdentification) {
      if (isNaN(Number(type))) {
          this.typeIdentificationList.push({ text: type.replace('_', ' '), value: TypeIdentification[type] })
      }
    }
  }

  changeTypeIdentification(id: string){
    this.form.companyName.clearValidators();
    this.form.firstName.clearValidators();
    this.form.secondName.clearValidators();
    this.form.firstLastname.clearValidators();
    this.form.secondLastname.clearValidators();

    if (TypeIdentification.NIT.valueOf() === parseInt(id) || 
        TypeIdentification.Identificacion_Extrajera.valueOf() === parseInt(id)) {
      this.form.companyName.setValidators([Validators.required]);
    }else {
      this.form.firstName.setValidators([Validators.required]);
      this.form.secondName.setValidators([Validators.required]);
      this.form.firstLastname.setValidators([Validators.required]);
      this.form.secondLastname.setValidators([Validators.required]);
    }

    this.form.companyName.updateValueAndValidity();
    this.form.firstName.updateValueAndValidity();
    this.form.secondName.updateValueAndValidity();
    this.form.firstLastname.updateValueAndValidity();
    this.form.secondLastname.updateValueAndValidity();
  }

  back(){
    this.router.navigate(['/company']);
  }

  save(){
    this.company = this.companyForm.value;
    this.company.identificationType = parseInt(this.company.identificationType.toString());

    if (this.companyForm.invalid) {
      const message:Message = {
        title: 'Información',
        code: 'Se deben diligenciar todos los campos que son obligatorios(*)',
        description: ''
      }
      this.showMessage(message, false);
      return;
    }

    if (!this.funcShare.validarCorreo(this.companyForm.value.email)) {
      const message:Message = {
        title: 'Información',
        code: 'El formato del correo no es válido',
        description: ''
      }
      this.showMessage(message, false);
      return;
    }


    if (this.company.id.toString() === "")
      this.create();
    else
      this.update();
  }

  private create(){
    this.companyService.createRegister(this.company.id, this.company).subscribe(
      () => {
        const message:Message = {
          title: 'Información',
          code: 'Registro Creado Exitosamente!',
          description: ''
        }
        this.showMessage(message);
      },
      er => {
        const message:Message = {
          title: 'Información',
          code: er.error.error.code,
          description: er.error.error.description
        }
        this.showMessage(message,false);
      }
    );
  }

  private update(){
    this.companyService.updateRegister(this.company.id, this.company).subscribe(
      () => {
        const message:Message = {
          title: 'Información',
          code: 'Registro Actualizado Exitosamente!',
          description: ''
        }
        this.showMessage(message);
      },
      er => {
        const message:Message = {
          title: 'Información',
          code: er.error.error.code,
          description: er.error.error.description
        }
        this.showMessage(message, false);
      }
    );
  }

  private showMessage(message:Message, back:boolean = true){
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.message = message;
    if (back) {
      modalRef.result.then(()=> this.back());
    }
  }

  private obtenerIdCompany(): void {
    this.idCompany = this.route.snapshot.queryParamMap.get('id') || '';
  }

  private obtenerCompany():void {
    this.companyService.findRegister(this.idCompany).subscribe(
      (data) =>{
        if(data.success){
          this.company = data.company;
          this.setValuesForm();
        }
      },
      () => this.changeTypeIdentification("0")
    )
  }

  private inicializarFormulario(): void {
    this.companyForm = this.fb.group({
      id: '',
      identificationType: ['', Validators.required ],
      identificationNumber: ['', Validators.required],
      companyName: '',
      firstName: '',
      secondName: '',
      firstLastname: '',
      secondLastname: '',
      email: ['', Validators.required ],
      sendMessage: false,
      sendEmail: false
    });
  }

  private setValuesForm(){
    this.form.id.setValue(this.company?.id);
    this.form.identificationNumber.setValue(this.company?.identificationNumber);
    this.form.identificationType.setValue(this.company?.identificationType);
    this.form.companyName.setValue(this.company?.companyName);
    this.form.firstName.setValue(this.company?.firstName);
    this.form.secondName.setValue(this.company?.secondName);
    this.form.firstLastname.setValue(this.company?.firstLastname);
    this.form.secondLastname.setValue(this.company?.secondLastname);
    this.form.email.setValue(this.company?.email);
    this.form.sendMessage.setValue(this.company?.sendMessage);
    this.form.sendEmail.setValue(this.company?.sendEmail);

    this.changeTypeIdentification(this.company?.identificationType.toString())
  }

}
