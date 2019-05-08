Return all movies from the year 2000
```sql
SELECT * FROM movies.movie WHERE year = 2000;
```

Return the name and year of all movies with the genre ‘Drama’ :
```sql
SELECT * FROM movies.movie WHERE mid IN (SELECT mid FROM movies.genre WHERE genre = 'Drama');
```