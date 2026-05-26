import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-polls-create',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './polls-create.component.html',
  styleUrl: './polls-create.component.scss'
})
export class PollsCreateComponent {
    title:string=""


    constructor(private api:ApiService){}
    postPoll()
    {
      if(this.title=="")
      {
        return alert("Minden mező kitöltése kötelező!");
      }

      this.api.insert("polls",this.title).subscribe({
        next:()=>alert("Sikeres feltöltés!"),
        error:(err)=>console.log(err)
      })



    }



}
