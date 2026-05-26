import { Routes } from '@angular/router';
import { PollsCreateComponent } from './components/polls-create/polls-create.component';
import { PollsListComponent } from './components/polls-list/polls-list.component';
import { PollsDetailComponent } from './components/polls-detail/polls-detail.component';

export const routes: Routes = [
    {path:"newPoll",component:PollsCreateComponent},
    {path:"polls",component:PollsListComponent},
    {path:"pollsDetail/:id",component:PollsDetailComponent}

];
