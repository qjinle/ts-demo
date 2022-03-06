import { load as cheerioLoad } from 'cheerio';
import fs from 'fs';
import { Analyzer } from './crowller';

interface Course {
    title: string;
    count: number;
}

interface CourseResult {
    time: number;
    data: Course[];
}

interface Content {
    [propName: number]: Course[];
}

export default class DellAnalyzer implements Analyzer {
    private static instance: Analyzer;

    // 单例模式
    static getInstance() {
        if (!DellAnalyzer.instance) {
            DellAnalyzer.instance = new DellAnalyzer();
        }
        return DellAnalyzer.instance;
    }

    private getJsonInfo(html: string) {
        const $ = cheerioLoad(html);
        const courseItems = $('.course-item');
        const courseInfos: Course[] = [];
        courseItems.map((index, element) => {
            const descs = $(element).find('.course-desc');
            const title = descs.eq(0).text();
            const count = parseInt(descs.eq(1).text().split('：')[1]);
            courseInfos.push({ title, count });
        });
        return {
            time: new Date().getTime(),
            data: courseInfos,
        };
    }

    private generateJsonContent(courseResult: CourseResult, filePath: string) {
        let fileContent: Content = {};
        // 判断是否存在文件
        if (fs.existsSync(filePath)) {
            fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        }
        fileContent[courseResult.time] = courseResult.data;
        return fileContent;
    }

    public analyze(html: string, filePath: string) {
        const courseResult = this.getJsonInfo(html);
        const fileContent = this.generateJsonContent(courseResult, filePath);
        return JSON.stringify(fileContent);
    }

    private constructor() {}
}
