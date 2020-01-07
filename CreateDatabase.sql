create database sortingAlgorithmDatabase;
use sortingAlgorithmDatabase;
create table exerciseRecord(username varchar(45), type varchar(20), level int(5), correct int(5), incorrect int(5));
SET SQL_SAFE_UPDATES = 0;

INSERT INTO exerciseRecord (username, type, level, correct, incorrect) VALUES('taiMan1013', 'Insertion', 3,1,2);
INSERT INTO exerciseRecord (username, type, level, correct, incorrect) VALUES('taiMan1013', 'Insertion', 1,3,3);
INSERT INTO exerciseRecord (username, type, level, correct, incorrect) VALUES('taiMan1013', 'Insertion', 2,3,0);
INSERT INTO exerciseRecord (username, type, level, correct, incorrect) VALUES('maryMei2019', 'Selection', 3,3,0);
INSERT INTO exerciseRecord (username, type, level, correct, incorrect) VALUES('maryMei2019', 'Insertion', 1,5,1);
INSERT INTO exerciseRecord (username, type, level, correct, incorrect) VALUES('maryMei2019', 'Bubble', 1,4,2);
INSERT INTO exerciseRecord (username, type, level, correct, incorrect) VALUES('wilsonHappy1234', 'Selection', 2,1,2);
INSERT INTO exerciseRecord (username, type, level, correct, incorrect) VALUES('wilsonHappy1234', 'Bubble', 1,4,2);
INSERT INTO exerciseRecord (username, type, level, correct, incorrect) VALUES('wilsonHappy1234', 'Bubble', 2,3,0);
INSERT INTO exerciseRecord (username, type, level, correct, incorrect) VALUES('wilsonHappy1234', 'Bubble', 2,2,1);