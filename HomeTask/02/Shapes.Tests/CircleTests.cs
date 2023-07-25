namespace Shapes.Tests
{
    [TestFixture]
    public class CircleTests
    {
        [Test]
        public void Constructor_NegativeRadiusLength_ThrowsArgumentException()
        {
            // arrange
            // act
            // assert
            Assert.Throws<ArgumentException>(() => new Circle(-1));
        }

        [Test]
        public void Constructor_ZeroRadiusLength_ThrowsArgumentException()
        {
            // arrange
            // act
            // assert
            Assert.Throws<ArgumentException>(() => new Circle(0));
        }

        [Test]
        public void CalculateArea_RadiusLengthEqualToOne_ReturnsValidArea()
        {
            // arrange
            double radius = 1;
            double expected = Math.PI * radius * radius;

            // act
            Circle circle = new Circle(radius);
            double actual = circle.CalculateArea();

            // assert
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        public void CalculateArea_RadiusLengthEqualToTen_ReturnsValidArea()
        {
            // arrange
            double radius = 10;
            double expected = Math.PI * radius * radius;

            // act
            Circle circle = new Circle(radius);
            double actual = circle.CalculateArea();

            // assert
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        public void CalculatePerimeter_RadiusLengthEqualToOne_ReturnsValidPerimeter()
        {
            // arrange
            double radius = 1;
            double expected = 2 * Math.PI * radius;

            // act
            Circle circle = new Circle(radius);
            double actual = circle.CalculatePerimeter();

            // assert
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        public void CalculatePerimeter_RadiusLengthEqualToFifteen_ReturnsValidPerimeter()
        {
            // arrange
            double radius = 15;
            double expected =  2 * Math.PI * radius;

            // act
            Circle circle = new Circle(radius);
            double actual = circle.CalculatePerimeter();

            // assert
            Assert.That(actual, Is.EqualTo(expected));
        }
    }
}