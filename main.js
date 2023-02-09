const useState = (defaultValue) => {
    const state = {
        currentValue: defaultValue
    }
    const setValue = (value) => {
        state.currentValue = value
    }

    return [state, setValue]
}

const [count, setCount] = useState(0)
const [username, setUsername] = useState("Ahmed")

console.log(count)
console.log(username)

setCount(75)
setUsername("Saber")

console.log(count)
console.log(username)
