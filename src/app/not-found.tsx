"use client";

export default function NotfoundPage() {
  return (
    <div className="w-[100vw] h-[100vh] flex  flex-col justify-center items-center">
      <h1 className="text-6xl text-primary">Page Not Found</h1>
      <p className="font-cocogoose-light text-xl mt-5">
        There is nothing here ...
      </p>

      <button
        onClick={() => {
          window.location.replace("/dashboard/overview");
        }}
        className="px-6 py-4 rounded font-cocogoose text-white text-2xl mt-10 bg-primary"
      >
        Go Home
      </button>
    </div>
  );
}
