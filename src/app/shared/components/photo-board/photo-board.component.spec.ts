import { PhotoBoardModule } from './photo-board.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoBoardComponent } from './photo-board.component';
import { Photo } from './interfaces/photo';
import { Component, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

function buildPhotoList(): Photo[] {
  const photos: Photo[] = [];

  for(let i = 0; 1 < 8; i++) {
    photos.push({
      id: i + 1,
      url: '',
      description: ''
    });
  }
  return photos;
}

describe(PhotoBoardComponent.name, () => {
  let fixture: ComponentFixture<PhotoBoardTestComponent>;
  let component: PhotoBoardTestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoBoardTestComponent],
      imports: [PhotoBoardModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardTestComponent);
    component = fixture.componentInstance;
  });

  it(`Should display rows and columns when (@Input photos) has value`, () => {
    component.photos = buildPhotoList();
    fixture.detectChanges();

    expect(component.board.rows.length)
      .withContext('Number of rows')
      .toBe(2);
    expect(component.board.rows[0].length)
      .withContext('Number of columns from the first row')
      .toBe(4);
    expect(component.board.rows[0].length)
      .withContext('Number of columns from the second row')
      .toBe(4);
  });
})

@Component({
  template: `
    <app-photo-board [photos]="photos">

    </app-photo-board>`
})
class PhotoBoardTestComponent {
  @ViewChild(PhotoBoardComponent) public board: PhotoBoardComponent;
  public photos: Photo[] = [];
}



// import { PhotoBoardModule } from './photo-board.module';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { PhotoBoardComponent } from './photo-board.component';
// import { Photo } from './interfaces/photo';
// import { SimpleChange, SimpleChanges } from '@angular/core';

// function buildPhotoList(): Photo[] {
//   const photos: Photo[] = [];

//   for(let i = 0; 1 < 8; i++) {
//     photos.push({
//       id: i + 1,
//       url: '',
//       description: ''
//     });
//   }
//   return photos;
// }

// describe(PhotoBoardComponent.name, () => {
//   let fixture: ComponentFixture<PhotoBoardComponent>;
//   let component: PhotoBoardComponent;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [PhotoBoardModule]
//     }).compileComponents();

//     fixture = TestBed.createComponent(PhotoBoardComponent);
//     component = fixture.componentInstance;
//   });

//   it(`Should display rows and columns when (@Input photos) has value`, () => {
//     component.photos = buildPhotoList();
//     fixture.detectChanges();

//     const change: SimpleChanges = {
//       photos: new SimpleChange([], component.photos, true)
//     };
//     component.ngOnChanges(change);

//     expect(component.rows.length)
//       .withContext('Number of rows')
//       .toBe(2);
//     expect(component.rows[0].length)
//       .withContext('Number of columns from the first row')
//       .toBe(4);
//     expect(component.rows[0].length)
//       .withContext('Number of columns from the second row')
//       .toBe(4);
//   });
// })
