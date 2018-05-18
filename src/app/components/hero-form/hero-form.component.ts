import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Location } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hero }    from '../../model/hero';

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

  constructor(
    private heroService: HeroService,
    private location: Location,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.getPowers();
    if(this.hero){
      console.log(this.hero)
      this.heroModel = this.hero;
    }
    this.createForm();
  }

    
  createForm() {
    console.log()
    this.heroForm = this.fb.group({
      name: [this.heroModel.name, Validators.required],
      alterEgo: [this.heroModel.alterEgo],
      power: [this.heroModel.power, Validators.required],
      address: this.fb.group({ // <-- the child FormGroup
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required]
      }),
    });
  }

  getPowers(): void {
    this.heroService.getPowers()
        .subscribe(powers => this.powers = powers);
  }

  onSubmit(hero: Hero) { 
    if(this.editMode)
      this.heroService.updateHero(hero)
      .subscribe(() => this.goBack());
    else{
      this.submitted = true;
      this.heroService.addHero(hero).subscribe();
    }
  }
  

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
