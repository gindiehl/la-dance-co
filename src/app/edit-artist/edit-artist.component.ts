import { Component, Input, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';
import { Project } from '../project.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-edit-artist',
  templateUrl: './edit-artist.component.html',
  styleUrls: ['./edit-artist.component.css'],
  providers: [ArtistService]
})

export class EditArtistComponent implements OnInit {
  @Input() selectedArtist;
  projects: FirebaseListObservable<any[]>;

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.projects = this.artistService.getProjects();
  }

}
