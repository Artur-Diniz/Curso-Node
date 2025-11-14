function a() {
    console.log("EXECUTANDO a()")
}
function b() {
    console.log("EXECUTANDO b()")
}
function c() {
    console.log("EXECUTANDO c()")

    a()
    b()
}

c()
