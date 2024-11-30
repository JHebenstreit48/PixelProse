The following is used to organize your code, and it is a container for classes and other namespaces.

```c
namespace
```

The following is a container for data and methods, which brings functionality to your program.

```c
class
```

The following namespace is a fundamental part of the .NET Framework.

```c
System
```

```c
using System;

class Program
{
    static void Main()
    {
        // Using System namespace for console input/output
        Console.WriteLine("Enter your name:");
        string name = Console.ReadLine();

        Console.WriteLine($"Hello, {name}!");
    }
}
```

The following method is the entry point for every application.

- It is teh first method that gets executed when you run a C# program.

```c
Main
```



