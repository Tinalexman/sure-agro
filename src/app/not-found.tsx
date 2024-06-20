"use client";

export default function NotfoundPage() {
  return (
    <div className="w-[100vw] h-[100vh] flex  flex-col justify-center items-center">
      <h1 className="font-cocogoose text-6xl text-brand">Page Not Found</h1>
      <p className="font-cocogoose-light text-[24px] font-bold mt-5">
        There is nothing here ...
      </p>

      <button
        onClick={() => {
          window.location.replace("/");
        }}
        className="px-6 py-4 font-cocogoose text-white text-4xl mt-10 bg-brand"
      >
        Go Home
      </button>
    </div>
  );
}
