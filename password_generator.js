function password_generator(char_amount) {
    if (typeof char_amount != 'number') {
        console.log(`"${char_amount}" is not a valid amount. Please, insert a numeric value.`)
    } else {
        let new_password = ""
        const char_types = {
            special_chars: ['!', '@', '#', '$', '%', '&', '*'],
            letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
            numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        }

        const generates_random_num = range => {
            return Math.floor(Math.random() * (range))
        }


        while (new_password.length < char_amount) {
            const current_char_type = () => {
                switch (generates_random_num(7)) {
                    case 1: case 2:
                        return 'special_chars'
                    case 3: case 4: case 5:
                        return 'letters'
                    case 6: case 7:
                        return 'numbers'
                }
            }
            
            const current_char_index = generates_random_num(char_types[current_char_type()].length - 1)
            const current_char = char_types[current_char_type()][current_char_index]

            new_password = new_password.concat(current_char)
        }
        return new_password
    }

}

console.log(password_generator(7))
