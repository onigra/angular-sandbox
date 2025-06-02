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

  sampleTexts = [
    {
      title: '基本的なURL',
      text: '私のブログは https://example.com です。'
    },
    {
      title: '複数のURL',
      text: 'おすすめのサイト：\nhttps://google.com\nhttps://github.com\nhttps://angular.io'
    },
    {
      title: 'URLを含む文章',
      text: 'Angularの公式ドキュメントは https://angular.io/docs で確認できます。また、GitHubのリポジトリは https://github.com/angular/angular にあります。'
    }
  ];

  constructor(private sanitizer: DomSanitizer) { }

  selectSampleText(text: string): void {
    this.inputText = text;
    this.convertUrls();
  }

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
