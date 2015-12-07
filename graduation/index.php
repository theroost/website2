<?php

$filename = "Roost-Graduation-Submission_Guidelines.pdf";
header('Content-type: application/pdf');
header('Content-Disposition: inline; filename="' . $filename . '"');
header('Content-Transfer-Encoding: binary');
header('Accept-Ranges: bytes');
@readfile(__DIR__.'/'.$filename);

exit;