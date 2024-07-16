import { CodeBlock } from "react-code-blocks";
import "./patterns.css";
import * as React from "react";

const codeblock1 = ' // Strategy interface\n' +
    '                            public interface PaymentStrategy {\n' +
    '                            void pay(int amount);\n' +
    '                        }';

const codeblock2 = ' // ConcreteStrategy \n' +
    '                    public class CreditCardPayment implements PaymentStrategy {\n' +
    '                    private String cardNumber;\n' +
    '                    public CreditCardPayment(String cardNumber) {\n' +
    '                    this.cardNumber = cardNumber;\n' +
    '            }';
 const codeblock3 =   '                    Override\n' +
    '                    public void pay(int amount) {\n' +
    '                    System.out.println("Paid " + amount + " using credit card " + cardNumber);\n' +
    '            }\n' +
    '            }\n' +
    '\n' +
    '                    // ConcreteStrategy 2\n' +
    '                    public class PayPalPayment implements PaymentStrategy {\n' +
    '                    private String email;\n' +
    '\n' +
    '                    public PayPalPayment(String email) {\n' +
    '                    this.email = email;\n' +
    '            }\n' +
    '\n' +
    '                    Override\n' +
    '                    public void pay(int amount) {\n' +
    '                    System.out.println("Paid " + amount + " using PayPal to " + email);\n' +
    '            }\n' +
    '            }\n' +
    '\n' +
    '        //Context Class:\n' +
    '\n' +
    '                    // Context class\n' +
    '                    public class PaymentContext {\n' +
    '                    private PaymentStrategy paymentStrategy;\n' +
    '\n' +
    '                    public PaymentContext(PaymentStrategy paymentStrategy) {\n' +
    '                    this.paymentStrategy = paymentStrategy;\n' +
    '            }\n' +
    '\n' +
    '                    public void performPayment(int amount) {\n' +
    '                    paymentStrategy.pay(amount);\n' +
    '            }\n' +
    '\n' +
    '                    public void setPaymentStrategy(PaymentStrategy paymentStrategy) {\n' +
    '                    this.paymentStrategy = paymentStrategy;\n' +
    '            }\n' +
    '            }\n' +
    '\n' +
    '        //Client Code:\n' +
    '\n' +
    '                    public class Main {\n' +
    '                    public static void main(String[] args) {\n' +
    '                    // Create context with a default strategy\n' +
    '                    PaymentContext paymentContext = new PaymentContext(new CreditCardPayment("1234-5678-9012-3456"));\n' +
    '\n' +
    '                    // Perform payment using the default strategy\n' +
    '                    paymentContext.performPayment(100);\n' +
    '\n' +
    '                    // Change the strategy at runtime\n' +
    '                    paymentContext.setPaymentStrategy(new PayPalPayment("example@example.com"));\n' +
    '\n' +
    '                    // Perform payment using the new strategy\n' +
    '                    paymentContext.performPayment(50);\n' +
    '            }\n' +
    '            }';

function Strategy() {
return (
    <div className="card">
            <p>
                    The Strategy design pattern is a behavioral design pattern that defines a family of algorithms,
                    encapsulates each algorithm, and makes them interchangeable. It allows the client to choose an algorithm
                    from a family of algorithms at runtime, and it lets the algorithm vary independently from the context that
                    uses it.

                    In Java, the Strategy pattern involves defining a family of algorithms, encapsulating each algorithm,
                    and making them interchangeable. The strategy pattern allows a client class to choose from a family of
                    algorithms, encapsulate each one, and make them interchangeable. This pattern defines a family of algorithms,
                    encapsulates each algorithm, and makes them interchangeable. The strategy pattern lets the algorithm vary
                    independently from clients that use it.

                    Here is a more detailed explanation of how to implement the Strategy pattern in Java
            </p>
        <h3> UML Diagram: </h3>

            <p>Let us start with a basic UML diagram for the Strategy pattern:</p>

        <p>
                1. <b>Context:</b><br/>
        - This is the class that contains a reference to the strategy interface and can switch between different strategies.
                - In Java, this class is often referred to as the "context". <br/>

            2. <b>Strategy:</b><br/>
        - This is the interface or abstract class that defines the family of algorithms.<br/>
        - In Java, this can be an interface or an abstract class, depending on the level of common behavior
            among strategies. <br/>

            3. <b>ConcreteStrategy:</b><br/>
        - These are the concrete implementations of the strategy interface, each providing a specific algorithm.<br/>

            <h3>Java Implementation:</h3>

        Let's look at a simplified example of a strategy pattern in Java, where we have a `PaymentContext` that can use
            different payment strategies:<br/>

            <h3>Strategy Interface: </h3>
        </p>

        <CodeBlock
            text={codeblock1}
            language='java'
            showLineNumbers={true}
            theme='atom-one-dark'
        />

            <h3>ConcreteStrategy Classes:</h3>

        <CodeBlock
            text={codeblock2 + codeblock3}
            language='java'
            showLineNumbers={true}
            theme='atom-one-dark'
        />
<p>
        In this example, the `PaymentContext` class represents the context that can use different payment strategies.
            The <b>PaymentStrategy</b> interface defines the family of algorithms, and `CreditCardPayment`
            and `PayPalPayment` are concrete implementations of the strategy interface. <br/>

        The client code can easily switch between different payment strategies at runtime, making the system more
            flexible and extensible. This is a simple example, but the Strategy pattern becomes especially powerful
            in more complex scenarios where multiple algorithms need to be managed and swapped dynamically.
</p>
    </div>
)
}

export default Strategy