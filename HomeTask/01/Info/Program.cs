﻿Console.WriteLine("Enter your full name");
string name = Console.ReadLine();

Console.WriteLine("Enter your age");
string age = Console.ReadLine();

Console.WriteLine("Enter your email");
string email = Console.ReadLine();

Console.WriteLine("Enter your github link");
string github = Console.ReadLine();

Console.Clear();
Console.Write(@$"Full name: {name},
    Age: {age},
    Email: {email},
    Github link: {github}"
);