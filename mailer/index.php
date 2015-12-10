<?php

require __DIR__.'/vendor/autoload.php';

function recaptcha($gRecaptchaResponse, $remoteIp)
{
    $secret = "6LdbmhITAAAAAJzbMtgLcIMPOVz8N82xIBJk1ztz";
    $recaptcha = new \ReCaptcha\ReCaptcha($secret);
    return $recaptcha->verify($gRecaptchaResponse, $remoteIp);
}

function sendmail($post)
{
    $client = new \Guzzle\Http\Client('http://formspree.io');
    try { 
        $response = $client->post('/info@theroostcreative.com.au', array(
            'Referer' => 'http://theroostcreative.com.au/',
        ), array(
            'name'       => $post['name'],
            'email'      => $post['email'],
            'phone'      => $post['phone'],
            'message'    => $post['message'],
            'membership' => $post['membership'],
            '_subject'   => $post['_subject'],
            '_gotcha'    => $post['_gotcha'],
        ))->send();

        // Assume success?
        return true;
    } catch (\Guzzle\Http\Exception\BadResponseException $e) {
       return false; 
    }
}

function error($msg)
{
    header("HTTP/1.1 401 Unauthorized");
    echo $msg;
    exit();
}

function success()
{
    echo '{"yeah":"mate"}';
    exit();
}

if (recaptcha($_POST['g-captcha-response'], $_SERVER['REMOTE_ADDR'])->isSuccess()) {
    if (sendmail($_POST)) {
        success();
    } else {
        error("mail error");
    }
} else {
    error("captcha error");
}
