module.exports = function toReadable (number) {
    let arr09 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let arr1119 = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let arr1090 = [ "ten","twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let arr100 = ["hundred"];
    st = number.toString();
    if (st.length == 1){
    return arr09[number];
    } else {
        if ((st.length == 2) && ((number%10) == 0)){
            return arr1090[(number/10 - 1)];
                } else {
                    if ((st.length == 2) && (number<20)){
                        return arr1119[((number%10)-1)];
                        } else {   
                            if (st.length == 2) {
                               return (arr1090[(Math.floor(number/10)-1)] + ' ' + arr09[number%10]);
                                } else {
                                    if ((st.length == 3) && (number%100 == 0)){
                                        return (arr09[number/100] + ' ' + arr100[0]);
                                    } else {
                                        if ((st.length == 3) && (number%10 == 0)) {
                                            return (arr09[(Math.floor(number/100))] + ' ' + arr100[0] + ' ' + arr1090[((Math.floor((number/10)%10))-1)]);
                                        } else {
                                            if ((st.length == 3) && (((Math.floor(number/10))%10) == 0)){
                                                return (arr09[(Math.floor(number/100))] + ' ' + arr100[0] + ' ' + arr09[(Math.floor(number%10))]);
                                                } else {
                                                    if ((st.length == 3) && (((Math.floor(number/10))%10) == 1)) {
                                                        return (arr09[(Math.floor(number/100))] + ' ' + arr100[0] + ' ' + arr1119[((number%10)-1)]);
                                                    } else {
                                                        return (arr09[(Math.floor(number/100))] + ' ' + arr100[0] + ' ' + arr1090[(((Math.floor(number/10)%10)-1))] + ' ' + arr09[number%10]);
                                                    }

                                                }

                                        }
                                        
                                    }
                                }
                            }                 
                    }

                }

    }
