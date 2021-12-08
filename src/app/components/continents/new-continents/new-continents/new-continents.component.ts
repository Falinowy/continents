import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Continents } from 'src/app/module/continents';
import { CountriesService } from 'src/app/service/countries.service';

@Component({
  selector: 'app-new-continents',
  templateUrl: './new-continents.component.html',
  styleUrls: ['./new-continents.component.scss']
})
export class NewContinentsComponent implements OnInit {
  continentForm: FormGroup;
  errorMessage = '';
  continents: Continents| null;
  constructor(private countriesService: CountriesService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.buildForm();
  }
  onFormSubmit(): void {
    if (this.continentForm.get('name').value !=null) {
      this.dialog.ngOnDestroy();
    }
    console.log(this.continentForm.value);
    this.saveContinent(this.continentForm.value);

}
private buildForm() {
  this.continentForm = new FormGroup({
    name: new FormControl(),
    region: new FormControl(),
});
}

saveContinent(continent: Continents): void {
  if (this.continentForm.valid) {
    if (this.continentForm.dirty) {
      const continents = { ...continent, ...this.continentForm.value };
        console.log('5');
        this.countriesService.createProduct(continents).subscribe({
          error: err => this.errorMessage = err
        });
    }
  }
}

}
