int[] elements = { 800, 11, 50, 771, 649, 770, 240, 9 };

int length = elements.Length;

int loopIterations = 0;

for(int i = 0; i < length; i++)
{

    for(int j = 0; j < length - 1 - i; j++)
    {
        if(elements[j] > elements[j + 1])
        {
            (elements[j], elements[j + 1]) = (elements[j + 1], elements[j]);
            Console.WriteLine(String.Join(" ", elements));
            loopIterations++;
        }
    }
}

Console.WriteLine(String.Join(" ", elements));
Console.WriteLine(loopIterations);