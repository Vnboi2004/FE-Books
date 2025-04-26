import MainLayout from '../../components/layout/MainLayout'

const Contact = () => {
    return (
      <MainLayout>
        <div>
          <h1 className='py-16 text-5xl text-on-surface text-center font-bold'>Liên hệ với chúng tôi</h1>
          <div className='relative'>
            {/* Content left */}
            <div className='absolute top-0 left-0 bg-surface-1 w-full h-full md:w-[calc(50%+32px)]'>
              <div>
                {/* Logo */}
                <img src="" alt="" />
                {/* Text */}
                <div>
                  {/* Title */}
                  <h1></h1>
                  {/* Text content */}
                  <h2></h2>
                  {/* Description */}
                  <p></p>
                </div>
              </div>
            </div>
            {/* Content right */}
            <div className='max-w-[740px] md:w-1/2 h-full bg-surface-2'>
              <div>
                {/* Title */}
                <h1></h1>
                {/* Info contact us */}
                
              </div>
            </div>
          </div>
        </div>        
      </MainLayout>
    )
}

export default Contact
