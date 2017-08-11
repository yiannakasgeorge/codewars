/**
 * Created by George on 10/05/2017.
 */
//return the total number of smiling faces in the array
/**
 * Created by George on 10/05/2017.
 */
//return the total number of smiling faces in the array
export function countSmileys(arr: string[]): number {

    if(arr.length === 0) return 0;
    console.log(arr)
    let rules: {} = {
        eyes: {validChars: [":",";"], mandatory: true},
        nose: {validChars: ["-","~"], mandatory: false},
        mouth: {validChars: [")","D"], mandatory: true},
    };

    let validCounter: number = 0;

    arr.forEach(function(value: string, index: number){

        if(value.length === 2 || value.length === 3){

            let copy: string = value;

            for(let key in rules) {
                let validChars: string [] = rules[key]["validChars"];
                let isMandatory: boolean = rules[key]["mandatory"];

                for(let i=0; i < validChars.length; i++){
                    let indexInValue = value.indexOf(validChars[i]);
                    console.log("valid char",validChars[i])
                    console.log("index",indexInValue)
                    if(indexInValue > -1){
                        console.log("removed",value.charAt(indexInValue))
                        copy = copy.replace(validChars[i],"");
                    }
                    console.log("Copy:", copy);
                }
            }
            console.log("LENGTH",copy.length);

            if(copy.length === 0) validCounter++;
        }

    });

    return validCounter;
}