export interface SampleText {
    title: string;
    text: string;
}

export const sampleTexts: SampleText[] = [
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
