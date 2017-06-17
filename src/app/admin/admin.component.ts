import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Artist } from '../artist.model';
import { Router } from '@angular/router';
import { ArtistService } from '../artist.service';
import { ProjectComponent } from '../project/project.component';
import { Project } from '../project.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArtistService]
})
export class AdminComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  artists: FirebaseListObservable<any[]>;
  artistName: string;
  currentRoute: string = this.router.url;

  constructor(
    private router: Router,
    private artistService: ArtistService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.projects = this.artistService.getProjects();
    this.artists = this.artistService.getArtists();
  }

  submitForm(name: string, position: string, bio: string, project: string) {
    const newArtist: Artist = new Artist(name, position, bio, project);
    this.artistService.addArtist(newArtist);
  }
}
