function loadScript(src, callback) {
    // creates a <script> tag and append it to the page
    // this causes the script with given src to start loading and run when complete
    let script = document.createElement('script')
    script.src = src
    
    script.onload = () => callback(null, script)
    script.onerror = () => callback(new Error(`Script load error for ${src}`))
    
    document.head.append(script)
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (error, script) => {
    if (error) {
        // handle error
    } else {
        // script loaded successfully
        alert(`Cool, the script ${script.src} is loaded`)
        alert(_)
    }
    
})

//nesting example code
function nestedCallback() {
    loadScript('1.js',step1)

    function step1(error, script) {
        if (error) {
            handleError(error)
        } else {
            //...
            loadScript('2.js'. step2)
        }
    }

    function step2(error, script) {
        if (error) {
            handleError(error)
        } else {
            //...
            loadScript('3.js'. step3)
        }
    }

    function step3(error, script) {
        if (error) {
            handleError(error)
        } else {
            //... continue after all scripts are loaded
        }
    }
}