import { Dispatch, SetStateAction } from "react"

export const getYear = (year: React.ChangeEvent<HTMLInputElement>, setYear: Dispatch<SetStateAction<string | number | undefined>>) => {
    if(year.target.value.length > 4){
        year.target.value = year.target.value.slice(0,4)
    }
 
    if (Number(year.target.value) === 0){
     return setYear("")
    } else {
     return setYear(Number(year.target.value))
    }
    
 }