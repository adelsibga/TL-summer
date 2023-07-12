namespace Shapes;

public class Circle : IShape
{
    private double _radius;
    public double Radius
    {
        get => _radius;
        set
        {
            if (value <= 0)
            {
                throw new ArgumentException("Radius must be positive");
            }
            _radius = value;
        }
    }

    public double CalculateArea()
    {
        return Math.PI * Radius * Radius;
    }

    public double CalculatePerimeter()
    {
        return 2 * Math.PI * Radius;
    }
}