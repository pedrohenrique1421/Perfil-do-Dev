<?php

if (isset($_POST['enviar'])) {
    $nome = $_POST['nome'];
    $empresa = $_POST['empresa'];
    $data = $_POST['data'];
    $texto = $_POST['texto'];

    $host = "localhost";
    $banco = "tb_contato";
    $user = "root";
    $senha = "";

    // Conectando ao banco de dados
    $con = mysqli_connect($host, $user, $senha, $banco);
    
    // Verifica a conexão
    if (!$con) {
        die("Conexão falhou: " . mysqli_connect_error());
    }

    // Usando prepared statements para evitar SQL Injection
    $stmt = $con->prepare("INSERT INTO contato (nome, empresa, data, texto) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $nome, $empresa, $data, $texto);

    if ($stmt->execute()) {
        echo '<script>window.location.href = "../PaginaDeResposta/index.html";</script>';
    } else {
        echo "Erro: " . $stmt->error;
    }

    $stmt->close();
    $con->close();
}
?>