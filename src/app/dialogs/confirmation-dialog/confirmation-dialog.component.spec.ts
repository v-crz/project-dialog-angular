import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "./confirmation-dialog.component";

const MatDialogMock = {
    close: () => null
}

describe('Confirm dialog component', () => {
    let component: ConfirmDialogComponent;
    let fixture: ComponentFixture<ConfirmDialogComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                ConfirmDialogComponent
            ],
            providers: [
                // están en el constructor
                // crear mock de ellos
                // MatDialogRef,
                // MAT_DIALOG_DATA
                {
                    provide: MatDialogRef,
                    useValue: MatDialogMock
                },
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {}
                }
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
                NO_ERRORS_SCHEMA
            ]
        }).compileComponents();
    });

    // Para instanciar el componente
    beforeEach(() => {
        fixture = TestBed.createComponent(ConfirmDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('onConfirm send true value', () => {
        // Primer opción
        // const service = fixture.debugElement.injector.get(MatDialogRef);

        // Segunda opción
        const service = TestBed.inject(MatDialogRef);
        const spy = spyOn(service, 'close');
        component.onConfirm();
        expect(spy).toHaveBeenCalledWith(true);
    });

    it('onConfirm send false value', () => {
        const service = TestBed.inject(MatDialogRef);
        const spy = spyOn(service, 'close');
        component.onDismiss();
        expect(spy).toHaveBeenCalledWith(false);
    });
});
