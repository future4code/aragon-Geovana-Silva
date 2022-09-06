export class FormatDate {
    public FormataStringData(appointment_date:string) {
        let day  = appointment_date.split("/")[0];
        let month  = appointment_date.split("/")[1];
        let year  = appointment_date.split("/")[2];

        return year + '-' + ("0" + month).slice(-2) + '-' + ("0"+ day).slice(-2);
    }
}