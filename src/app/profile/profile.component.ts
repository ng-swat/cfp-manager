import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import {select} from "@angular-redux/store";
import {ProfileService} from "./profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @select('user') public user;
  @select('profile') public profile;
  public ProfileForm: FormGroup;
  public Email:string;
  public CompanyArray: FormArray;
  public RoleArray: FormArray;



  constructor(private builder: FormBuilder, private service:ProfileService) {
    this.user.subscribe((value) => {
      if(value.user) {
        this.service.retrieveProfile(value.user);
      }
    });
    this.profile.subscribe((value) => {
      if(value.profile && value.profile.EmploymentInfo) {
        this.updateEmploymentInfo(value.profile.EmploymentInfo);
      }
    });

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
        AllowImageUsage: [false, [
          Validators.required
        ]],
        Biography: [null, [
          Validators.required
        ]]
      }),
      EmploymentInfo: builder.group({
        Company:builder.array([builder.control('')]),//builder.control('toto')]),
        Role:builder.array([builder.control('')])
      }),
      Social: builder.group({
        Nationality: ['', [
          Validators.required
        ]],
        CityCountry: ['', [
          Validators.required
        ]],
        Phone: ['', [
          Validators.required
        ]],
        Website: ['', [
          Validators.required
        ]],
        Twitter: ['', [
          Validators.required
        ]],
        Facebook: ['', [
          Validators.required
        ]],
        Linkedin: ['', [
          Validators.required
        ]],
        Git: ['', [
          Validators.required
        ]]
      }),
      Languages: builder.group({
        Primary: ['', [
          Validators.required
        ]],
        Secondary: ['', [
          Validators.required
        ]],
        Third: ['', [
          Validators.required
        ]],
        Fourth: ['', [
          Validators.required
        ]]
      }),
      CommunityInfo: builder.group({
        IsCommunityMember: [false, [
          Validators.required
        ]],
        Community: ['', [
          Validators.required
        ]]
      }),
      Agreement: builder.group({
        Agrees: [false, [
          Validators.required
        ]],
      })
    });

  }

  private updateEmploymentInfo(employments):void  {
    this.resetEmployment();
    if(employments.Company.length < 1) return;
    for( let i = 0; i < employments.Company.length; i++) {
      this.addEmployementInfo(employments.Company[i], employments.Role[i]);
    }
  }

  private resetEmployment() {
    //this.Company.reset();
    //this.Role.reset();
    for(let i = 0; i < this.Company.length; i++) {
      this.Company.removeAt(i);
      this.Role.removeAt(i)
    }
  }

  public addEmptyPosition(): void {
    this.addEmployementInfo('', '');
  }

  private addEmployementInfo(company:string, name:string): void {
    this.Company.push(this.builder.control(company));
    this.Role.push(this.builder.control(name));
  }

  get GeneralInfo(): FormGroup{
    return <FormGroup> this.ProfileForm.get('GeneralInfo');
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

  get EmploymentInfo(): FormGroup {
    return <FormGroup> this.ProfileForm.get('EmploymentInfo');
  }
  get Company(): FormArray {
    return <FormArray> this.ProfileForm.get('EmploymentInfo').get('Company');
  }
  get Role(): FormArray {
    return <FormArray> this.ProfileForm.get('EmploymentInfo').get('Role');
  }

  get Social(): FormGroup{
    return <FormGroup> this.ProfileForm.get('Social');
  }
  get Nationality(): FormControl{
    return <FormControl> this.Social.get('Nationality');
  }
  get CityCountry(): FormControl{
    return <FormControl> this.Social.get('CityCountry');
  }
  get Phone(): FormControl{
    return <FormControl> this.Social.get('Phone');
  }
  get Website(): FormControl{
    return <FormControl> this.Social.get('Website');
  }
  get Twitter(): FormControl{
    return <FormControl> this.Social.get('Twitter');
  }
  get Facebook(): FormControl{
    return <FormControl> this.Social.get('Facebook');
  }
  get Linkedin(): FormControl{
    return <FormControl> this.Social.get('Linkedin');
  }
  get Git(): FormControl{
    return <FormControl> this.Social.get('Git');
  }

  get Languages(): FormGroup{
    return <FormGroup> this.ProfileForm.get('Languages');
  }
  get Primary(): FormControl{
    return <FormControl> this.Languages.get('Primary');
  }
  get Secondary(): FormControl{
    return <FormControl> this.Languages.get('Secondary');
  }
  get Third(): FormControl{
    return <FormControl> this.Languages.get('Third');
  }
  get Fourth(): FormControl{
    return <FormControl> this.Languages.get('Fourth');
  }

  get CommunityInfo(): FormGroup{
    return <FormGroup> this.ProfileForm.get('CommunityInfo');
  }
  get IsCommunityMember(): FormControl{
    return <FormControl> this.CommunityInfo.get('IsCommunityMember');
  }
  get Community(): FormControl{
    return <FormControl> this.CommunityInfo.get('Community');
  }

  get Agreement(): FormGroup{
    return <FormGroup> this.ProfileForm.get('Agreement');
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
