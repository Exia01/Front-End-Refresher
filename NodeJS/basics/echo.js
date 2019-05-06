echo = (str, num) => {
    let tempString = ""
    num > 0 ? console.log(str.repeat(num)) : "";

    while (num > 0) {
        tempString = str + "\n"
        console.log(`${tempString}`)
        num--
    }
    
}

echo("Echo!!", 10)
echo("Tater tots", 3)