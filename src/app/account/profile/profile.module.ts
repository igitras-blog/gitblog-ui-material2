import { ProfileRoutingModule } from './profile.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule
    ],
    declarations: [
        ProfileComponent,
        ViewProfileComponent,
        EditProfileComponent
    ]
})
export class ProfileModule { }
