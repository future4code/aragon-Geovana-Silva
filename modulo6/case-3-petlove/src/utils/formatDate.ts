export class FormatDate {
    public FormataStringData(date: string) {
        let day  = date.split("/")[0];
        let month  = date.split("/")[1];
        let year  = date.split("/")[2];

        return year + '-' + ("0" + month).slice(-2) + '-' + ("0"+ day).slice(-2);
    }
}