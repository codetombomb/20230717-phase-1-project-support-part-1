

// Simulate a lengthy fetch with setTimeout


setTimeout(() => {
    const data = document.createElement("h1")
    data.textContent = "Data has loaded!"

    const spinner = document.getElementById("loading-spinner")
    spinner.classList.add("d-none")
    document.body.append(data)
}, 2000)