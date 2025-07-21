

here we firt create a relationship database with tables
                           1. person (containing the family member id ,name, color  )
                           2. countries (containing the list of contries with (id,country_code,country_name))
                           3.visit(contains the places each person has visited. it is done by connecting person and countries database by their id's. its has colunms( person_id , country_id))
 
 -the ejs file and css is written.

  - the for baackend 
     1. we write the starting code for import , define app  , middleware like app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));   , and the listen port
    1.1 -  we define the db containing user ,host , world , password.

      2.1 then we write the app.get(/)statement. 




      2.2 before it an array user is defined and a variable currentUserId.
       
       2.3 get the countries and currentuser from the countries() and currentuser() funtions  

      to get the currentuser using database  to get the name array from the person table and store in array
      return the user that is currently logged in .

      2.4 TO get the countries,  from the database using the relation get the country_code of the country the current user hs visited  and push it one by one to countries array 

       2.5 the render the page index.ejs passing countries , total users , color

    EJS-  1.1-  In script when we pass countries it comes in string so we convert it into array again by using   .split(",") and then  get the each country travelled by current user one by one by for loop . by using dom we add color to the respective countries the user visited. 

    2.2 - and in the top where action = 0;
        it takes the user array countaing (id,name,color) creates label for each person in the array .


   3.0 - app.post(/add)
    - here we take  the country name as input in ejs 
    and then in js we get it in 
    (req.body) 



       