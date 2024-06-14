import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  model,
  signal,
} from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    FormsModule,
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly currentCategory = model<string>('');
  readonly categories = signal<string[]>([]);
  readonly allCategories: string[] = [
    'Category One',
    'Category Two',
    'Category Three',
    'Category Four',
    'Category Five',
  ];
  readonly filteredCategories = computed(() => {
    const currentCategory = this.currentCategory().toLowerCase();
    return currentCategory
      ? this.allCategories.filter((category) =>
          category.toLowerCase().includes(currentCategory)
        )
      : this.allCategories.slice();
  });
  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.categories.update((categories) =>
        categories ? [...categories, value] : [value]
      );
    }

    this.currentCategory.set('');
  }

  remove(category: string): void {
    this.categories.update((categories) => {
      const index = categories.indexOf(category);
      if (index < 0) {
        return categories;
      }

      categories.splice(index, 1);
      this.announcer.announce(`Removed ${category}`);
      return [...categories];
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.categories.update((categories) => [
      ...categories,
      event.option.viewValue,
    ]);
    this.currentCategory.set('');
    event.option.deselect();
  }
}
