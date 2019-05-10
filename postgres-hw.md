Return all movies from the year 2000 [8 movies]
```sql
SELECT * FROM movies.movie WHERE year = 2000;
```

Return the name and year of all movies with the genre ‘Drama’ (143 movies)
```sql
SELECT * FROM movies.movie WHERE mid IN (SELECT mid FROM movies.genre WHERE genre = 'Drama');
```

Give the number of movies per year a [73 rows]
```sql
SELECT COUNT(*), year FROM movies.movie GROUP BY year ORDER BY year DESC;
```

Give all roles that actor ‘Bruce Willis’ played [4 rows]
```sql
SELECT * FROM movies.acts WHERE pid = (SELECT pid FROM movies.person WHERE "name" = 'Bruce Willis');
```