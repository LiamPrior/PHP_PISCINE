function epur_str() {
    var args = process.argv[2];
    var x = 0;

    args = args.trim();
    for (var i = 0; args[i] == ' '; i++);
    while (args[x])
    {
        process.stdout.write(args[x]);
        if (args[x] == ' ')
            while (args[x] == ' ')
                x++;
        else
            x++;
    }
}
