export function QuestionComponent({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="p-4 sm:p-5 border-b border-gray-300">
      <div className="flex justify-between items-center gap-4">
        <h3 className="text-base sm:text-lg font-semibold text-[#333]">
          {question}
        </h3>

        <button
          onClick={onToggle}
          className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 border border-black rounded-full transition-transform duration-300 shrink-0"
        >
          <i
            className={`bi bi-arrow-down text-black transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] mt-3" : "max-h-0"
        }`}
      >
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
