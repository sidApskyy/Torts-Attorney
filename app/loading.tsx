export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F8F8F6] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C6A24A] to-[#9B7830] flex items-center justify-center animate-pulse">
          <span className="font-serif text-2xl font-bold text-white">T</span>
        </div>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[#C6A24A] animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 rounded-full bg-[#C6A24A] animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 rounded-full bg-[#C6A24A] animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  )
}
