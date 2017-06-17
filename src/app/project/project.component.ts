import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Artist } from '../artist.model';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ArtistService } from '../artist.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ArtistService]
})

export class ProjectComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
  }

  submitProject(title: string, type: string, year: string) {
    const newProject: Project = new Project(title, type, year);
    this.artistService.addProject(newProject);
  }
}
