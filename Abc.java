import java.awt.*;
class Abc extends Frame
{
public Abc()
{
GridLayout g=new GridLayout(100,20,40,30);
GridLayout g2=new GridLayout(100,80,40,30);
Label l1=new Label("First Name");
l1.setLayout(g);
add(l1);
Label l2=new Label("Last Name");
l2.setLayout(g2);
add(l2);

}



public static void main(String args[])
{
Abc f=new Abc();
f.setVisible(true);
f.setSize(1280,720);
f.setTitle("My Frame");
}
}