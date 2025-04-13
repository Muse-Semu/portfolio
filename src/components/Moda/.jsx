const Modal = ({ isOpen, onClose, name, description, images }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-tertiary p-6 rounded-xl max-w-xl w-full relative text-white">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl text-white hover:text-red-400"
        >
          &times;
        </button>
        <h2 className="text-[24px] font-bold mb-4">{name}</h2>
        <p className="text-secondary text-[16px] leading-[26px] mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {images.map((img, idx) => (
            <img
              key={`modal-img-${idx}`}
              src={img}
              alt={`${name}-${idx}`}
              className="w-[100px] h-[100px] object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
