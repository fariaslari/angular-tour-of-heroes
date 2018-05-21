import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hero }    from '../../model/hero';
import { Address }    from '../../model/address';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  @Input() editMode: Boolean;
  @Input() hero: Hero;
  heroForm: FormGroup; 
  heroModel= new Hero();
  powers: String[];
  submitted = false;
  newAddress = true;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.getPowers();
    if(this.hero){
      this.heroModel = this.hero;
    }
    if(this.heroModel.addresses && this.heroModel.addresses.length > 0)
      this.newAddress = false;

    this.createForm();
  }

    
  createForm() {
    console.log()
    this.heroForm = this.fb.group({
      name: [this.heroModel.name, Validators.required],
      alterEgo: [this.heroModel.alterEgo],
      power: [this.heroModel.power, Validators.required],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      })
    });
  }

  getPowers(): void {
    this.heroService.getPowers()
        .subscribe(powers => this.powers = powers);
  }

  onSubmit(hero: Hero) { 
    this.heroModel.name = hero.name;
    this.heroModel.alterEgo = hero.alterEgo;
    this.heroModel.power = hero.power;

    if(this.editMode)
      this.heroService.updateHero(this.heroModel)
      .subscribe(() => this.goBack());
    else{
      this.submitted = true;
      this.heroService.addHero(this.heroModel).subscribe();
    }
  }
  
  goBack(): void {
    this.location.back();
  }

  removeAddress(address: number){
    this.heroModel.addresses.splice(address, 1);
  }

  addAddressToList(addressForm: any){
    let address: Address = {
      street: addressForm.street,
      city: addressForm.city,
      state: addressForm.state,
      zip: addressForm.zip
    }
    
    if(!this.heroModel.addresses)
      this.heroModel.addresses = [];

    this.heroModel.addresses.push(address);
  }

}
