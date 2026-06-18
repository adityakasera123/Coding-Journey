class Student{
    private String name;
    private int age;
    
    Student(String name, int age){
        this.name = name;
        this.age = age;
    }
    
    String getName(){
        return this.name;
    }
    void setName(String name){
        this.name=name;
    }
    int getAge(){
        return this.age;
    }
    
    void setAge(int age){
        this.age=age;
    }
  
    
}

public class test1{
    public static void main(String[] args){
        Student s1 = new Student("Golu",25);
        System.out.println(s1.getName());
        System.out.println(s1.getAge());
        
        s1.setAge(20);
        System.out.println(s1.getAge());
        
        s1.setName("aditya");
        System.out.println(s1.getName());
    }
}