import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from 'src/app/modal-message/modal-message.component';
import { Message } from 'src/app/model/message';
import { CompanyService } from 'src/app/service/company.service';
import { MessageService } from 'src/app/service/message.service';
import { Functions } from 'src/app/shared/functions';

@Component({
  selector: 'app-find-register',
  templateUrl: './find-register.component.html',
  styleUrls: ['./find-register.component.scss']
})
export class FindRegisterComponent implements OnInit {
  constructor(
    public router: Router,
    private readonly companyService: CompanyService,
    private messageService:MessageService,
    private modalService: NgbModal,
    public funcShare: Functions
  ){}

  ngOnInit(): void {
  }

  findRegister(identificationNumber:string) {
    this.companyService.findRegister(identificationNumber).subscribe(
      respose =>{

        this.router.navigate(['/company/registro'], {  queryParams: {id: respose.company.identificationNumber}});
      },
      er => {
        const modalRef = this.modalService.open(NgbdModalContent);
        const message:Message = {
          title: 'Información',
          code: er.error.error.code,
          description: er.error.error.description

        }
        modalRef.componentInstance.message = message;
        modalRef.result.then(() => {
          this.router.navigate(['/company/registro'], {  queryParams: {id:identificationNumber}});
        })
      }
    );

  }
}
