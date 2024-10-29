let promise1 = new Promise(function (resolve, reject) {
    // the function is executed automatically when the promise is constructed
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000)
})

let promise2 = new Promise(function (resolve, reject) {
    // the function is executed automatically when the promise is constructed
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => reject(new Error("Whoops!")), 1000)
})

//N.B There can be only a single result or an error
let promise = new Promise(function(resolve, reject) {
    resolve("done");
  
    reject(new Error("…")); // ignored
    setTimeout(() => resolve("…")); // ignored
});

//Consumers: then, catch
promise1.then(
    function (result) {
        console.log({result})
    },
    function (error) {
        console.error({error})
    }
).finally(() => console.log('Promise 1 done'))

promise2.then(
    function (result) {
        console.log({result})
    },
    function (error) {
        console.error({error})
    }
).finally(() => console.log('Promise 2 done 1'))

promise2.catch(error => console.error({ error })).finally(() => console.log('Promise 2 done 2'))

// A finally handler doesn’t get the outcome of the previous handler (it has no arguments). This outcome is passed through instead, to the next suitable handler.

// If a finally handler returns something, it’s ignored.

// When finally throws an error, then the execution goes to the nearest error handler.

//loadScript example
function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script')
        script.src = src

        script.onload = () => resolve(script)
        script.onerror = () => reject(new Error(`Script load error for ${src}`))

        document.head.append(script)
    })
}

let loadScriptPromise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")

loadScriptPromise.then(
    script => alert(`${script.src} is loaded`),
    error => alert(`Error: ${error.messaage}`)
)