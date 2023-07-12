int[] elements = { 800, 11, 50, 771, 649, 770, 240, 9 };

int length = elements.Length;
int i = 0;

bool swapped = true;

while(swapped)
{
    swapped = false;

    for(int j = 0; j < length - 1 - i; j++)
    {
        if(elements[j] > elements[j + 1])
        {
            (elements[j], elements[j + 1]) = (elements[j + 1], elements[j]);
            swapped = true;
        }
    }
    i++;
}

Console.WriteLine(String.Join(" ", elements));