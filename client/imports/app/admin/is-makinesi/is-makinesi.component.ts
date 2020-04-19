import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from 'imports/environment';

import { Observable ,Subscription } from 'rxjs';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

import { IsMakinesi } from 'imports/models/IsMakinesi';
import { IsMakinesies } from 'imports/collections/isMakinesies';


@Component({
  selector: 'app-is-makinesi',
  templateUrl: './is-makinesi.component.html',
  styleUrls: ['./is-makinesi.component.css']
})
export class IsMakinesiComponent implements OnInit {

  selectedIsMakinesi: IsMakinesi;
  isMakinesiList: Observable<IsMakinesi[]>; 
  isLoading: boolean = false;
  baseUrl: string = environment.baseUrlIsmakinesi;

  isMakinesiListSubscription: Subscription;

  @ViewChild('closebutton') closebutton;

  constructor() { }

  ngOnInit(): void {
    this.isMakinesiListSubscription = MeteorObservable.subscribe('isMakinesiList').subscribe(() => {
      this.isMakinesiList = IsMakinesies.find();
    });
  }

  setSelected(data: IsMakinesi) {
    this.selectedIsMakinesi = data;
  }

  delete() {
    Meteor.call('removeIsMakinesi', this.selectedIsMakinesi._id);
    this.closebutton.nativeElement.click();
  }
}

