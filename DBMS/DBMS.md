

---

## Que-1

```sql
CREATE TABLE Hotels (
    hotel_id INT PRIMARY KEY,
    hotel_name VARCHAR(50) UNIQUE,
    city VARCHAR(50),
    available_rooms INT
);
 
```
---
## Que-2

```sql
insert into Hotels values
(1,"Madhvi","Ahmedabad",10),
(2,"Lajwanti","Ahmedabad", 5);

UPDATE hotels
SET available_rooms = 20
WHERE hotel_id = 1;

delete from hotels where hotel_id=1;

select sum(available_rooms) As
total
from hotels;

select avg(available_rooms) As
average
from hotels;
```
