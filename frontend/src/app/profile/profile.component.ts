import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user = {
    name: 'John Doe',
    nic_number:'123we3',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address:'kalutara',
    pNumber: '034221212',

  };

  sidebarVisible: boolean = false;
  profileForm!: FormGroup;
  isEditing = false;
  hideButton = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: [this.user.name],
      nic_number:[this.user.nic_number],
      email: [this.user.email],
      phone: [this.user.phone],
      address:[this.user.address],
      pNumber:[this.user.pNumber]


    });
  }

  enableEdit() {
    this.isEditing = true;
  }

  saveProfile() {
    this.user = this.profileForm.value;
    this.isEditing = false;
  }

  cancelEdit() {
    this.profileForm.patchValue(this.user);
    this.isEditing = false;
  }
}