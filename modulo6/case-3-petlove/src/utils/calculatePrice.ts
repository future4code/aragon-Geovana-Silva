export class CalculatePrice {
    public calculatePrice(number_of_pets: number, duration: string){
        if(number_of_pets === 1 && duration === "30"){
            const price = 25

            return price
        } else if (number_of_pets > 1 && duration === "30"){
            const price = 25 + (number_of_pets - 1) * 15

            return price
        } else if(number_of_pets === 1 && duration === "60"){
            const price = 35

            return price
        } else if (number_of_pets > 1 && duration === "60"){
            const price =  35 + (number_of_pets - 1) * 20
            
            return price
        }
    }
}