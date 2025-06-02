import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-url-link-converter',
  templateUrl: './url-link-converter.component.html',
  styleUrls: ['./url-link-converter.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class UrlLinkConverterComponent {
  inputText: string = '';
  convertedText: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) { }

  convertUrls(): void {
    if (!this.inputText) {
      this.convertedText = '';
      return;
    }

    // URLを検出する正規表現パターン
    const urlPattern = /(https?:\/\/[^\s]+)/g;

    // URLをリンクに変換
    const converted = this.inputText.replace(
      urlPattern,
      '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    // 安全なHTMLとして設定
    this.convertedText = this.sanitizer.bypassSecurityTrustHtml(converted);
  }
}
