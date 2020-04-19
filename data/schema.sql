-- API 2
DROP TABLE IF EXISTS teamTwo;
    CREATE TABLE teamTwo(
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        embedTitle VARCHAR(255),
        thumbnail VARCHAR(50000),
        resultName1 VARCHAR(255),
        resultUrl1 VARCHAR(50000),
        resultName2 VARCHAR(255),
        resultUrl2 VARCHAR(50000),
        totalResults1 VARCHAR(255),
        totalResults2 VARCHAR(50000),
        embedVideo VARCHAR(5000)
    )