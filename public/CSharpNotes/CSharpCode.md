# Writing Your First C# Program
---

A simple C# program starts with the <span class="code">Main</span> method, which serves as the entry point. Here is an example of a basic program:

```c
using System;

class Program
{
    static void Main()
    {
        // Print "Hello, World!" to the console
        Console.WriteLine("Hello, World!");
    }
}
```

## Classes in C#
---

The following is a container for data and methods, which brings functionality to your program. A class is the blueprint for objects and defines the data (fields) and behaviors (methods) that an object can have.

```c
class ExampleClass
{
    int exampleField;

    public void ExampleMethod()
    {
        // Method logic
    }
}
```

# Namespaces in C#
---

## What Are Namespaces?
Namespaces are used to organize your code and act as containers for classes and other namespaces. They are a fundamental part of C# programming for managing large-scale applications.

## Example of a Namespace
```c
namespace ExampleNamespace
{
    class ExampleClass
    {
        public void ExampleMethod()
        {
            // Method logic
        }
    }
}
```

## Using the System Namespace
The <span class="code">System</span> namespace is a fundamental part of the .NET Framework and provides core functionality.

```c
using System;

class Program
{
    static void Main()
    {
        // Using System namespace
        // for console input/output
        Console.WriteLine("Enter your name:");
        string name = Console.ReadLine();

        Console.WriteLine($"Hello, {name}!");
    }
}
```

## Entry Point for Applications
The <span class="code">Main</span> method serves as the entry point for every application. It is the first method that gets executed when you run a C# program.

```c
class Program
{
    static void Main()
    {
        // Program starts here
        Console.WriteLine("Welcome to C# Programming!");
    }
}
```

## Nested Namespaces
Namespaces can contain other namespaces to better organize your code.

```c
namespace OuterNamespace
{
    namespace InnerNamespace
    {
        class InnerClass
        {
            public void InnerMethod()
            {
                // Logic for inner method
            }
        }
    }
}
```

## Alias for Namespaces
Aliases can be used to simplify access to namespaces or avoid naming conflicts.

```c
using IO = System.IO;

class Program
{
    static void Main()
    {
        // Using alias for System.IO
        IO.File.WriteAllText("example.txt", "Hello, World!");
    }
}
```
