import dayjs from "dayjs";
import { readdir, stat } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { sum, formatBytes } from "@pureadmin/utils";


/** 启动`node`进程时所在工作目录的绝对路径 */
const root = process.cwd();
/**
 * @description 根据可选的路径片段生成一个新的绝对路径
 * @param dir 路径片段，默认`build`
 * @param metaUrl 模块的完整`url`，如果在`build`目录外调用必传`import.meta.url`
 */
const pathResolve = (dir = ".", metaUrl = import.meta.url) => {
    // 当前文件目录的绝对路径
    const currentFileDir = dirname(fileURLToPath(metaUrl));
    // build 目录的绝对路径
    const buildDir = resolve(currentFileDir, "build");
    // 解析的绝对路径
    const resolvedPath = resolve(currentFileDir, dir);
    // 检查解析的绝对路径是否在 build 目录内
    if (resolvedPath.startsWith(buildDir)) {
        // 在 build 目录内，返回当前文件路径
        return fileURLToPath(metaUrl);
    }
    // 不在 build 目录内，返回解析后的绝对路径
    return resolvedPath;
};

/** 设置别名 */
const alias = {
    "@": pathResolve("../src"),
    "@build": pathResolve()
};

const fileListTotal = [];

/** 获取指定文件夹中所有文件的总大小 */
const getPackageSize = options => {
    const { folder = "dist", callback, format = true } = options;
    readdir(folder, (err, files) => {
        if (err) throw err;
        let count = 0;
        const checkEnd = () => {
            ++count == files.length &&
                callback(format ? formatBytes(sum(fileListTotal)) : sum(fileListTotal));
        };
        files.forEach((item) => {
            stat(`${folder}/${item}`, async (err, stats) => {
                if (err) throw err;
                if (stats.isFile()) {
                    fileListTotal.push(stats.size);
                    checkEnd();
                } else if (stats.isDirectory()) {
                    getPackageSize({
                        folder: `${folder}/${item}/`,
                        callback: checkEnd
                    });
                }
            });
        });
        files.length === 0 && callback(0);
    });
};

export { root, pathResolve, alias, getPackageSize };
