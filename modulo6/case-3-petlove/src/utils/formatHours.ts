export class FormatHours {
    public formatStringHours(hour: string){
        var h  = hour.split(":")[0];
        var m  = hour.split(":")[1];
        var s  = hour.split(":")[2];

        const hr = Number(h)
        const min = Number(m)
        const seg = Number(s)

        const formated = (hr * 3600) + (min * 60) + (seg);

        return formated
    }

    public secondsToHours(seg: number){
        var hour = Math.floor((seg / 3600))
        var hourString = hour.toString()

        var minute = Math.floor((seg % 3600 / 60))
        var minuteString = minute.toString()
        
        var second = ((seg%3600)%60)
        var secondString = second.toString()

        function twoHouses(isNumber: string){
            if(Number(isNumber) <= 9){
                var isToNumber = "0" + isNumber
            }
            
            if(Number(isNumber) === 0){
                var isToNumber = "00"
            }

            return isToNumber;
        }
        
        var hours = twoHouses(hourString) + ":" + twoHouses(minuteString) + ":" + twoHouses(secondString) 
        return hours;
    }

    public diference(h1: number, h2: number){
        return h1 - h2
    }

    public date_format(s: number) {
        const h = Math.floor(s / 3600);
        const min = Math.floor((s - (h*3600)) /60);
        s = s - (Math.floor(s / 60) * 60);
        return h + "h "+ min + "min "+s + "s";
    }
}