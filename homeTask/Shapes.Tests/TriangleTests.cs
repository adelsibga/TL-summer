namespace Shapes.Tests
{
    [TestFixture]
    public class TriangleTests
    {
        [Test]
        public void Constructor_NegativeBaseSideLength_ThrowsArgumentException()
        {
            // arrange
            // act
            // assert
            Assert.Throws<ArgumentException>(() => new Triangle(-1, 5, 6));
        }

        [Test]
        public void Constructor_NegativeLeftSideLength_ThrowsArgumentException()
        {
            // arrange
            // act
            // assert
            Assert.Throws<ArgumentException>(() => new Triangle(5, -1, 6));
        }

        [Test]
        public void Constructor_NegativeRightSideLength_ThrowsArgumentException()
        {
            // arrange
            // act
            // assert
            Assert.Throws<ArgumentException>(() => new Triangle(6, 5, -1));
        }

        [Test]
        public void Constructor_ZeroSideLength_ThrowsArgumentException()
        {
            // arrange
            // act
            // assert
            Assert.Throws<ArgumentException>(() => new Triangle(0, 0, 0));
        }

        [Test]
        public void Constructor_WrongBaseSideLengths_ThrowsArgumentException()
        {
            // arrange
            // act
            // assert
            Assert.Throws<ArgumentException>(() => new Triangle(1, 2, 4));
        }

        [Test]
        public void Constructor_WrongLeftSideLengths_ThrowsArgumentException()
        {
            // arrange
            // act
            // assert
            Assert.Throws<ArgumentException>(() => new Triangle(2, 1, 4));
        }

        [Test]
        public void Constructor_WrongRightSideLengths_ThrowsArgumentException()
        {
            // arrange
            // act
            // assert
            Assert.Throws<ArgumentException>(() => new Triangle(2, 4, 1));
        }

        [Test]
        public void CalculateArea_SideLengthEqualToOne_ReturnsValidArea()
        {
            // arrange
            double baseSide = 1;
            double leftSide = 1;
            double rightSide = 1;

            double semiPerimeter = (baseSide + leftSide + rightSide) / 2;

            double expected = Math.Sqrt(semiPerimeter * (semiPerimeter - baseSide) * (semiPerimeter - leftSide) * (semiPerimeter - rightSide));

            // act
            Triangle triangle = new Triangle(baseSide, leftSide, rightSide);
            double actual = triangle.CalculateArea();

            // assert
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        public void CalculateArea_ValidSideLength_ReturnsValidArea()
        {
            // arrange
            double baseSide = 3;
            double leftSide = 4;
            double rightSide = 5;

            double semiPerimeter = (baseSide + leftSide + rightSide) / 2;

            double expected = Math.Sqrt(semiPerimeter * (semiPerimeter - baseSide) * (semiPerimeter - leftSide) * (semiPerimeter - rightSide));

            // act
            Triangle triangle = new Triangle(baseSide, leftSide, rightSide);
            double actual = triangle.CalculateArea();

            // assert
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        public void CalculatePerimeter_SideLengths_ReturnsValidPerimeter()
        {
            // arrange
            double baseSide = 1;
            double leftSide = 1;
            double rightSide = 1;

            double expected = baseSide + leftSide + rightSide;

            // act
            Triangle triangle = new Triangle(baseSide, leftSide, rightSide);
            double actual = triangle.CalculatePerimeter();

            // assert
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        public void CalculatePerimeter_ValidSideLength_ReturnsValidPerimeter()
        {
            // arrange
            double baseSide = 3;
            double leftSide = 4;
            double rightSide = 5;

            double expected = baseSide + leftSide + rightSide;

            // act
            Triangle triangle = new Triangle(baseSide, leftSide, rightSide);
            double actual = triangle.CalculatePerimeter();

            // assert
            Assert.That(actual, Is.EqualTo(expected));
        }
    }
}