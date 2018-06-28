function aff_param() {
    var args = process.argv;
    for (var i = 2; args[i]; i++)
        console.log(args[i]);
}
