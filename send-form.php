<?php
// Настройки
$to = "brestvtireq@yandex.by";
$subject = "Zayavka 7083.by";

// Получение данных из формы
$name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
$phone = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : '';
$address = isset($_POST['address']) ? htmlspecialchars(trim($_POST['address'])) : '';
$equipmentName = isset($_POST['equipmentName']) ? htmlspecialchars(trim($_POST['equipmentName'])) : '';
// $date = isset($_POST['date']) ? htmlspecialchars(trim($_POST['date'])) : '';

// Проверка на обязательные поля
if (empty($name) || empty($phone) || empty($address) || empty($equipmentName) ) {
    echo "Пожалуйста, заполните все обязательные поля.";
    exit;
}

// Формирование тела письма без переноса строк
$body = "<region>Гродно</region><name>$name</name><phone>$phone</phone><address>$address</address><techlist>$equipmentName</techlist>";


// Заголовки
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";

// Отправка письма
if (mail($to, $subject, $body, $headers)) {
    echo "OK";
} else {
    echo "Ошибка при отправке сообщения.";
}
?>
