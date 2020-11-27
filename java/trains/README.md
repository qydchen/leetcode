Make sure maven is installed in your command line

• How to compile the source code on the command line
`mvn clean install`

• How to run the application from the command line, along with a sample input file
In the root directory of the folder:
Input the path to the input file as a command argument when running the jar
`java -jar target/trains-1.0.SNAPSHOT.jar graph.txt`

• How to run the unit tests
`mvn test`

• Any assumptions you made while writing the source code, including known limitations, and
any other info you’d like us to know
Most of the solutions all involve recursive depth first search. There could be stack overflow errors if the input size is too big