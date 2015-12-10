<?php

require __DIR__.'/composer/autoload.php';

function recaptcha($gRecaptchaResponse, $remoteIp)
{
    $secret = "6LdbmhITAAAAAJzbMtgLcIMPOVz8N82xIBJk1ztz";
    $recaptcha = new \ReCaptcha\ReCaptcha($secret);
    return $recaptcha->verify($gRecaptchaResponse, $remoteIp);
}

function sendmail($post)
{
    $client = new \GuzzleHttp\Client();
    try { 
        $res = $client->request('POST', 'http://formspree.io/info@theroostcreative.com.au', [
            'form_params' => [
                'name'       => $post['name'],
                'email'      => $post['email'],
                'phone'      => $post['phone'],
                'message'    => $post['message'],
                'membership' => $post['membership'],
                '_subject'   => $post['subject'],
                '_gotcha'    => $post['gotcha'],
            ]
        ]);

        // Assume success?
        return true;
    } catch (\GuzzleHttp\Exception\RequestException $e) {
       return false; 
    }
}

function error()
{
    header("HTTP/1.1 401 Unauthorized");
    exit();
}

function success()
{
    echo "success";
    exit();
}

if (recaptcha($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR'])->isSuccess()) {
    if (sendmail($_POST)) {
        success();
    } else {
        error();
    }
} else {
    error();
}

