import { Component } from '@angular/core';
interface User {
  name: string;
  image: string;
}

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
})
export class StoriesComponent {
  constructor() {}

  ngOnInit() {}
  users: User[] = [
    {
      name: 'John Doe',
      image: 'assets/users/user1.png',
    },
    {
      name: 'Jane Smith',
      image: 'assets/users/user2.png',
    },
    {
      name: 'Bob Johnson',
      image: 'assets/users/user3.png',
    },
    {
      name: 'Bob Johnson',
      image: 'assets/users/user4.png',
    },
    {
      name: 'Bob Johnson',
      image: 'assets/users/user5.png',
    },
    {
      name: 'John Doe',
      image: 'assets/users/user1.png',
    },
    {
      name: 'Jane Smith',
      image: 'assets/users/user2.png',
    },
    {
      name: 'Bob Johnson',
      image: 'assets/users/user3.png',
    },
    {
      name: 'Bob Johnson',
      image: 'assets/users/user4.png',
    },
    {
      name: 'Bob Johnson',
      image: 'assets/users/user5.png',
    },
    {
      name: 'John Doe',
      image: 'assets/users/user1.png',
    },
    {
      name: 'Jane Smith',
      image: 'assets/users/user2.png',
    },
    {
      name: 'Bob Johnson',
      image: 'assets/users/user3.png',
    },
    {
      name: 'John Doe',
      image: 'assets/users/user1.png',
    },
    {
      name: 'Jane Smith',
      image: 'assets/users/user2.png',
    },
    {
      name: 'Bob Johnson',
      image: 'assets/users/user3.png',
    },
  ];
}