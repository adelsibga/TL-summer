namespace Shapes;

public class Square : IShape
{
    private double _side;
    public double sideLength
    {
        get => _side;
        set
        {
            if(value <= 0)
            {
                throw new ArgumentException("Side must be positive");
            }
            _side = value;
        }
    }

    public double CalculateArea()
    {
        return sideLength * sideLength;
    }

    public double CalculatePerimeter()
    {
        return 4 * sideLength;
    }
}