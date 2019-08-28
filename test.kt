fun main() {
    println(chunkyMonkey("this is sample to be short down by dots at end", 3))
}

fun chunkyMonkey(input: String, group: Int) {

    val result = mutableListOf<List<String>>()
    var inputStipped = input.split(" ").joinToString("")

    while (inputStipped.length - 1> 0) {
        // result.add(listOf(inputStipped.slice(0..group)))
        inputStipped = inputStipped.slice(group..inputStipped.length)
    }

    println(result.toString())
}

