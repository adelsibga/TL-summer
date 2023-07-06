int[] elements = { 800, 11, 50, 771, 649, 770, 240, 9 };

int length = elements.Length;

bool isSorted(int[] arr)
{
    int j = arr.Length - 1;
    int i = 1;
    int element = arr[0];

    if (j < 1)
    {
        return true;
    }

    while (i <= j && arr[0] <= (element = arr[i])) i++;
    {
        return i > j;
    }
}

if (!isSorted(elements))
{
    for (int i = 0; i < length; i++)
    {
        for (int j = 0; j < length - 1 - i; j++)
        {
            if (elements[j] > elements[j + 1])
            {
                elements[j] = elements[j] + elements[j + 1];
                elements[j + 1] = elements[j] - elements[j + 1];
                elements[j] = elements[j] - elements[j + 1];
            }
        }
    }
}

Console.WriteLine(String.Join(" ", elements));