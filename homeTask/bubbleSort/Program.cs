int[] arr = {800, 11, 50, 771, 649, 770, 240, 9};

int tmp = 0;

for (int i = 0; i < arr.Length; i++)
{
    for (int j = 0; j < arr.Length - 1; j++)
    {
        if (arr[j] > arr[j + 1])
        {
            tmp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = tmp;
        }
    }
}

for (int i = 0; i < arr.Length; i++)
{
    Console.Write(arr[i] + " ");
}