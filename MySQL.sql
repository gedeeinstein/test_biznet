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
