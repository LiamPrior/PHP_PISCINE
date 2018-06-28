function ft_is_sort(arr)
{
    var sort = true;

    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            sort = false;
            break;
        }
    }
    console.log(sort);
    return (sort);
}
