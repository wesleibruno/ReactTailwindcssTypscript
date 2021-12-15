export const TestimonialItem = () => {
  return (
    <div className="bg-gray-100 p-8 shadow rounded-xl overflow-hidden md:flex md:p-0">
      <img
        className="w-32 h-32 rounded-full mx-auto md:rounded-none md:w-48 md:h-auto"
        src="/weslei.jfif"
        alt=""
      />
      <div className="pt-6 text-center space-y-4 md:text-left md:p-8">
        <div className="text-lg font-semibold">
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          reprehenderit magni suscipit dolores recusandae asperiores praesentium
          optio a. Quos tempora facere ea nostrum officiis asperiores alias
          omnis labore quae nisi."
        </div>
        <div className="font-medium">
          <div className="text-blue-600 font-bold">Weslei Bruno de Santana</div>
          <div className="text-gray-500">Comentario da internet</div>
        </div>
      </div>
    </div>
  );
};
