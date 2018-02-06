<?php
    $mail_to = 'melissadagley@gmail.com'; // specify your email here

    // Assigning data from the $_POST array to variables
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $mail_from = $_POST['email'];
    $reason = $_POST['reason'];
    $message = $_POST['message'];

    // Construct email subject
    $subject = 'www.mamamias.com '. $reason . ' from ' . $first_name . ' ' . $last_name;

    // Construct email body
    $body_message = 'From: ' . $first_name . ' ' . $last_name . "\r\n";
    $body_message .= 'E-mail: ' . $mail_from . "\r\n";
    $body_message .= 'Reason: ' . $reason . "\r\n";
    $body_message .= 'Message: ' . $message;

    // Construct email headers
    $headers = 'From: ' . $mail_from . "\r\n";
    $headers .= 'Reply-To: ' . $mail_from . "\r\n";

    $mail_sent = mail($mail_to, $subject, $body_message, $headers);

    if ($mail_sent == true){ ?>
        <script language="javascript" type="text/javascript">
        alert('Thank you for the message. We will contact you shortly.');
        window.location = 'contact.html';
        </script>
    <?php } else { ?>
    <script language="javascript" type="text/javascript">
        alert('Message not sent. Please, notify the site administrator admin@admin.com');
        window.location = 'contact.html';
    </script>
    <?php
    }
?>