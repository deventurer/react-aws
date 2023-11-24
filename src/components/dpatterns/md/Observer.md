The Observer design pattern is a behavioral pattern that defines a one-to-many dependency between objects, so that when one object changes state, all its dependents are notified and updated automatically. It is often used to implement distributed event handling systems.

### Intent:

- Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
- Encapsulate the core component (subject) from its dependent components (observers) so that they can be added, removed, and notified independently.

### Components:

1. **Subject:**
   - Maintains a list of observers.
   - Provides methods to register, unregister, and notify observers.
   - Usually contains the state that the observers are interested in.

2. **Observer:**
   - Defines an interface for updating its dependents.
   - Concrete observers implement this interface to receive updates.

3. **ConcreteSubject:**
   - Implements the Subject interface.
   - Maintains the state of interest.
   - Notifies observers of changes in state.

4. **ConcreteObserver:**
   - Implements the Observer interface.
   - Stores a reference to the ConcreteSubject.
   - Implements the update method to receive and process updates.

### Java Implementation Example:

Let's consider a simple example where we have a weather station (subject) and display units (observers) that need to be notified whenever the weather changes.

```java
import java.util.ArrayList;
import java.util.List;

// Subject: WeatherStation
interface Subject {
    void registerObserver(Observer observer);
    void removeObserver(Observer observer);
    void notifyObservers();
}

// Observer: DisplayUnit
interface Observer {
    void update(String weather);
}

// ConcreteSubject: WeatherStation
class WeatherStation implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private String weather;

    public void setWeather(String weather) {
        this.weather = weather;
        notifyObservers();
    }

    @Override
    public void registerObserver(Observer observer) {
        observers.add(observer);
    }

    @Override
    public void removeObserver(Observer observer) {
        observers.remove(observer);
    }

    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(weather);
        }
    }
}

// ConcreteObserver: DisplayUnit
class DisplayUnit implements Observer {
    private String weather;

    @Override
    public void update(String weather) {
        this.weather = weather;
        display();
    }

    private void display() {
        System.out.println("Displaying weather: " + weather);
    }
}

// Client Code
public class Main {
    public static void main(String[] args) {
        WeatherStation weatherStation = new WeatherStation();

        DisplayUnit displayUnit1 = new DisplayUnit();
        DisplayUnit displayUnit2 = new DisplayUnit();

        weatherStation.registerObserver(displayUnit1);
        weatherStation.registerObserver(displayUnit2);

        // Weather changes, observers are notified
        weatherStation.setWeather("Sunny");

        // Unregister an observer
        weatherStation.removeObserver(displayUnit1);

        // Weather changes again, remaining observer is notified
        weatherStation.setWeather("Rainy");
    }
}
```

In this example, the `WeatherStation` is the subject that maintains a list of observers (`DisplayUnit`). When the weather changes, it notifies all registered observers, and they update their displays accordingly.

The Observer pattern provides a flexible way to implement distributed event handling systems, making it easier to decouple and extend the functionality of the subject without modifying the observers. This pattern is widely used in GUI frameworks, event-driven systems, and other scenarios where a change in one object needs to trigger actions in other objects.