self.addEventListener("install",e=>{
console.log("ALVES 4.0 instalado")
})

self.addEventListener("fetch",e=>{
e.respondWith(fetch(e.request))
})