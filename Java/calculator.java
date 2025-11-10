// Online Java Compiler
// Use this editor to write, compile and run your Java code online
class calculator{
    int add(int a, int b){
        return a+b;
    };
    int add(int a, int b, int c){
        return a+b+c;
    };
    double add(double a , double b){
        return a+b;
    };
};


class Main {
    
    public static void main(String[] args) {
        calculator calc =new calculator();
        System.out.println(calc.add(100000,200000));
    };
}