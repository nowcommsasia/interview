import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

// Firestore API
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class NotesService {

  constructor(
    private afs: AngularFirestore,
    public router: Router,
  ) {}

  getAllNotes() {
    return this.afs.collection("notes").get();
  }
}
