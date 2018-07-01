<?php
  if ($_POST['login'] && $_POST['passwd'] && $_POST['submit'] === "OK")
  {
    $password_holder = "../private/";
    $password_file = "../private/passwd";
    if (!file_exists($password_holder))
      mkdir($password_holder, 0755, true);
    if (!file_exists($password_holder))
      file_put_content('../private/passwd', NULL);
    $data = unserialize(file_get_contents($password_file));
    if ($data) {
      $error = 0;
      foreach ($data as $k => $v) {
        if ($v['login'] === $_POST['login'])
          $error = 1;
      }
    }
    if ($error == 0)
    {
      $tmp['login'] = $_POST['login'];
      $tmp['passwd'] = hash(sha512, $_POST['passwd']);
      $account[] = $tmp;
      file_put_contents('../private/passwd', serialize($account), FILE_APPEND);
      echo "OK\n";
    }
    else
      echo "Error\n";
  }
  else
    echo "Error\n";
?>
