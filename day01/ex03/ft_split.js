function ft_split(line)  {
    var i=-1;
    var res = []
    var str = line.split(' ');

    while (i++ < str.length)
    {
        if (str[i] && str[i] != ' ')
            res.push(str[i]);
    }
    console.log(res);
    return (res.sort());
}
