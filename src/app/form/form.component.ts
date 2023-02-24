import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../core/model/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user!: User;

  constructor() { }

  ngOnInit(): void {
    this.user=new User();
  }
  save(f:NgForm)
  {
    console.log(f.value['login'])
  }

}
