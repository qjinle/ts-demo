"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = require("cheerio");
const fs_1 = __importDefault(require("fs"));
class DellAnalyzer {
    constructor() { }
    // 单例模式
    static getInstance() {
        if (!DellAnalyzer.instance) {
            DellAnalyzer.instance = new DellAnalyzer();
        }
        return DellAnalyzer.instance;
    }
    getJsonInfo(html) {
        const $ = (0, cheerio_1.load)(html);
        const courseItems = $('.course-item');
        const courseInfos = [];
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
    generateJsonContent(courseResult, filePath) {
        let fileContent = {};
        // 判断是否存在文件
        if (fs_1.default.existsSync(filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, 'utf-8'));
        }
        fileContent[courseResult.time] = courseResult.data;
        return fileContent;
    }
    analyze(html, filePath) {
        const courseResult = this.getJsonInfo(html);
        const fileContent = this.generateJsonContent(courseResult, filePath);
        return JSON.stringify(fileContent);
    }
}
exports.default = DellAnalyzer;
