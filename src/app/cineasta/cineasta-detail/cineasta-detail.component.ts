import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CineastaService } from '../cineasta.service';
import { CineastaDetail } from '../cineasta-detail';

@Component({
  selector: 'app-cineasta-detail',
  templateUrl: './cineasta-detail.component.html',
  styleUrls: ['./cineasta-detail.component.css']
})
export class CineastaDetailComponent implements OnInit {

  /**
  * The cineasta
  */
  @Input() cineastaDetail: CineastaDetail;
  /**
  * Constructor for the component
  * @param route The route which helps to retrieves the id of the corto to be shown
  * @param authorService The author's services provider
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private route: ActivatedRoute,
    private cineastaService: CineastaService
  ) { }

  /**
  * El id del cineasta que viene en el path get .../cineasta/cineasta_id
  */
  cineasta_id: number;
  /**
  * The method which obtains the author whose details we want to show
  */
  getCineastaDetail(): void {
    this.cineastaService.getCineastaDetail(this.cineasta_id)
      .subscribe(cineastaDetail => {
        this.cineastaDetail = cineastaDetail
      });
  }


  /**
  * The method which initializes the component.
  * We need to create the author so it is never considered as undefined
  */
  ngOnInit() {
    this.cineasta_id = +this.route.snapshot.paramMap.get('id');
    if (this.cineasta_id) {
      this.cineastaDetail = new CineastaDetail();
      this.getCineastaDetail();
    }
  }
}