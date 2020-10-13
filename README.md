# SHELL TEST ANSWER


$ cd mig33/inner.folder;
$ for file_biznet in *.txt;
> do
> mv "$file_biznet" "${file_biznet%.txt}.dat"
> done



# SQL ANSWER
## CASE 1

SELECT DATE AS DAY,
	SUM(CASE WHEN score>=0 THEN score ELSE 0 END) AS num_pos_scores,
	SUM(CASE WHEN score<0 THEN score ELSE 0 END) AS num_neg_scores
FROM assessments


## CASE 2

SELECT date, score
FROM assessments
WHERE 
  (date BETWEEN '2011-01-01' AND '2011-06-30' AND score > 0) OR  
  (date NOT BETWEEN '2011-01-01' AND '2011-06-30' AND score > 0)

ORDER BY date ASC 



# NodeJS, Python, Golang, or PHP
## PHP

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


#JavaScript




#








#Algorithmic
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




#BONUS

Parallel adalah eksekusi beberapa/banyak tugas yang dilakukan secara bersamaan. Parallel ibarat seorang pria yang sedang berkendara sambil menelpon. pria tersebut melakukan 2 tugas sekaligus pada waktu bersamaan, yaitu berkendara & menelpon.




Concurrency adalah beberapa komputasi yang terjadi pada waktu yang sama. jika kita membaca sekilas tanpa memperhatikan setiap kata, mungkin akan terdengar sama dengan pengertian parallel. letak perbedaannya adalah pada kata "at the same time". pada waktu yang sama bukan berarti dilakukan secara sepenuhnya bersamaan. Concurrency ibarat temen kita yang nyanyi sambil makan. temen kita ngelakuin 2 hal pada waktu yang sama, tetapi bergantian. karena 2 hal tersebut tidak bisa dilakukan secara bersamaan.
