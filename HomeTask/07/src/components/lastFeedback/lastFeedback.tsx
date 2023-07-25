import './lastFeedback.scss'

const imagesList: string[] = [
  'src/assets/images/1.png',
  'src/assets/images/2.png',
  'src/assets/images/3.png',
  'src/assets/images/4.png'
]

const getRandomImg = (max: number) => {
  return Math.floor(Math.random() * max)
}

const getRandomName = (length: number) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export const LastFeedback = () => {
  return (
    <>
      <div className="feedback">
        <img
          className="feedback__img"
          src={imagesList[getRandomImg(imagesList.length)]}
          alt="user-image"
        />
        <div className="feedback__content-wrapper">
          <h2 className="title title_h2 feedback__title">
            {/*Это ты*/}
            {getRandomName(6)}
          </h2>
          <p className="feedback__text">
            Lorem ipsum dolor sit amet consectetur. Viverra duis tortor libero sed aenean congue quam. Malesuada pharetra elementum etiam vulputate
            lacus turpis. Enim felis lobortis bibendum ac. Nulla porta mi fringilla luctus lorem lacus lectus pellentesque.
          </p>
        </div>
        <div className="numbers_small">
          <span>4</span>/<span>5</span>
        </div>
      </div>
    </>
  )
}
