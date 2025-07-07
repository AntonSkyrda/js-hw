function addUl(text, repeatCount) {
    document.write("<ul>")
    for (let i = 0; i <repeatCount; i++) {
        document.write(
            `<li>${text}</li>
            `
        )
    }
    document.write("</ul>")
}

addUl("qwe", 10)
