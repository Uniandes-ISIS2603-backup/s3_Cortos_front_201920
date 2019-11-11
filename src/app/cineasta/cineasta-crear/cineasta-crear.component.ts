import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { CineastaService } from '../cineasta.service';
import { Cineasta } from '../cineasta';

@Component({
    selector: 'app-cineasta-create',
    templateUrl: './cineasta-create.component.html',
    styleUrls: ['./cineasta-create.component.css'],
    providers: [DatePipe]
})
export class CineastaCrearComponent implements OnInit {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param cineastaService The cineasta's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private cineastaService: CineastaService,
        private toastrService: ToastrService
    ) { }

    /**
    * The new cineasta
    */
    cineasta: Cineasta;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an cineasta
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new cineasta
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a cineasta
    */
    createCineasta(): Cineasta {

        let dateB: Date = new Date(this.cineasta.fechaNacimiento.year, this.cineasta.fechaNacimiento.month - 1, this.cineasta.fechaNacimiento.day);

        this.cineasta.fechaNacimiento = this.dp.transform(dateB, 'yyyy-MM-dd');
        console.log(this.cineasta);
        this.cineastaService.createCineasta(this.cineasta)
            .subscribe((cineasta) => {
                this.cineasta = cineasta;
                this.create.emit();
                this.toastrService.success("The cineasta was created", "Cineasta creation");

            });
        return this.cineasta;
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.cineasta = new Cineasta();
    }

}