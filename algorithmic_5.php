<?php 

  $nilai = 6;
  $n = $nilai;
  angkaKombinasi($n); 
  
function cariKombinasiANgka($arr, $index, $angka, $nilaiX) 
{ 
	if ($nilaiX < 0) 
		return; 
	if ($nilaiX == 0) 
	{ 
		for ($i = 0; $i < $index; $i++) 
			echo $arr[$i] , ", "; 
		echo "\n"; 
		return; 
	} 
  
	$hasil = ($index == 0) ? 1 : $arr[$index - 1]; 

	for ($h = $hasil; $h <= $angka ; $h++) 
	{ 
		$arr[$index] = $h; 
		cariKombinasiANgka($arr, $index + 1, $angka, $nilaiX - $h); 
	} 
} 

function angkaKombinasi($n) 
{ 
	$arr = array(); 
	cariKombinasiANgka($arr, 0, $n, $n); 
} 

?> 
