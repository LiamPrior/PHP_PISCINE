function rostring() {
    var args = process.argv[2];
    var x = 0;
    var i = -1;
    var res = [];

    args = args.split(' ');
    while (i++ < args.length)
        if (args[i] && args[i] != ' ')
            res.push(args[i]);
    while (res[++x])
        console.log(res[x]);
    console.log(res[0]);
}
