export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-khaki-beige/30 border-t-sky-surge rounded-full animate-spin" />
        <p className="text-sm text-khaki-beige font-google_sans tracking-wider">
          Loading...
        </p>
      </div>
    </div>
  );
}
