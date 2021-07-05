import { CommonModule } from '@angular/common';
import {
	CUSTOM_ELEMENTS_SCHEMA,
	NgModule,
	NO_ERRORS_SCHEMA
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatCardModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatButtonModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatExpansionModule,
		MatDialogModule,
		MatGridListModule,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSlideToggleModule
	],
	exports: [
		MatCardModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatButtonModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatExpansionModule,
		MatDialogModule,
		MatGridListModule,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSlideToggleModule
	],
	providers: [MatDatepickerModule, MatPaginatorModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class MaterialModule {}
