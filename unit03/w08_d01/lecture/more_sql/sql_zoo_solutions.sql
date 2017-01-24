-- These are the solutions for the 8 sql zoo exercises on COUNT and SUM

-- 1
SELECT SUM(population)
FROM world;

-- 2
SELECT continent
FROM world
GROUP BY continent;

-- 3
SELECT SUM(gdp)
FROM world
WHERE continent = 'Africa'
GROUP BY continent;

-- 4
SELECT COUNT(*)
FROM world
WHERE area > 1000000;

-- 5
SELECT SUM(population)
FROM world
WHERE name IN ('France', 'Germany', 'Spain');
-- OR
SELECT SUM(population)
FROM world
WHERE name = 'France' OR name = 'Germany' OR name ='Spain';

-- 6
SELECT continent, COUNT(*)
FROM world
GROUP BY continent;

-- 7
SELECT continent, COUNT(*)
FROM world
WHERE population > 10000000
GROUP BY continent;

-- 8
SELECT continent
FROM world
GROUP BY continent
HAVING SUM(population) > 100000000;

