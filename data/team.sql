--API 1
DROP TABLE IF EXISTS teamOne;
    CREATE TABLE teamOne(
        id SERIAL PRIMARY KEY,
        team VARCHAR(255),
        formed VARCHAR(255),
        sport VARCHAR(255),
        league VARCHAR(255),
        stadium VARCHAR(255),
        stadiumImg VARCHAR(255),
        stadiumLocation VARCHAR(255),
        website VARCHAR(255),
        teamDescription TEXT,
        badge VARCHAR(50000),
        logo VARCHAR(50000),
        clothes VARCHAR(50000)
    )
