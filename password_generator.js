function password_generator(char_amount) {
    let new_password = ""
    char_types = {
        special_chars: ['!', '@', '#', '$', '%', '&', '*'],
        letters:['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        numbers:['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    }

    const generates_random_num = range => {
        return Math.random() * (range) + 1
    }
    // Verifies if the parameter is a number.
    if (typeof char_amount !== 'number') {
        console.log("Insira um valor numérico.")
    } else {
        const choose_char_type = () => {
            generates_random_num(5)

            switch (choose_char_type) {
                case 1: 
                    return 'special_chars'
                case 2: case 3: case 4: 
                    return 'letters'
                case 5: 
                    return 'numbers'
            }
            while (new_password.length < char_amount) {

            }

        }
    }
}

password_generator(1)
