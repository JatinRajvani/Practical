// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.Scanner;

class Main {
    static void fibbo(int val){
     if(val==0){
         System.out.println("fibbonaci sequence not made");
     };
     int a=0;
     int b=1;
     if(val==1){
                  System.out.println(a);
     };
         if(val==2){
                  System.out.println(a);
                   System.out.println(b);
     };
     if(val>2){
          System.out.println(a);
          System.out.println(b);
         for(int i=2;i<val;i++){
             int temp=a+b;
             System.out.println(temp);
             a=b;
             b=temp;
         }
     }
};
    public static void main(String[] args) {
    Scanner k= new Scanner(System.in);
    int n=k.nextInt();
     fibbo(n);
    }
}