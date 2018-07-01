<?php
    function    error()
    {
        echo "ERROR\n";
        exit;
    }

    if ($_POST['submit'] !== "OK")
        error();
    if (!$_POST["login"] || !$_POST["oldpw"] || !$_POST["newpw"])
        error();

    $file = "../private/passwd";
    $content = @file_get_contents($file);
    if (!$content)
        error();
    $auth = unserialize($content);

    foreach ($auth as $key => $element)
    {
        if ($element["login"] === $_POST["login"])
            $authkey = $key;
            break ;
    }
    if (!isset($authkey) || $auth[$authkey]['passwd'] !== hash(sha512, $_POST['oldpw']))
        error();

    $auth[$authkey]["passwd"] = hash(sha512, $_POST["newpw"]);
    file_put_contents($file, serialize($auth));
    echo "OK\n";
?>
