import MainLayout from '../../components/layout/MainLayout'

const Contact = () => {
    return (
        <MainLayout>
            <div>
                <h1 className='py-16 text-5xl text-on-surface text-center font-bold'>Liên hệ với chúng tôi</h1>
                <form className="space-y-6 bg-white shadow-md rounded-xl p-8">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Họ và tên</label>
          <input
            type="text"
            placeholder="Nhập họ tên"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Nội dung</label>
          <textarea
            placeholder="Nhập nội dung liên hệ..."
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Gửi liên hệ
        </button>
      </form>
            </div>
        </MainLayout>
    )
}

export default Contact
