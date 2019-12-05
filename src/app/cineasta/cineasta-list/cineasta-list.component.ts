import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Cineasta } from '../cineasta';
import { CineastaDetail } from '../cineasta-detail';
import { CineastaService } from '../cineasta.service';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'cineasta-list',
    templateUrl: './cineasta-list.component.html',
    styleUrls: ['./cineasta-list.component.css']
})
export class CineastaListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param cineastaService The cineasta's services provider
     * @param toastrService The toastr to show messages to the user
     */
    constructor(
        private cineastaService: CineastaService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }

    /**
    * The list of cineastas which belong to the BookStore
    */
    cineastas: Cineasta[];

    /**
    * The id of the cineasta that the user wants to view
    */
    cineasta_id: number;

    /**
    * Shows or hides the cineasta-create-component
    */
    showCreate: boolean;

    /**
     * Shows or hides the detail of the cineasta
     */
    showView: boolean;

    /**
    * Shows or hides the edition of the cineasta
    */
    showEdit: boolean;

    /**
     * the cineasta that the user views.
     */
    selectedCineasta: Cineasta;


    /**
    * Shows the cineasta
    */
    onSelected(cineasta_id: number): void {
        this.showCreate = false;
        this.showEdit = false;
        this.showView = true;
        this.cineasta_id = cineasta_id;
        
        this.getCineastaDetail();
    }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showView = false;
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }

    /**
    * Shows or hides the create component
    */
    showHideEdit(author_id: number): void {
        if (!this.showEdit || (this.showEdit && author_id != this.selectedCineasta.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.cineasta_id = author_id;
            
            this.getCineastaDetail();
        }
        else {
            this.showEdit = false;
            this.showView = true;
        }
    }

    /**
    * Asks the service to update the list of cineastas
    */
    getCineastas(): void {
        this.cineastaService.getCineastas()
            .subscribe(cineastas => {
                this.cineastas = cineastas;
            });
    }

    getCineastaDetail(): void {
        this.cineastaService.getCineastaDetail(this.cineasta_id)
            .subscribe(selectedCineasta => {
                this.selectedCineasta = selectedCineasta
            });
    }

    updateCineasta(): void {
        this.showEdit = false;
        this.showView = true;
    }

    /**
    * Deletes the cineasta
    */
    deleteCineasta(cineastaId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete the cineasta',
            childComponent: SimpleModalComponent,
            data: { text: 'Are you sure your want to delete this cineasta from Wikio?' },
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.cineastaService.deleteCineasta(cineastaId).subscribe(() => {
                            this.toastrService.error("The cineasta was successfully deleted", "Cineasta deleted");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                { text: 'No', onAction: () => true }
            ]
        });
    }


    /**
    * This will initialize the component by retrieving the list of cineastas from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreate = false;
        this.showView = false;
        this.showEdit = false;
        this.selectedCineasta = undefined;
        this.cineasta_id = undefined;
        this.getCineastas();
    }
}
