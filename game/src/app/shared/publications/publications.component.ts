import { Component } from '@angular/core';
interface UserModel {
  name: string;
  profilePic: string;
  description: string;
  picture: string;
}
@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
})
export class PublicationsComponent {
  users: UserModel[] = [
    {
      name: 'John Doe',
      profilePic: 'assets/users/user1.png',
      description:
        'Confira um clip feito no mapa Bind na live de hoje, estamos cada vez mais proximos... maisConfira um clip feito no mapa Bind na live de hoje, estamos cada vez mais proximos... maisConfira um clip feito no mapa Bind na live de hoje, estamos cada vez mais proximos... mais ',

      picture: 'assets/posts/post1.png',
    },
    {
      name: 'Jane Smith',
      profilePic: 'assets/users/user2.png',
      description:
        'Confira um clip feito no mapa Bind na live de hoje, estamos cada vez mais proximos... mais ',
      picture: 'assets/posts/post2.png',
    },
    {
      name: 'Alice Johnson',
      profilePic: 'assets/users/user3.png',
      description:
        'Confira um clip feito no mapa Bind na live de hoje, estamos cada vez mais proximos... mais ',
      picture: 'assets/posts/post3.png',
    },
    {
      name: 'Bob Williams',
      profilePic: 'assets/users/user4.png',
      description: 'UX/UI Designer',
      picture: 'assets/posts/post1.png',
    },
    {
      name: 'Eva Davis',
      profilePic: 'assets/users/user5.png',
      description: 'Data Scientist',
      picture: 'assets/posts/post2.png',
    },
  ];
}