<?php   
$nilai_input = 100; 
$n = $nilai_input;

cetakBilPrima($n); 

function bilPrima($n) 
{  
    if ($n <= 1) 
        return false; 
    if ($n <= 3) 
        return true; 
    if ($n % 2 == 0 || $n % 3 == 0) 
        return false; 
  
    for ($i = 5; $i * $i <= $n; $i = $i + 6) 
        if ($n % $i == 0 ||  $n % ($i + 2) == 0) 
            return false; 
    return true; 
} 
function cetakBilPrima($n) 
{ 
    
    for ($i = 2; $i <= $n; $i++)  
    { 
        if (bilPrima($i)) 
          echo $i . ", " ;
    } 
} 
?> 
