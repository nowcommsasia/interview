import { Component, OnInit } from '@angular/core';
import { Note } from 'src/classes/note';
import { NotesService } from 'src/services/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  allNotes: Note[] = [];

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    // Example to get data from Firebase
    this.notesService.getAllNotes().subscribe((res: any) => {
      let documents = res.docs;
      for (let i = 0; i < documents.length; i++) {
        this.allNotes.push(documents[i].data());
      }
      console.log(this.allNotes)
    });
  }
}
