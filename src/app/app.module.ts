import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './tests/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './tests/my-nav/my-nav.component';

//Material
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';

import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule, MatTableModule, MatPaginatorModule, MatSortModule,
} from '@angular/material';
import { MatInputModule } from '@angular/material/input';

import { LayoutModule } from '@angular/cdk/layout';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserMainComponent } from './user-main/user-main.component';

//Tables
import { ShouldersTableComponent } from './tables/shoulders-table/shoulders-table.component';
import { ChestTableComponent } from './tables/chest-table/chest-table.component';
import { LungeTableComponent } from './tables/lunge-table/lunge-table.component';
import { ToolbarHeaderComponent } from './toolbar-header/toolbar-header.component';
import { UserNavsComponent } from './nav-bars/user-navs/user-navs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { HeaderComponent } from './nav-bars/header/header.component';

//App router
const appRoutes: Routes = [
  { path: '', component: SignInComponent },
  {
    path: 'userMain',
    component: UserMainComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'old-dash', component: MainDashComponent },
      { path: 'main-dash', component: MainDashComponent },
      { path: 'chestt', component: ChestTableComponent },
      { path: 'lunget', component: LungeTableComponent },
      { path: 'shouldert', component: ShouldersTableComponent }
    ]
  },
  // { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MyNavComponent,
    SignInComponent,
    UserMainComponent,
    ShouldersTableComponent,
    ChestTableComponent,
    LungeTableComponent,
    ToolbarHeaderComponent,
    UserNavsComponent,
    DashboardComponent,
    MainDashComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
