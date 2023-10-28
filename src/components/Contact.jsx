const Contact = () => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="bg-[url('./assets/banner.png')] bg-no-repeat bg-contain bg-center w-2/4 h-[640px]"></div>
      <div className="flex flex-col gap-5 px-5 justify-center">
        <h1 className="text-5xl mb-5">Bizimle İletişime Geçin</h1>
        <form className="flex flex-col">
          <label className="block mb-5">
            <span className="block text-sm font-medium text-slate-600 mb-2">
              Ad Soyad
            </span>
            <input
              type="text"
              className="border rounded p-2 w-full "
              placeholder="Lütfen adınızı soyadınızı giriniz..."
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-600 mb-2">
              Email
            </span>
            <input
              type="email"
              className="border rounded p-2 w-full"
              placeholder="Lütfen emailinizi giriniz..."
            />
            <p className="mt-2 invisible peer-invalid:visible text-black text-sm">
              Please provide a valid email address.
            </p>
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-600 mb-2">
              Mesajınız
            </span>
            <textarea
              type="text"
              className="border rounded p-2 w-full "
              placeholder="Lütfen mesajınızı giriniz..."
            />
          </label>
          <button
            className="rounded-lg px-8 py-3 bg-red-600 text-white mt-20 self-end"
            type="submit"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
