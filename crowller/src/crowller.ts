// ts -> .d.ts 翻译文件 -> js
import superagent from 'superagent';
import fs from 'fs';
import path from 'path';
import DellAnalyzer from './dellAnalyzer';

export interface Analyzer {
    analyze: (html: string, filePath: string) => string;
}

class Crowller {
    private filePath = path.resolve(__dirname, '../data/course.json');

    private async getRawHtml() {
        const result = await superagent.get(this.url);
        return result.text;
    }

    private async initSpiderProcess() {
        const html = await this.getRawHtml();
        const fileContent = this.analyzer.analyze(html, this.filePath);
        fs.writeFileSync(this.filePath, fileContent);
    }

    constructor(private url: string, private analyzer: Analyzer) {
        this.initSpiderProcess();
    }
}

const secret = 'secretKey';
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;

// const analyzer = new DellAnalyzer();
const analyzer = DellAnalyzer.getInstance();
const crowller = new Crowller(url, analyzer);
