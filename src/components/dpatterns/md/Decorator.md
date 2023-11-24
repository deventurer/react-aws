The Decorator design pattern is a structural pattern that allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class. It is one of the Gang of Four design patterns and is used for extending the functionalities of classes in a flexible and reusable way.

### Intent:

- Attach additional responsibilities to an object dynamically.
- Provide a flexible alternative to subclassing for extending functionality.

### Components:

1. **Component:**
   - Defines the interface for objects that can have responsibilities added dynamically.
   - This can be an interface or an abstract class.

2. **ConcreteComponent:**
   - Implements the Component interface.
   - Represents the core functionality to which additional responsibilities can be added.

3. **Decorator:**
   - Also implements the Component interface, following the same interface as the ConcreteComponent.
   - Maintains a reference to a Component object.
   - Provides a way to add new responsibilities.

4. **ConcreteDecorator:**
   - Extends the functionality of the Decorator.
   - Adds new responsibilities to the component.

### Java Implementation Example:

Let's consider an example where we have a simple coffee application. We'll have a `Coffee` interface representing the base coffee, a `SimpleCoffee` class implementing the base coffee, and decorators such as `MilkDecorator` and `SugarDecorator` that add functionalities to the base coffee.

```java
// Component: Coffee
public interface Coffee {
    double cost();
    String description();
}

// ConcreteComponent: SimpleCoffee
public class SimpleCoffee implements Coffee {
    @Override
    public double cost() {
        return 2.0; // Base cost of a simple coffee
    }

    @Override
    public String description() {
        return "Simple Coffee";
    }
}

// Decorator: CoffeeDecorator
public abstract class CoffeeDecorator implements Coffee {
    protected Coffee decoratedCoffee;

    public CoffeeDecorator(Coffee decoratedCoffee) {
        this.decoratedCoffee = decoratedCoffee;
    }

    @Override
    public double cost() {
        return decoratedCoffee.cost();
    }

    @Override
    public String description() {
        return decoratedCoffee.description();
    }
}

// ConcreteDecorator: MilkDecorator
public class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(Coffee decoratedCoffee) {
        super(decoratedCoffee);
    }

    @Override
    public double cost() {
        return super.cost() + 1.0; // Additional cost for milk
    }

    @Override
    public String description() {
        return super.description() + " with Milk";
    }
}

// ConcreteDecorator: SugarDecorator
public class SugarDecorator extends CoffeeDecorator {
    public SugarDecorator(Coffee decoratedCoffee) {
        super(decoratedCoffee);
    }

    @Override
    public double cost() {
        return super.cost() + 0.5; // Additional cost for sugar
    }

    @Override
    public String description() {
        return super.description() + " with Sugar";
    }
}

// Client Code
public class CoffeeShop {
    public static void main(String[] args) {
        // Order a simple coffee
        Coffee simpleCoffee = new SimpleCoffee();
        System.out.println("Cost: " + simpleCoffee.cost() + ", Description: " + simpleCoffee.description());

        // Add milk to the coffee
        Coffee milkCoffee = new MilkDecorator(simpleCoffee);
        System.out.println("Cost: " + milkCoffee.cost() + ", Description: " + milkCoffee.description());

        // Add sugar to the coffee
        Coffee sweetCoffee = new SugarDecorator(milkCoffee);
        System.out.println("Cost: " + sweetCoffee.cost() + ", Description: " + sweetCoffee.description());
    }
}
```

In this example, `Coffee` is the component interface, `SimpleCoffee` is the concrete component, and `CoffeeDecorator`, `MilkDecorator`, and `SugarDecorator` are the decorator classes. The client code demonstrates how decorators can be combined to create a variety of coffee combinations with different costs and descriptions.

This pattern allows for a flexible and extensible way to enhance or modify the behavior of objects, promoting the principles of open/closed design and single responsibility.