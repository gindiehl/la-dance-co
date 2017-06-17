import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Artist } from '../artist.model';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ArtistService } from '../artist.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArtistService]
})

export class HomeComponent {
  projects: FirebaseListObservable<any[]>;
  artists: FirebaseListObservable<any[]>;

  constructor(private router: Router, private artistService: ArtistService) { }

  ngOnInit() {
    this.projects = this.artistService.getProjects();
    this.artists = this.artistService.getArtists();
  }

  goToProject(projectId) {
    this.router.navigate(['artists', projectId]);
  };

  findArtistsByProject(project) {
  }

}
