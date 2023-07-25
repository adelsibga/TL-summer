import './star.scss'

export const Star = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
        <path
          d="M53.7633 22.1805C53.5762 21.5862 53.2155 21.0616 52.7278 20.674C52.2401 20.2864 51.6475 20.0536 51.0264 20.0055L37.555 18.8409C37.4735 18.8329 37.3958 18.803 37.3299 18.7543C37.2641 18.7057 37.2127 18.6401 37.1812 18.5645L31.9181 6.02202C31.6744 5.44985 31.2678 4.96196 30.749 4.61903C30.2301 4.2761 29.6219 4.09326 29 4.09326C28.3781 4.09326 27.7699 4.2761 27.251 4.61903C26.7322 4.96196 26.3256 5.44985 26.0819 6.02202L20.8188 18.5645C20.7873 18.6401 20.7359 18.7057 20.6701 18.7543C20.6042 18.803 20.5265 18.8329 20.445 18.8409L6.97359 20.0055C6.35246 20.0536 5.75992 20.2864 5.27219 20.674C4.78445 21.0616 4.42384 21.5862 4.23672 22.1805C4.03854 22.7755 4.02123 23.416 4.18697 24.0209C4.35272 24.6258 4.69407 25.168 5.16789 25.5789L15.3881 34.4941C15.4507 34.5497 15.4972 34.6211 15.5227 34.7008C15.5482 34.7805 15.5518 34.8657 15.5331 34.9473L12.4609 48.2034C12.3177 48.8138 12.3586 49.4528 12.5783 50.0399C12.7981 50.6271 13.1869 51.1359 13.6957 51.5022C14.1966 51.8717 14.7967 52.0826 15.4187 52.1077C16.0406 52.1327 16.6558 51.9707 17.1848 51.6426L28.7644 44.6192C28.8324 44.5771 28.9109 44.5548 28.9909 44.5548C29.071 44.5548 29.1494 44.5771 29.2175 44.6192L40.7971 51.6426C41.3316 51.9699 41.951 52.1314 42.5772 52.107C43.2034 52.0825 43.8083 51.8731 44.3156 51.5051C44.8228 51.1372 45.2098 50.6273 45.4275 50.0397C45.6453 49.452 45.6841 48.8131 45.5391 48.2034L42.4759 34.9427C42.4573 34.8611 42.4609 34.776 42.4864 34.6963C42.5119 34.6166 42.5584 34.5452 42.6209 34.4896L52.8412 25.5744C53.3125 25.1627 53.6516 24.6208 53.8157 24.0169C53.9798 23.413 53.9615 22.774 53.7633 22.1805ZM51.0445 23.5217L40.8243 32.4369C40.3888 32.8159 40.065 33.3064 39.8877 33.8558C39.7105 34.4051 39.6865 34.9925 39.8184 35.5544L42.8815 48.8151C42.9041 48.9042 42.8991 48.9981 42.8672 49.0843C42.8352 49.1705 42.7778 49.2449 42.7025 49.2977C42.6344 49.3523 42.5506 49.3837 42.4634 49.3873C42.3762 49.391 42.2901 49.3667 42.2177 49.3181L30.638 42.2947C30.1444 41.9946 29.5777 41.8359 29 41.8359C28.4223 41.8359 27.8556 41.9946 27.3619 42.2947L15.7823 49.3181C15.7099 49.3667 15.6238 49.391 15.5366 49.3873C15.4494 49.3837 15.3656 49.3523 15.2975 49.2977C15.2222 49.2449 15.1648 49.1705 15.1328 49.0843C15.1009 48.9981 15.0959 48.9042 15.1185 48.8151L18.1816 35.5544C18.3135 34.9925 18.2895 34.4051 18.1123 33.8558C17.935 33.3064 17.6112 32.8159 17.1757 32.4369L6.95547 23.5217C6.88557 23.4623 6.83537 23.383 6.8115 23.2944C6.78763 23.2058 6.79122 23.112 6.8218 23.0255C6.84468 22.9394 6.89429 22.8627 6.96349 22.8065C7.0327 22.7503 7.11794 22.7176 7.20695 22.7129L20.6806 21.5483C21.2574 21.4992 21.8098 21.2931 22.2779 20.9525C22.7459 20.6118 23.1118 20.1495 23.3359 19.6158L28.599 7.07327C28.6356 6.99543 28.6936 6.9296 28.7662 6.8835C28.8388 6.83739 28.923 6.81291 29.0091 6.81291C29.0951 6.81291 29.1793 6.83739 29.2519 6.8835C29.3246 6.9296 29.3825 6.99543 29.4191 7.07327L34.6641 19.6158C34.8874 20.1483 35.252 20.6097 35.7183 20.9502C36.1846 21.2908 36.7351 21.4976 37.3103 21.5483L50.784 22.7129C50.873 22.7176 50.9582 22.7503 51.0274 22.8065C51.0966 22.8627 51.1463 22.9394 51.1691 23.0255C51.2008 23.1112 51.2058 23.2044 51.1836 23.2929C51.1613 23.3814 51.1129 23.4612 51.0445 23.5217Z"
          fill="#F3EE66"/>
      </svg>
    </>
  )
}
