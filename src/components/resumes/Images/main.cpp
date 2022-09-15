#include <iostream>
#include <string>

using namespace std;

class Sourabh {
public:
  string name = "Sourabh";
  int age;
  void get_data() {

    cout << "Enter the age of Sourabh : ";
    cin >> age;
  }
  void put_data() {
    cout << "<--- Details of Sourabh guy --->" cout << "The name is : " << name
         << endl;
    cout << "The age is : " << age << endl;
  }
};
class vehicle : public Sourabh {
public:
  string car_name = "Honda";
  string bike_name = "Ducatti";

  void get() {
    Sourabh S;
    S.get_data();
  }
  void put() {
    Sourabh S;
    S.put_data();
    cout << "The vehicle Sourabh have : " << car_name << " "
         << "And"
         << " " << bike_name;
    cout << endl;
  }
};

class car : public vehicle {
public:
  int price;
  string fuel = "Diseal";
  string model = "Honda";
  string new_car = "New";
  string imported = "Indian";

  void get_Data() {
    vehicle v;
    v.get();

    cout << "Enter the price of car : "
         << " ";
    cin >> price;
  }

  void display() {
    vehicle v;
    v.put();
    cout << endl;
    cout << "<<---Details of Honda Car own by Sourabh --->>" << endl;
    cout << "The car company is :" << model << endl;
    cout << "The Price of car is :" << price << endl;
    cout << "The Fuel is used in Car : " << fuel << endl;
    cout << "The car is : " << new_car << endl;
    cout << "The car is : " << imported << endl;
  }
};

class Bike : public car {

public:
  int price1;
  string fuel1 = "Petrol";
  string model1 = "Ducati ";
  string new_car1 = "Used";
  string import = "Indian";

  void enter() {
    car c;
    c.get_Data();
    cout << "Enter the price of Bike : "
         << " ";
    cin >> price1;
  }

  void display_data() {
    car c;
    c.display();
    cout << endl;
    cout << "<<---Details of Ducati Bike own by Sourabh --->>" << endl;
    cout << "The car company is :" << model1 << endl;
    cout << "The Price of Bike is :" << price1 << endl;
    cout << "The Fuel is used in Bike : " << fuel1 << endl;
    cout << "The Bike is : " << new_car1 << endl;
    cout << "The Bike is : " << import << endl;
  }
};

int main() {
  // car c;
  // c.get_Data();

  Bike b;

  b.enter();

  b.display_data();
}