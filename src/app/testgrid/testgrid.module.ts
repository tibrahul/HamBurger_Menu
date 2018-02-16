import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SengComponent } from './seng.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { TestGridService } from './testgrid.service';

@NgModule({
    declarations: [
        SengComponent
    ],
    imports: [
        CKEditorModule,
        RouterModule.forChild([
            { path: 'Seng', component: SengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        TestGridService
    ]
})

export class TestGridModule {

}