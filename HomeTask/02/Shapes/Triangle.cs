namespace Shapes;

public class Triangle : IShape
{
    private double _baseSide;
    private double _leftSide;
    private double _rightSide;

    public double BaseSide
    {
        get => _baseSide;
        set
        {
            if(value <= 0)
            {
                throw new ArgumentException("BaseSide must be positive");
            }
            _baseSide = value;
        }
    }

    public double LeftSide
    {
        get => _leftSide;
        set
        {
            if(value <= 0)
            {
                throw new ArgumentException("LeftSide must be positive");
            }
            _leftSide = value;
        }
    }

    public double RightSide
    {
        get => _rightSide;
        set
        {
            if(value <= 0)
            {
                throw new ArgumentException("RightSide must be positive");
            }
            _rightSide = value;
        }
    }

    private bool isTriangleExist()
    {
        return BaseSide + LeftSide > RightSide &&
            BaseSide + RightSide > LeftSide &&
            LeftSide + RightSide > BaseSide;
    }

    public Triangle(double side1, double side2, double side3)
    {
        BaseSide = side1;
        LeftSide = side2;
        RightSide = side3;

        if(!isTriangleExist())
        {
            throw new ArgumentException("Triangle does not exist");
        }
    }

    public double CalculateArea()
    {
        double semiPerimeter = CalculatePerimeter() / 2;
        return Math.Sqrt(semiPerimeter * (semiPerimeter - BaseSide) * (semiPerimeter - LeftSide) * (semiPerimeter - RightSide));
    }

    public double CalculatePerimeter()
    {
        return BaseSide + LeftSide + RightSide;
    }
}