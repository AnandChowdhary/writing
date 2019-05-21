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

Give an alphabetically ordered list of all actors who acted in movies with a rating of 8.9 or higher. [70 rows]
```sql
SELECT name FROM movies.person WHERE pid IN (SELECT pid FROM movies.acts WHERE mid IN (SELECT mid FROM movies.movie WHERE rating >= 8.9)) ORDER BY name ASC;
```

Give the names of all writers of movies in which Harrison Ford acts. [11 rows]
```
SELECT name FROM movies.person WHERE pid IN (SELECT DISTINCT pid FROM movies.writes WHERE mid IN (SELECT mid FROM movies.acts WHERE pid = (SELECT pid FROM movies.person WHERE name = 'Harrison Ford'))) ORDER BY name ASC;
```

Give a list of directors who also acted, with the number of movies in which they acted. [23 rows]
```sql
SELECT name FROM movies.person WHERE pid IN (SELECT DISTINCT movies.acts.pid FROM movies.acts, movies.directs WHERE movies.acts.pid = movies.directs.pid) ORDER BY name ASC;
```

Return for all directors the number of movies they have directed.
```sql
SELECT movies.person.name, COUNT(movies.directs.mid) as movieCount FROM movies.directs, movies.person WHERE movies.person.pid = movies.directs.pid GROUP BY movies.directs.pid, movies.person.name ORDER BY movieCount DESC;
```

Give per genre, in how many movies of that genre ‘Bruce Willis’ acted [6 rows]
```sql
SELECT movies.genre.genre, COUNT(movies.genre.mid) as genreCount FROM movies.acts, movies.genre WHERE pid = (SELECT pid FROM movies.person WHERE name = 'Bruce Willis') AND movies.genre.mid = movies.acts.mid GROUP BY movies.genre.genre ORDER BY genreCount DESC;
```
