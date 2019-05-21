## Minimal

Return all movies from the year 2000 [8 movies]
```sql
SELECT name FROM movies.movie WHERE year = 2000;
```

Return the name and year of all movies with the genre ‘Drama’ (143 movies)
```sql
SELECT name, year FROM movies.movie WHERE mid IN (SELECT mid FROM movies.genre WHERE genre = 'Drama');
```

Give the number of movies per year a [73 rows]
```sql
SELECT year, COUNT(*) FROM movies.movie GROUP BY year ORDER BY year DESC;
```

Give all roles that actor ‘Bruce Willis’ played [4 rows]
```sql
SELECT role FROM movies.acts WHERE pid = (SELECT pid FROM movies.person WHERE name = 'Bruce Willis');
```

Give the number of persons in the database [1 row with the number 3279]
```sql
SELECT COUNT(*) FROM movies.person;
```
Give name and year of recording for every movie with a rating between 8.7 and 9.0 [19rows]
```sql
SELECT name, year FROM movies.movie WHERE rating BETWEEN 8.7 AND 9.0;
```

Give per movie, its name and how many actors play in that movie (251 rows)
```sql
SELECT movies.movie.mid, movies.movie.name, COUNT(movies.acts.pid) FROM movies.movie, movies.acts WHERE movies.movie.mid = movies.acts.mid GROUP BY movies.movie.mid;
```

Give the names of all movies which have a role name starting with "Dr." [39 rows]
```sql
SELECT DISTINCT name FROM movies.movie WHERE mid IN (SELECT mid FROM movies.acts WHERE role LIKE 'Dr.%');
```

Give the number of actors [1 row with value 2867]
```sql
SELECT COUNT(DISTINCT pid) FROM movies.acts;
```

Give in a sorted list of languages, per language how many movies are there in that language
```sql
SELECT language, COUNT(*) FROM movies.language GROUP BY language ORDER BY COUNT(*) DESC;
```

## Regular
