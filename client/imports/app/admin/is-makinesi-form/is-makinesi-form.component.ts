import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'imports/environment';

import { NgForm } from '@angular/forms';
import { IsMakinesi } from 'imports/models/IsMakinesi';

@Component({
  selector: 'app-is-makinesi-form',
  templateUrl: './is-makinesi-form.component.html',
  styleUrls: ['./is-makinesi-form.component.css']
})
export class IsMakinesiFormComponent implements OnInit {

  editing: boolean = false;
  isMakinesi: IsMakinesi = null;
  errorMessage: string;
  baseUrl: string = environment.baseUrlIsmakinesi;
  isLoading: boolean = false;

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    this.editing = activeRoute.snapshot.params.mode === 'edit';
    if (this.editing) {

      const va = Meteor.call('findByIdIsMakinesi');
      console.log(va);


    } else {
      this.isMakinesi = new IsMakinesi("");
    }
  }

  ngOnInit(): void {
  }

  save(form: NgForm) {
    this.isLoading = true;
    if (this.editing) {

    } else {
      Meteor.call('addIsMakinesi', this.isMakinesi);
      this.router.navigateByUrl(this.baseUrl);
    }
  }

}
