namespace Shapes.Tests
{
    [TestFixture]
    public class SquareTests
    {
        [Test]
        public void Constructor_NegativeSideLength_ThrowsArgumentException()
        {
            // arrange
            // act
            // assert
            Assert.Throws<ArgumentException>(() => new Square(-1));
        }

        [Test]
        public void Constructor_ZeroSideLength_ThrowsArgumentException()
        {
            // arrange
            // act
            // assert
            Assert.Throws<ArgumentException>(() => new Square(0));
        }

        [Test]
        public void CalculateArea_SideLengthEqualToOne_ReturnsSquaredNumber()
        {
            // arrange
            double side = 1;
            double expected = 1;

            // act
            Square square = new Square(side);
            double actual = square.CalculateArea();

            // assert
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        public void CalculateArea_SideLengthEqualToTen_ReturnsSquaredNumber()
        {
            // arrange
            double side = 10;
            double expected = 100;

            // act
            Square square = new Square(side);
            double actual = square.CalculateArea();

            // assert
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        public void CalculatePerimeter_SideLengthEqualToOne_ReturnsProductOfFourAndSideLength()
        {
            // arrange
            double side = 1;
            double expected = 4;

            // act
            Square square = new Square(side);
            double actual = square.CalculatePerimeter();

            // assert
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        public void CalculatePerimeter_SideLengthEqualToFifteen_ReturnsProductOfFourAndSideLength()
        {
            // arrange
            double side = 15;
            double expected = 60;

            // act
            Square square = new Square(side);
            double actual = square.CalculatePerimeter();

            // assert
            Assert.That(actual, Is.EqualTo(expected));
        }
    }
}