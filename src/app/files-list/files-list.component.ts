import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-files-list',
  imports: [
    NgForOf
  ],
  templateUrl: './files-list.component.html',
  styleUrl: './files-list.component.scss'
})
export class FilesListComponent {
  @Input() files!: string[];

  constructor() {
  }

  onFileClick() {
    // TODO NE RABOTAET
    console.log('a');
  }

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;

    console.log('try...');

    // Проверяем, есть ли выбранные файлы
    if (input.files && input.files.length > 0) {
      const file = input.files[0]; // Получаем первый выбранный файл

      // Выводим информацию о файле
      console.log('Имя файла:', file.name);
      console.log('Размер файла:', file.size, 'байт');
      console.log('Тип файла:', file.type);

      // Если нужно получить путь к файлу (неполный путь, только имя файла)
      console.log('Имя файла (путь):', file.webkitRelativePath);

    }
  }
}
