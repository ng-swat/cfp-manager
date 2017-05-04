import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public ProfileForm: FormGroup;
  public Email:string;

  constructor(builder: FormBuilder) {
    this.Email = 'maximedenoun@gmail.com';
    this.ProfileForm = builder.group({
      GeneralInfo: builder.group({
        Image: [null],
        Name: [null, [
          Validators.required
        ]],
        Surname: [null, [
          Validators.required
        ]],
        AllowImageUsage: ['true', [
          Validators.required
        ]],
        Biography: [null, [
          Validators.required
        ]]
      }),
      Agreement: builder.group({
        Agrees: ['true', [
          Validators.required
        ]],
      })
    });

  }

  get GeneralInfo(): FormControl{
    return <FormControl> this.ProfileForm.get('GeneralInfo');
  }
  get Name(): FormControl{
    return <FormControl> this.GeneralInfo.get('Name');
  }
  get Surname(): FormControl{
    return <FormControl> this.GeneralInfo.get('Surname');
  }
  get AllowImageUsage(): FormControl{
    return <FormControl> this.GeneralInfo.get('AllowImageUsage');
  }
  get Biography(): FormControl{
    return <FormControl> this.GeneralInfo.get('Biography');
  }

  get Agreement(): FormControl{
    return <FormControl> this.ProfileForm.get('Agreement');
  }
  get Agrees(): FormControl{
    return <FormControl> this.Agreement.get('Agrees');
  }

  private checkError(field) {
    if(field.control.errors !== null) {
      console.group(`${field.label} errors`);
      console.log(field.control.errors);
      console.groupEnd();
    }
  }

  public save() {
    this.checkError({control:this.Name, label:'Name'});
    this.checkError({control:this.Surname, label:'Surname'});
    this.checkError({control:this.AllowImageUsage, label:'AllowImageUsage'});
    this.checkError({control:this.Biography, label:'Biography'});
    this.checkError({control:this.Agrees, label:'Agrees'});
    if(this.ProfileForm.valid) {
      console.log(this.ProfileForm.value);
    }
  }

  ngOnInit() {
  }

}
