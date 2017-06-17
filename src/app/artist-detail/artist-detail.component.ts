import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Artist } from '../artist.model';
import { ArtistService } from '../artist.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css'],
  providers: [ArtistService]
})

export class ArtistDetailComponent implements OnInit {
  artistId: string;
  artistToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private artistService: ArtistService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.artistId = urlParameters['id'];
    });
    this.artistService.getArtistById(this.artistId).subscribe(subscribedArtist => {
      this.artistToDisplay = subscribedArtist;
    });
  }
}
