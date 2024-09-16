import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './views/feed/feed.component';
import { UserLayoutComponent } from './views/user-layout/user-layout.component';


const routes: Routes = [{ path: '', redirectTo: 'auth', pathMatch: 'full' },{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
 
{
  path: 'dashboard',
  component: UserLayoutComponent,
  children: [
    {
      path: 'user',
      loadChildren: () =>
        import('./user/user.module').then((m) => m.UserModule),
    },
    {
      path: 'feed',
      component: FeedComponent,
    },
  ],
},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}