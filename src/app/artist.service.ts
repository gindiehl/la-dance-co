import { Injectable } from '@angular/core';
import { Artist } from './artist.model';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class ArtistService {
  artists: FirebaseListObservable<any[]>;
  projects: FirebaseListObservable<any[]>;
  artist: FirebaseObjectObservable<any>;

  constructor(private database: AngularFireDatabase) {
    this.artists = database.list('artists');
    this.projects = database.list('projects');
  }

  getArtists() {
    return this.artists;
  }

  getProjects() {
    return this.projects;
  }

  getArtistById(artistId: string) {
    return this.database.object('/artists/' + artistId);
  }

  getProjectById(projectId: string) {
    return this.database.object('/artists/' + projectId);
  }

  addArtist(newArtist: Artist) {
    this.artists.push(newArtist);
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  updateArtist(localUpdatedArtist) {
    const artistEntryInFirebase = this.getArtistById(localUpdatedArtist.$key);
    artistEntryInFirebase.update(
      {
        name: localUpdatedArtist.name,
        position: localUpdatedArtist.position,
        bio: localUpdatedArtist.bio,
        project: localUpdatedArtist.project
      });
  }
  
  deleteArtist(localArtistToDelete){
    var artistEntryInFirebase = this.getArtistById(localArtistToDelete.$key);
    artistEntryInFirebase.remove();
  }
}
