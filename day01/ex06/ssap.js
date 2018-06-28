function ssap() {
    const args = process.argv;
    var res = [];

    for (var x = 2; args[x]; x++)
    {
        var new_array = args[x].split(' ');
        for (var i = 0; i < new_array.length; i++)
            if (new_array[i])
                res.push(new_array[i]);
    }
    res.sort();
    console.log(res);
}
