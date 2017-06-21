import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Artist } from '../artist.model';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ArtistService } from '../artist.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
  providers: [ArtistService]
})

export class ArtistsComponent implements OnInit {
  artists: FirebaseListObservable<any[]>;
  projects: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByRole: string = "allArtists";
  projectIdToFind;
  key;

  constructor(
    private router: Router,
    private artistService: ArtistService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.artists = this.artistService.getArtists();
    this.projects = this.artistService.getProjects();
    this.route.params.forEach((urlParameters) => {
      this.key = urlParameters['project'];
    });
  }

  onChange(menuOption){
    this.filterByRole = menuOption;
  }
  goToDetailPage(clickedArtist) {
    this.router.navigate(['artists', clickedArtist.$key]);
  };

}
