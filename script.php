<?php 
$servername = "yy217444.mysql.tools"; // имя сервера
$database = "yy217444_sto"; // имя базы данных
$username = "yy217444_sto"; // логин для подключения к базе данных
$password = "B7ib7S(f-7"; // пароль для подключения к базе данных
// Устанавливаем соединение
$conn = mysqli_connect($servername, $username, $password, $database); // создание перемнной которая сведетельствует о подключении

mysqli_query($conn, "SET NAMES 'utf8' COLLATE 'utf8_general_ci'"); // установка нужной кодировки
mysqli_query($conn, "SET CHARACTER SET 'utf8'"); // установка нужной кодировки

// Проверяем соединение
if (!$conn) {
      die("Connection failed: " . mysqli_connect_error()); // проверка подключения
}

$phone = $_POST['contact-telephone']; // копирование данных в переменную методои POST 
$email = $_POST['contact-email']; // копирование данных в переменную методои POST 
$date = $_POST['contact-date']; // копирование данных в переменную методои POST 
$list = $_POST['myAuto']; // копирование данных в переменную методои POST 


$sql = "INSERT INTO `sto-zayava` (`phone`, `email`, `date` , `mark`) VALUES ('$phone', '$email', '$date' , '$list')"; // запрос на запись данных в базу


if (mysqli_query($conn, $sql)) { // проверка подключения к базе
				header("Location: index.html");
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn); // вывод сообщения, при ошт+ибке подкючения и записи данных
}
mysqli_close($conn); // закрытие подключения к базе; отключаемся от базы
?>