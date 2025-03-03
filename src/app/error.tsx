"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorComponent = ({ error, reset }: ErrorProps) => {
  console.log(error);
  return (
    <section style={{ marginTop: "140px" }} className=" container !mb-10">
      <div className="border-2 max-w-4xl mx-auto border-dotted py-20 space-y-4 text-center rounded-lg ">
        <h2 className="text-xl sm:text-3xl font-bold text-red-500">
          شئ ما حدث خطأ
        </h2>
        <p className="text-muted-foreground">رسالة الخطأ: {error?.message}</p>
        <button
          onClick={() => reset()}
          className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700">
          إعادة المحاولة
        </button>
      </div>
    </section>
  );
};

export default ErrorComponent;
