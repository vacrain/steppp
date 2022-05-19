// 文件下载
import FileSaver from 'file-saver'
export function download(res: any) {
    const fileName =
        (res.headers['content-disposition'] &&
            decodeURI(res.headers['content-disposition'].split('=')[1])) ||
        '未知文件'
    FileSaver.saveAs(new Blob([res.data]), decodeURIComponent(fileName))
}
